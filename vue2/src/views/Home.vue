<template>
    <div>
      <button @click="loginClick()">Log in</button>
    </div>
  </template>
  
  <script>
  import { login } from "../utils/auth";
    export default {
        name: "Home",
        method: {
            loginClick() {
                login();
            }
        }
    };
  </script>