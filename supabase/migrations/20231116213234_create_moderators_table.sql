create table
  public.moderators (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    username character varying null,
    constraint moderators_pkey primary key (id)
  ) tablespace pg_default;