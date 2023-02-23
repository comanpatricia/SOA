<template>
  <h1>Shopping List</h1>

  <section class="shopping-list-container">
    <div
      class="shopping-list-item"
      v-for="(item, index) in items"
      :key="item.id"
    >
      <ShoppingListItem
        @delete-item="deleteItem(index)"
        :item="item"
        :index="index"
      />
    </div>
    <p>Total: {{ totalPrice() }} LEI</p>
    <div class="add-item">
      <font-awesome-icon icon="fa-solid fa-plus" size="md" />
      <button class="add-item-btn" @click="toggleButton">Add Item</button>
    </div>
  </section>

  <Modal @close-modal="toggleButtonAndReset" v-if="isModalOpen">
    <form @submit.prevent="addItemToList(itemInfo)">
      <div class="input-container">
        <input
          class="form-input"
          required
          placeholder="Name"
          v-model="itemInfo.name"
          id="name"
          type="text"
        />
        <input
          class="form-input"
          required
          placeholder="Price"
          v-model="itemInfo.price"
          id="price"
          type="number"
        />
      </div>
      <div class="textarea-container">
        <textarea
          class="form-input textarea"
          required
          height="100"
          placeholder="Description"
          v-model="itemInfo.description"
          id="description"
        />
        <button type="submit" class="add-item-modal">
          <font-awesome-icon icon="fa-solid fa-plus" size="md" />
        </button>
      </div>
    </form>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  deleteItem,
  addItem,
  totalPrice,
  resetItemInfo,
  itemInfo,
  items,
} from "../shoppingItemStore";
import Modal from "./Modal.vue";
import { TShoppingItem } from "../shoppingItemStore";
import ShoppingListItem from "../components/ShoppingListItem.vue";

export default defineComponent({
  name: "ShoppingList",
  setup() {
    let isModalOpen = ref<boolean>(false);
    const toggleButton = () => {
      isModalOpen.value = !isModalOpen.value;
    };
    const addItemToList = (item: TShoppingItem) => {
      addItem(item);
      resetItemInfo();
      toggleButton();
    };
    const toggleButtonAndReset = () => {
      resetItemInfo();
      toggleButton();
    };
    return {
      items,
      itemInfo,
      totalPrice,
      isModalOpen,
      toggleButton,
      resetItemInfo,
      addItemToList,
      deleteItem,
      toggleButtonAndReset,
    };
  },
  components: {
    Modal,
    ShoppingListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopping-list-container {
  display: flex;
  flex-direction: column;
  padding: 10px;

  .shopping-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid rgb(216, 216, 216);
  }

  .add-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: orange;
    font-weight: 500;

    .add-item-btn {
      cursor: pointer;
    }
  }
}

.input-container {
  display: flex;
  width: max-content;
  gap: 10px;
  padding: 20px;
  .form-input {
    border: none;
    max-width: 140px;
    padding: 10px;
    outline: none;
    border-bottom: 1px solid rgb(216, 216, 216);
  }
}

.textarea-container {
  width: 90%;
  display: flex;
  justify-content: center;
  padding: 20px;
  .textarea {
    font-family: "Poppins", sans-serif;
    border: none;
    overflow: auto;
    outline: none;
    width: 100%;
    height: 300px;
  }
}

.add-item-modal {
  cursor: pointer;
  color: orange;
}
</style>
