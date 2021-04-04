const express = require('express');
const morgan = require('morgan');
const { join } = require('path');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();

const port = process.env.PORT || 4200;

app.use(morgan('dev'));

app.use(express.static(join(__dirname, './')));

const authConfig = {
  domain: 'mayhew3.auth0.com',
  audience: 'https://oscars.v2.mayhew3.com/'
}

if (!authConfig.domain || !authConfig.audience) {
  throw 'Please make sure that auth_config.json is in place and populated';
}

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256'],
});

app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});

app.listen(port, () => console.log(`App server listening on port ${port}`));
