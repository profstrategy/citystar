
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://mxcuyvfcuqhlovbhmzjv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14Y3V5dmZjdXFobG92Ymhtemp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MjczNTYsImV4cCI6MjAzNzMwMzM1Nn0.FEpQvKXwwUZVLAoVXLW8sdGclh4SNcD3eXdwPXwOFuA"
export const supabase = createClient(supabaseUrl, supabaseKey)