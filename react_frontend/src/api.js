// API utility for frontend
const API_URL = 'http://localhost:5000/api';

export async function register(data) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function login(data) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getItems(token, parent = null) {
  const url = parent ? `${API_URL}/drive/items?parent=${parent}` : `${API_URL}/drive/items`;
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}

export async function createFolder(token, name, parent = null) {
  const res = await fetch(`${API_URL}/drive/folder`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ name, parent })
  });
  return res.json();
}

export async function uploadFile(token, file, parent = null) {
  const formData = new FormData();
  formData.append('file', file);
  if (parent) formData.append('parent', parent);
  const res = await fetch(`${API_URL}/drive/file`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: formData
  });
  return res.json();
}

export async function deleteItem(token, id) {
  const res = await fetch(`${API_URL}/drive/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}

export async function renameItem(token, id, name) {
  const res = await fetch(`${API_URL}/drive/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ name })
  });
  return res.json();
}
