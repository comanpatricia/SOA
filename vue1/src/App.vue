<template>
  <div id="app">
    <HelloWorld source="Vue 1"/>
  </div>
  <!-- <div id="app">
    <h1>Consumer App</h1>
    <div id="remote">
      <h2>Remote Component:</h2>
      <remote-component></remote-component>
    </div>
  </div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// import { ref, onMounted } from 'vue';
// const remote = ref(null);

// onMounted(async () => {
//   const module = await window['remote-app'].get('./App.vue');
//   remote.value = module.default;
// });

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>