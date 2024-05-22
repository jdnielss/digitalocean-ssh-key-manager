
const axios = require('axios');

const DIGITALOCEAN_TOKEN = 'your_digitalocean_token_here'; // Replace with your DigitalOcean API token
const EXCLUDE_KEY = ''

const apiClient = axios.create({
  baseURL: 'https://api.digitalocean.com/v2',
  headers: {
    'Authorization': `Bearer ${DIGITALOCEAN_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

async function getSSHKeys() {
  try {
    const response = await apiClient.get('/account/keys');
    return response.data.ssh_keys;
  } catch (error) {
    console.error('Error fetching SSH keys:', error);
    return [];
  }
}

async function deleteSSHKey(keyId) {
  try {
    await apiClient.delete(`/account/keys/${keyId}`);
    console.log(`SSH key with ID ${keyId} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting SSH key with ID ${keyId}:`, error);
  }
}

async function manageSSHKeys() {
  const keys = await getSSHKeys();
  for (const key of keys) {
    if (key.name !== EXCLUDE_KEY) {
      await deleteSSHKey(key.id);
    } else {
      console.log(`Skipping SSH key with name ${EXCLUDE_KEY} and ID ${key.id}.`);
    }
  }
}

manageSSHKeys();
