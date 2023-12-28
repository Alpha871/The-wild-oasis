import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bxxtndcwiseyzrrydjmr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4eHRuZGN3aXNleXpycnlkam1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MDQ3NjksImV4cCI6MjAxMzE4MDc2OX0.2jyUCAsFTr7ACtjUodVPGcETqnx7ua2AnwsitgH_iAI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
