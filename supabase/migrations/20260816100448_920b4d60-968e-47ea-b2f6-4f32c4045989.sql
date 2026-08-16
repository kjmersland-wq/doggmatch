REVOKE SELECT, UPDATE, DELETE ON public.plus_waitlist FROM anon, authenticated;
GRANT INSERT ON public.plus_waitlist TO anon, authenticated;
GRANT ALL ON public.plus_waitlist TO service_role;

DROP POLICY IF EXISTS "No client reads of waitlist" ON public.plus_waitlist;
CREATE POLICY "No client reads of waitlist"
ON public.plus_waitlist
AS RESTRICTIVE
FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "No client updates of waitlist" ON public.plus_waitlist;
CREATE POLICY "No client updates of waitlist"
ON public.plus_waitlist
AS RESTRICTIVE
FOR UPDATE
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "No client deletes of waitlist" ON public.plus_waitlist;
CREATE POLICY "No client deletes of waitlist"
ON public.plus_waitlist
AS RESTRICTIVE
FOR DELETE
TO anon, authenticated
USING (false);