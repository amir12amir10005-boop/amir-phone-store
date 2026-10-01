// supabase.js

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://babdksoiscxgeajsuvec.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_w2oVXCZTmbZhqxKM9EnyWg_lcsRneSJ";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
