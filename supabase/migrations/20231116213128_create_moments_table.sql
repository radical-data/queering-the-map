CREATE SEQUENCE public.moments_short_id_seq;

create table
  public.moments (
    id uuid not null default gen_random_uuid (),
    short_id int NOT NULL DEFAULT nextval('public.moments_short_id_seq'::regclass),
    created_at timestamp with time zone not null default now(),
    location geometry null,
    description text null,
    status text null,
    language character varying(2) null,
    constraint moments_pkey primary key (id),
    constraint moments_short_id_unique UNIQUE (short_id),
    constraint moments_language_check check (((language)::text ~ '^[a-z]{2}$'::text)),
    constraint moments_status_check check (
      (
        status = any (
          array[
            'pending'::text,
            'approved'::text,
            'rejected'::text
          ]
        )
      )
    )
  ) tablespace pg_default;