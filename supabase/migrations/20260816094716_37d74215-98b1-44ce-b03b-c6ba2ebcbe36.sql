CREATE TABLE public.member_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  member_id text NOT NULL UNIQUE,
  display_name text,
  status text NOT NULL DEFAULT 'active',
  plan text,
  valid_through timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.member_cards TO authenticated;
GRANT ALL ON public.member_cards TO service_role;

ALTER TABLE public.member_cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can read their own card"
ON public.member_cards FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Members can create their own card"
ON public.member_cards FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can update their own card"
ON public.member_cards FOR UPDATE TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$
LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_member_cards_updated_at
BEFORE UPDATE ON public.member_cards
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();