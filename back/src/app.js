const express = require('express')
const cors = require('cors')
const { OAuth2Client } = require('google-auth-library')
const router = new express.Router()
const app = express()

app.use(cors({
  origin: 'http://localhost:8080'
}))

app.use(express.json())

const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'postmessage',
)

app.post('api/auth/google', async (req, res) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
  console.log(tokens);
  
  res.json(tokens);
});

app.get('/test', async (req, res) => {
  res.json('xXXXXXXXXX')
})

module.exports = app