import { reactive } from "vue";
import { uuid } from "vue-uuid";

export type TShoppingItem = {
  name: string;
  id?: string;
  price: number | null;
  description: string;
};

const items = reactive([] as TShoppingItem[]);

const itemInfo = reactive({
  name: "",
  price: null,
  description: "",
} as TShoppingItem);

const totalPrice = () => {
  if (items) {
    const itemsPrices = items.map((item) => item.price);
    const total = itemsPrices.reduce((prev, curr) => {
      return (prev ?? 0) + (curr ?? 0);
    }, 0);
    return total;
  }
  return 0;
};

const resetItemInfo = () => {
  itemInfo.description = "";
  itemInfo.id = undefined;
  itemInfo.name = "";
  itemInfo.price = null;
};

const addItem = (item: TShoppingItem) => {
  const findItemWithSameNameIndex = items.findIndex(
    (i) => i.name.toLowerCase() === item.name.toLowerCase()
  );
  if (findItemWithSameNameIndex > -1) {
    items[findItemWithSameNameIndex] = {
      ...items[findItemWithSameNameIndex],
      price: item.price,
      description: item.description,
    };
  } else {
    const itemWithId = { ...item, id: uuid.v4() };
    items.push(itemWithId);
  }
  resetItemInfo();
};

const deleteItem = (index: number) => {
  items.splice(index, 1);
};

export { deleteItem, addItem, totalPrice, resetItemInfo, itemInfo, items };
