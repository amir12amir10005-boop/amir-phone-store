// Supabase client for Amir Phone
const SUPABASE_URL = "https://babdksoiscxgeajsuvec.supabase.co";
const SUPABASE_KEY = "sb_publishable_w2oVXCZTmbZhqxKM9EnyWg_lcsRneSJ";

window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
console.log("Amir Phone: Supabase client initialized.");
