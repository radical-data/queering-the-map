-- enable RLS on all tables
alter table public.moments enable row level security;
alter table public.votes enable row level security;
alter table public.moderators enable row level security;

-- create policy to allow public fetching of moments
create policy "Moments are viewable by everyone"
on moments for select
to authenticated, anon
using ( true );

-- create policy to allow public inserting of moments
create policy "Everyone can add new moments"
on moments for insert
to authenticated, anon
with check ( (select auth.role()) = 'anon' ); 

-- No policies for votes and moderators as those tables are not used in 1.0.
-- Once we implement the moderating service we can write the appropriate policies.

