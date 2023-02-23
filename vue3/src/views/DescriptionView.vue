<template>
  <router-link to="/">
    <div class="header-icon">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
  </router-link>
  <h1 class="header-title">{{ item.name }}</h1>
  <main>
    {{ item.description }}
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { items } from "../shoppingItemStore";
import { TShoppingItem } from "../shoppingItemStore";

export default defineComponent({
  name: "DescriptionView",
  setup() {
    const route = useRoute();

    const getDescriptionById = () => {
      const id = route.params.itemId;
      const item = items.find((item) => item.id === id);
      return item as TShoppingItem;
    };

    const item = getDescriptionById();

    return {
      item,
    };
  },
});
</script>

<style lang="scss">
.header-icon {
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 8px;
}

.header-title {
  flex: 1;
}
</style>
