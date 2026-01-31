-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view waitlist" ON public.waitlist;

-- Create a restrictive policy that only allows service role to view waitlist
-- This means only backend/edge functions with service role can access the data
CREATE POLICY "Only service role can view waitlist"
ON public.waitlist
FOR SELECT
USING (auth.role() = 'service_role');