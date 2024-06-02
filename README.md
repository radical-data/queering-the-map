# Queering the Map

Queering the Map is a community-based platform where individuals anonymously pin their queer experiences and stories to specific locations on a global map.

## Setup

1. Setup a Supabase (local) project with the [official CLI](https://supabase.com/docs/guides/cli/getting-started)
1. Install dependencies with `npm install`.
1. Set the environment variables.
    1. Copy the `.env.example` file to `.env` (manually or with `cp .env.example .env`)
    1. Get your `SUPABASE_URL` and `SUPABASE_ANON_KEY` from the output of `supabase start`
1. Run the DB migrations locally with `supabase db reset`

## Developing

To start a development server:

```bash
npm run dev
```

## Testing

For testing the database make sure that the `pgTap` extension is enabled in postgres ([more info](https://supabase.com/docs/guides/database/extensions/pgtap))
Aftwerards you can run:
`supabase test db`


## Deploying and Building for production

To use Supabase as a remote backend make sure to link your local development with your remote Supabase project:

1. Make sure you have a Supabase acount and connect it to the supabase cli: `supabase login`
1. Link a specific remote project `supabase link --project-ref <project-ref>`  ([more info](https://supabase.com/docs/reference/cli/supabase-link))
1. Run migrations on remote DB `supabase db push` ([more info](https://supabase.com/docs/reference/cli/supabase-db-push))
1. Make sure that the env vars `SUPABASE_URL` and `SUPABASE_ANON_KEY` do point to the correct production project and not the local containers. You can grab them from inside [your Supabase project's dashboard](https://supabase.com/dashboard/project/_/settings/api).

To create a production version of the app:

```bash
npm run build
```

### Set up Captcha Protection

Follow the section 'Sign up for Captcha Supabase' in [Supabase's guide for Captcha Protection](https://supabase.com/docs/guides/auth/auth-captcha?captcha-method=turnstile-1&queryGroups=captcha-method).
