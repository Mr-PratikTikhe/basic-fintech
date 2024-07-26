const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

const app = express();
app.use(express.json());
app.use(cors());

const HASURA_URL = process.env.HASURA_URL;
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

// Route to get users
app.get('/users', async (req, res) => {
  const query = `
    query {
      users {
        id
        name
        email
      }
    }
  `;
  try {
    const response = await axios.post(HASURA_URL, { query }, {
      headers: {
        'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
      },
    });
    res.json(response.data.data);
  } catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
});

// Route to create a user
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required.' });
  }
  const query = `
    mutation($name: String!, $email: String!, $password: String!) {
      insert_users_one(object: {name: $name, email: $email, password: $password}) {
        id
      }
    }
  `;
  const variables = { name, email, password };
  try {
    const response = await axios.post(HASURA_URL, { query, variables }, {
      headers: {
        'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
      },
    });
    res.json(response.data.data.insert_users_one);
  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
});

// Handle root requests
app.get('/', (req, res) => {
  res.send('Welcome to the Fintech Platform API!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
