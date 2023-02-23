<template>
  <div>
    <button type="button" @click="loginClick()">Log in</button>
  </div>
</template>

<script>
  import { login } from "../utils/auth.js";
  export default {
      methods: {
          loginClick() {
              login();
          }
      }
  };
</script>