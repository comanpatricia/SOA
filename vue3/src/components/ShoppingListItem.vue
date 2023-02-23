<template>
  <div class="shopping-list-item-index">{{ index + 1 }}</div>
  <router-link class="shopping-item-link" :to="`/${item.id}`">
    <div class="shopping-item-container" :class="{ checked: isChecked }">
      {{ item.name }} <span>{{ item.price }} LEI</span>
    </div>
  </router-link>
  <div class="shopping-list-icons">
    <button @click="toggleChecked" class="icon-button icon-button-left">
      <font-awesome-icon icon="fa-solid fa-check" size="lg" />
    </button>
    <button @click="$emit('deleteItem', index)" class="icon-button">
      <font-awesome-icon icon="fa-solid fa-trash" size="lg" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { TShoppingItem } from "../shoppingItemStore";

export default defineComponent({
  name: "ShoppingListItem",
  emits: ["deleteItem"],
  setup() {
    let isChecked = ref<boolean>(false);

    const toggleChecked = () => {
      isChecked.value = !isChecked.value;
    };

    return { isChecked, toggleChecked };
  },
  props: {
    item: {
      type: Object as PropType<TShoppingItem>,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
});
</script>
<style lang="scss" scoped>
.shopping-list-container {
  display: flex;
  flex-direction: column;

  .shopping-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .shopping-list-item-index {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      font-weight: bold;
      font-size: 20px;
      color: orange;
      border-right: 1px solid rgb(216, 216, 216);
    }

    .shopping-item-link {
      row-gap: 20px;
      flex-grow: 1;
      padding: 10px;
      text-decoration: none;
      color: rgb(103, 103, 103);

      .shopping-item-container {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        gap: 18px;
      }
    }

    .shopping-list-icons {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-button {
        cursor: pointer;
        padding: 10px;
        width: 30px;
      }

      .icon-button:hover {
        color: rgb(139, 139, 139);
      }

      .icon-button-left {
        border-right: 1px solid rgb(216, 216, 216);
      }
    }
  }
}

.checked {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
