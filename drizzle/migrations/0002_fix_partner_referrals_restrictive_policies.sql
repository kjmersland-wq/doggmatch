DROP POLICY IF EXISTS "No client writes of partner referrals" ON public.partner_referrals;

CREATE POLICY "No client inserts of partner referrals"
ON public.partner_referrals AS RESTRICTIVE FOR INSERT TO anon, authenticated
WITH CHECK (false);

CREATE POLICY "No client updates of partner referrals"
ON public.partner_referrals AS RESTRICTIVE FOR UPDATE TO anon, authenticated
USING (false) WITH CHECK (false);

CREATE POLICY "No client deletes of partner referrals"
ON public.partner_referrals AS RESTRICTIVE FOR DELETE TO anon, authenticated
USING (false);
