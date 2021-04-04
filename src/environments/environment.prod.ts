
export const environment = {
  production: true,
  auth: {
    domain: 'mayhew3.auth0.com',
    clientId: 'Re282m5GM0575vOJjhpguBptT8slmIb0',
    audience: 'https://oscars.v2.mayhew3.com/',
    redirectUri: window.location.origin,
  },
  httpInterceptor: {
    allowedList: [`*`],
  },
};
