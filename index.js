const express = require('express');
const axios = require('axios');
const pug = require('pug');

const app = express();

const private_app_token = 'pat-eu1-e84e1a3c-26b8-4367-8327-58de429fd283';

app.get('/', async (req, res) => {
    const contactsEndpoint = 'https://api.hubspot.com/crm/v3/objects/contacts';
    const headers = {
        Authorization: `Bearer ${private_app_token}`,
        'Content-Type': 'application/json'
    }
    try {
        const response = await axios.get(contactsEndpoint, { headers });
        const contactsData = response.data;

        res.render('index', { title: 'Hubspot Test', message: 'Banby', contacts: contactsData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => console.log('Listenning on http://localhost:3000'));