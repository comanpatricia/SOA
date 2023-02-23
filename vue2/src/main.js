import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-oq0noun8v2cmmgv6.us.auth0.com",
    clientId: "cZBNIMJP9oSJVGAHlb9GJ2Pm00yE9cdJ",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app');
