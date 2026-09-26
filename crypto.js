import crypto from "crypto";

function encrypt(text, key) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, key.slice(0,16));
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
