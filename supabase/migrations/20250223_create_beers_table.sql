-- Create beers table
create table public.beers (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  brewery text not null,
  style text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  image_url text not null,
  description text,
  alcohol_content numeric(3,1),
  user_id uuid not null
);

-- Enable Row Level Security
alter table public.beers enable row level security;

-- Create policies
create policy "Users can view all beers"
  on public.beers for select
  using (true);

create policy "Users can insert their own beers"
  on public.beers for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own beers"
  on public.beers for update
  using (auth.uid() = user_id);

create policy "Users can delete their own beers"
  on public.beers for delete
  using (auth.uid() = user_id);

-- Create updated_at trigger
create function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

create trigger handle_beers_updated_at
  before update on public.beers
  for each row
  execute function handle_updated_at();
