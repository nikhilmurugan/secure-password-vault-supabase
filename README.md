# Secure Cloud-Based Password Vault using Supabase Authentication and Vault Encryption

A secure password manager built using **React**, **Supabase Authentication**, **PostgreSQL**, and **HashiCorp Vault Transit Encryption**. The application securely stores user credentials using server-side encryption while ensuring authenticated users can only access their own vault entries through Row-Level Security.

## Overview

This project provides a cloud-based password vault that combines authentication, encrypted password storage, and secure key management.

Instead of storing plaintext passwords, passwords are encrypted using **HashiCorp Vault Transit Engine** before being stored in **Supabase PostgreSQL**.

## Features

* User Registration & Login with Supabase Authentication.
* Secure Password Vault Dashboard.
* AES-256-GCM encryption using HashiCorp Vault Transit Engine.
* PostgreSQL encrypted password storage.
* Row-Level Security (RLS) for user isolation.
* Password reveal only after secure server-side decryption.
* Notes and login metadata support.
* Responsive React UI.

## Tech Stack

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| Frontend       | React.js, HTML5, CSS3, JavaScript            |
| Backend        | Supabase Edge Functions                      |
| Authentication | Supabase Auth                                |
| Database       | PostgreSQL (Supabase)                        |
| Encryption     | HashiCorp Vault Transit Engine               |
| Security       | Row-Level Security (RLS), JWT Authentication |
| Deployment     | Vercel / Netlify + Supabase                  |

## Project Architecture

* User Authentication through Supabase.
* Password encryption handled by Supabase Edge Function.
* HashiCorp Vault manages encryption keys.
* Ciphertext stored in PostgreSQL.
* Password decrypted only when requested by the authenticated owner.

## System Architecture

![alt text](<System Architecture-1.png>)

## Security Highlights

* No plaintext passwords stored in the database.
* Encryption keys never exposed to the frontend.
* Vault Transit Engine performs encryption/decryption.
* JWT-based authenticated API requests.
* HTTPS communication across all services.
* Row-Level Security prevents unauthorized access.

## Database

Table: `vault_entries`

* user_id
* title
* login_name
* ciphertext
* notes
* created_at
* updated_at

RLS ensures users access only their own records.

## Installation

```bash
git clone https://github.com/nikhilmurugan/cloud-secure-password-vault-supabase.git

cd cloud-secure-password-vault-supabase/frontend

npm install

npm run dev
```

## Future Enhancements

* Multi-Factor Authentication.
* Password Generator.
* Security Audit Logs.
* Password Strength Analyzer.
* Key Rotation Dashboard.
* Zero-Knowledge Encryption Mode.

## Author

**Nikhil Murugan D P**
