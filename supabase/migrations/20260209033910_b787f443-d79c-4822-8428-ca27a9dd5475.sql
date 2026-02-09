
-- Deny all SELECT on briefs table (no one needs to read from client side)
CREATE POLICY "No public read access to briefs"
ON public.briefs
FOR SELECT
USING (false);
