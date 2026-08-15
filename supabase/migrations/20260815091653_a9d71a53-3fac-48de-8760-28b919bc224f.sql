CREATE TABLE public.plus_waitlist (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  email text NOT NULL,
  consented_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX plus_waitlist_email_key ON public.plus_waitlist (lower(email));

GRANT INSERT ON public.plus_waitlist TO anon;
GRANT INSERT ON public.plus_waitlist TO authenticated;
GRANT ALL ON public.plus_waitlist TO service_role;

ALTER TABLE public.plus_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON public.plus_waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(first_name)) BETWEEN 1 AND 100
    AND length(btrim(email)) BETWEEN 3 AND 255
    AND position('@' in email) > 1
  );