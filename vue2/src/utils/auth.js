import * as auth0 from 'auth0-js';

const webAuth = new auth0.webAuth({
    domain: "dev-oq0noun8v2cmmgv6.us.auth0.com",
    clientId: "Pp5ZRb08GRwxpBW7BEbZ1x1SSUGCdM0t",
    redirectUri: "",
    responseType: "token id_token",
    scope: "openid profile",
});

const login = () => {
    webAuth.authorize();
};

export { login };
