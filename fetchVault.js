import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://skwegynyuqxlutzlhrwm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd2VneW55dXF4bHV0emxocndtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzgzMDA1MSwiZXhwIjoyMDczNDA2MDUxfQ.lHEhMqN4v13ISi5CjhqUYRCOcLK8Zq9_vm4bFAureB8'

const supabase = createClient(supabaseUrl, supabaseKey)

const USER_ID = 'a3e51cca-5ca1-43cf-b097-915c5d801375'

;(async () => {
  console.log(`Fetching credentials for user: ${USER_ID} ...\n`)

  const { data, error } = await supabase
    .from('vault')
    .select('*')
    .eq('user_id', USER_ID)

  if (error) {
    console.error('❌ Error fetching data:', error)
    return
  }

  if (!data || data.length === 0) {
    console.log('⚠️ No credentials found for this user.')
    return
  }

  console.log('-----------------------------------------------')
  console.log('🔐 Vault Contents')
  console.log('-----------------------------------------------')
  data.forEach((entry, i) => {
    console.log(`#${i + 1}`)
    console.log(`Service : ${entry.service}`)
    console.log(`Username: ${entry.username}`)
    console.log(`Password: ${entry.password}`)
    console.log('-----------------------------------------------')
  })

  console.log(`✅ Total records found: ${data.length}`)
})()
