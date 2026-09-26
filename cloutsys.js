import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT_URL.supabase.co';
const supabaseKey = 'YOUR_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
  const { data, error } = await supabase.from('passwords').select('*');
  if (error) console.error('Error:', error);
  else console.log('Data:', data);
}

testSupabase();
