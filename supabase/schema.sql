-- SameDayScrub Database Schema
-- Run this in Supabase SQL Editor

-- Profiles (extends auth.users)
create table profiles (
  id uuid references auth.users primary key,
  full_name text,
  email text,
  phone text,
  role text check (role in ('client', 'worker', 'admin')),
  created_at timestamp default now()
);

-- Workers
create table workers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id),
  status text check (status in ('pending', 'active', 'suspended')) default 'pending',
  bio text,
  rating numeric(3,2) default 5.00,
  total_jobs integer default 0,
  stripe_account_id text,
  created_at timestamp default now()
);

-- Bookings
create table bookings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references profiles(id),
  job_date date not null,
  start_time time not null,
  duration_hours integer not null default 4,
  worker_count integer not null default 1,
  location_address text not null,
  location_city text not null,
  location_state text not null,
  location_zip text not null,
  job_notes text,
  status text check (status in ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')) default 'pending',
  total_amount integer not null,
  platform_fee integer not null,
  worker_payout integer not null,
  stripe_payment_intent_id text,
  stripe_charge_id text,
  created_at timestamp default now()
);

-- Booking Workers (junction)
create table booking_workers (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id),
  worker_id uuid references workers(id),
  check_in_time timestamp,
  check_out_time timestamp,
  payout_status text check (payout_status in ('pending', 'paid')) default 'pending',
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

-- RLS Policies
alter table profiles enable row level security;
alter table bookings enable row level security;
alter table booking_workers enable row level security;
alter table reviews enable row level security;
alter table workers enable row level security;

-- Clients can read their own profile
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);

-- Clients can view their own bookings
create policy "Clients can view own bookings" on bookings
  for select using (auth.uid() = client_id);

-- Clients can insert bookings
create policy "Clients can create bookings" on bookings
  for insert with check (auth.uid() = client_id);
