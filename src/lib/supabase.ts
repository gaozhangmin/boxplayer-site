import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL = 'https://ltqipofjjqjlbbfsgihi.supabase.co'
export const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0cWlwb2ZqanFqbGJiZnNnaWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTQxNjgsImV4cCI6MjA1NjA3MDE2OH0.g1vk-DaWbicHnSVZoGqskd0vOu-NuWtsDaMvFhe22mE'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false
  }
})
