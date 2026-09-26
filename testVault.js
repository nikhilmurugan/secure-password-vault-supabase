import { supabase } from './supabaseClient.js'

// Real UUID from your Supabase Auth users table
const testUserId = 'a3e51cca-5ca1-43cf-b097-915c5d801375'

async function testVault() {
  console.log("⚡ Starting Vault Test...")

  // Insert a test vault entry
  const { data: insertData, error: insertError } = await supabase
    .from('vault')
    .insert([
      {
        user_id: testUserId,
        service: 'Gmail',
        username: 'nikhilmurugan01@gmail.com',
        password: 'Vault0123'
      }
    ])

  if (insertError) console.error("❌ Insert Error:", insertError)
  else console.log("✅ Inserted:", insertData)

  // Fetch all vault entries
  const { data: rows, error: selectError } = await supabase
    .from('vault')
    .select('*')

  if (selectError) console.error("❌ Select Error:", selectError)
  else console.log("📂 Vault rows:", rows)
}

testVault()
