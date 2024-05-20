create table
  public.votes (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    moment_id uuid null,
    moderator_id uuid null,
    vote_status text null,
    constraint votes_pkey primary key (id),
    constraint votes_moderator_id_fkey foreign key (moderator_id) references moderators (id),
    constraint votes_moment_id_fkey foreign key (moment_id) references moments (id) on update restrict on delete restrict,
    constraint votes_vote_status_check check (
      (
        vote_status = any (
          array[
            'approve'::text,
            'reject'::text,
            'request review'::text
          ]
        )
      )
    )
  ) tablespace pg_default;