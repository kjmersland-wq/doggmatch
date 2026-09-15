-- 1) Trigger helper must not be callable from the API at all
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

-- 2) has_role: not callable by anonymous visitors, and signed-in users may only
--    check their own roles (all app usage passes auth.uid()).
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE
    WHEN auth.uid() IS NULL OR auth.uid() <> _user_id THEN false
    ELSE EXISTS (
      SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
    )
  END
$$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 3) Explicit fail-closed write rules for client roles (writes happen only via
--    trusted server code using the service role, which bypasses RLS).
DROP POLICY IF EXISTS "No client writes of partner referrals" ON public.partner_referrals;
CREATE POLICY "No client writes of partner referrals"
ON public.partner_referrals AS RESTRICTIVE FOR ALL TO anon, authenticated
USING (current_setting('request.method', true) IS NULL AND false OR (SELECT true WHERE false))
WITH CHECK (false);

DROP POLICY IF EXISTS "No client writes of user roles" ON public.user_roles;
CREATE POLICY "No client writes of user roles"
ON public.user_roles AS RESTRICTIVE FOR INSERT TO anon, authenticated
WITH CHECK (false);

DROP POLICY IF EXISTS "No client updates of user roles" ON public.user_roles;
CREATE POLICY "No client updates of user roles"
ON public.user_roles AS RESTRICTIVE FOR UPDATE TO anon, authenticated
USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "No client deletes of user roles" ON public.user_roles;
CREATE POLICY "No client deletes of user roles"
ON public.user_roles AS RESTRICTIVE FOR DELETE TO anon, authenticated
USING (false);

REVOKE INSERT, UPDATE, DELETE ON public.user_roles FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.partner_referrals FROM anon, authenticated;
