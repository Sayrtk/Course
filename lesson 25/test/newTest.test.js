const sendHttpRequest = require('../sendHttpRequest');
const axios = require('axios');
const shazamJsonSchema = require('../testData/shazamSchema.json');

describe('Shazam API tests', () => {

    test('validate Shazam json schema', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': '04704c6a9bmsh7eca20ba591248dp18cd3ejsnccf4a109df41'
            }
        }

        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response.data).toBeValidSchema(shazamJsonSchema);
    })


    test('400 status code is received', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': '04704c6a9bmsh7eca20ba591248dp18cd3ejsnccf4a109df41'
            }
        }

        response = await sendHttpRequest(conf);
        await expect(response.status).toEqual(200);
    })


    test('403 status code is received when using a wrong RapidAPI-Key', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': '04704c6a9bmsh7eca20b4'
            }
        }
        response = await sendHttpRequest(conf, 'POST');
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })


    test.only('204 status code is received when not all params are passed', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': '04704c6a9bmsh7eca20ba591248dp18cd3ejsnccf4a109df41'
            }
        }
        response = await sendHttpRequest(conf, 'POST');
        await expect(response).toBeValidStatusCode(204); //почему-то здесь если ставлю в ожидании статус код 204 тест феилтся тк тут приходит 404 ошибка, хотя в постмане в аналогичной ситуации 204 
    })


    test('401 status code is received when X-RapidAPI-Key is not passed', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': ''
            }
        }
        response = await sendHttpRequest(conf, 'POST');
        await expect(response).toBeValidStatusCode(401);
        await expect(response.data.message).toEqual('Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info.');
    })

});