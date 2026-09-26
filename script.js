import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://skwegynyuqxlutzlhrwm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd2VneW55dXF4bHV0emxocndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4MzAwNTEsImV4cCI6MjA3MzQwNjA1MX0.qJuk9dxneEkxLNPiR3LeOxsSkmST1Zl22mRO2qQJ4ro'

const supabase = createClient(supabaseUrl, supabaseKey)
const USER_ID = 'a3e51cca-5ca1-43cf-b097-915c5d801375' // your user id

async function fetchVault() {
  const { data, error } = await supabase
    .from('vault')
    .select('*')
    .eq('user_id', USER_ID)

  const tableBody = document.querySelector('#vaultTable tbody')
  tableBody.innerHTML = ''

  if (error) {
    alert('Error fetching data: ' + error.message)
    return
  }

  if (!data || data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="4">No records found.</td></tr>`
    return
  }

  data.forEach((entry, i) => {
    const row = `
      <tr>
        <td>${i + 1}</td>
        <td>${entry.service}</td>
        <td>${entry.username}</td>
        <td>${entry.password}</td>
      </tr>
    `
    tableBody.innerHTML += row
  })
}

async function addCredential(event) {
  event.preventDefault()

  const service = document.getElementById('service').value.trim()
  const username = document.getElementById('username').value.trim()
  const password = document.getElementById('password').value.trim()
  const statusMsg = document.getElementById('statusMsg')

  if (!service || !username || !password) {
    alert('Please fill all fields!')
    return
  }

  const { data, error } = await supabase
    .from('vault')
    .insert([{ user_id: USER_ID, service, username, password }])

  if (error) {
    statusMsg.style.color = 'red'
    statusMsg.textContent = 'Error adding record: ' + error.message
  } else {
    statusMsg.style.color = 'green'
    statusMsg.textContent = ' New password added successfully!'
    document.getElementById('addForm').reset()
    fetchVault() // refresh table
  }
}

// Event listeners
document.getElementById('fetchBtn').addEventListener('click', fetchVault)
document.getElementById('addForm').addEventListener('submit', addCredential)
