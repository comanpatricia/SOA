<template>
  <div class="home">
    <ShoppingList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShoppingList from "@/components/ShoppingList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    ShoppingList,
  },
});
</script>
