-- CleanEMT Database Schema
-- Run this in Supabase SQL Editor.
-- Note: the customer-facing UI uses "job" and "dispatch" instead of "booking",
-- but the underlying table name stays `bookings` for migration continuity.

-- Profiles (extends auth.users)
create table profiles (
  id uuid references auth.users primary key,
  full_name text,
  email text,
  phone text,
  company text,
  role text check (role in ('client', 'worker', 'crew_lead', 'admin')) default 'client',
  created_at timestamp default now()
);

-- Workers (and crew leads — distinguished by profiles.role)
create table workers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id),
  status text check (status in ('pending', 'active', 'suspended')) default 'pending',
  is_crew_lead boolean default false,
  bio text,
  rating numeric(3,2) default 5.00,
  total_jobs integer default 0,
  service_categories text[] default '{}', -- e.g. {biohazard,flood,multifamily}
  stripe_account_id text,
  created_at timestamp default now()
);

-- Bookings (jobs / dispatches)
create table bookings (
  id uuid primary key default gen_random_uuid(),
  job_number text unique, -- e.g. SDS-20260428-A1B2
  client_id uuid references profiles(id),
  category text not null, -- biohazard, flood, post-construction, etc.
  clarifier text,
  urgency text check (urgency in ('now', 'today', 'scheduled')) default 'now',
  scheduled_for timestamp,
  location_address text not null,
  access_notes text,
  contact_name text,
  contact_company text,
  contact_phone text not null,
  contact_email text,
  status text check (
    status in (
      'pending',
      'confirmed',
      'crew_assigned',
      'en_route',
      'on_site',
      'job_complete',
      'signed_off',
      'cancelled'
    )
  ) default 'pending',
  trip_charge_cents integer not null default 40000,
  hourly_authorization_cents integer not null default 0,
  hourly_captured_cents integer,
  stripe_trip_intent_id text,
  stripe_hourly_intent_id text,
  signed_off_at timestamp,
  created_at timestamp default now()
);

-- Booking workers (junction)
create table booking_workers (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id),
  worker_id uuid references workers(id),
  is_lead boolean default false,
  check_in_time timestamp,
  check_out_time timestamp,
  payout_status text check (payout_status in ('pending', 'paid')) default 'pending',
  created_at timestamp default now()
);

-- Job photo log (before / during / after documentation)
create table booking_photos (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id),
  uploader_id uuid references profiles(id),
  phase text check (phase in ('before', 'during', 'after')) not null,
  storage_path text not null,
  created_at timestamp default now()
);

-- Reviews
create table reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id),
  client_id uuid references profiles(id),
  worker_id uuid references workers(id),
  rating integer check (rating between 1 and 5),
  comment text,
  created_at timestamp default now()
);

-- Lead magnet captures (facility managers, property managers, recurring quote)
create table leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  company text,
  source text, -- e.g. 'facility-managers', 'property-managers'
  created_at timestamp default now()
);

-- Crew applications
create table crew_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  zip text,
  role text check (role in ('Crew member', 'Crew lead')) default 'Crew member',
  years_experience text,
  has_transportation boolean default false,
  preferred_shift text,
  biohazard_ok boolean default false,
  status text check (status in ('new', 'contacted', 'background_check', 'hired', 'rejected')) default 'new',
  created_at timestamp default now()
);

-- RLS
alter table profiles enable row level security;
alter table bookings enable row level security;
alter table booking_workers enable row level security;
alter table booking_photos enable row level security;
alter table reviews enable row level security;
alter table workers enable row level security;
alter table leads enable row level security;
alter table crew_applications enable row level security;

-- Clients can view own profile / own bookings
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);

create policy "Clients can view own bookings" on bookings
  for select using (auth.uid() = client_id);

create policy "Clients can create bookings" on bookings
  for insert with check (auth.uid() = client_id);

-- Crew leads can see jobs they&rsquo;re assigned to
create policy "Crew leads can view assigned bookings" on bookings
  for select using (
    exists (
      select 1
      from booking_workers bw
      join workers w on w.id = bw.worker_id
      where bw.booking_id = bookings.id
        and w.profile_id = auth.uid()
    )
  );
