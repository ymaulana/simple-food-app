import { selector } from "recoil";
import { atom } from "recoil";

export const listItemsState = atom({
  key: "listItemsState",
  default: [],
});

// export const totalItemState = atom({
//   key: "totalItemState",
//   default: 0,
// });

// export const totalPriceState = atom({
//   key: "totalPriceState",
//   default: 0,
// });

export const sumItemState = selector({
  key: "sumItemState",
  get: ({ get }) => {
    const items = get(listItemsState);
    const totalItem = items.reduce((prev, curr) => prev + curr.value, 0);
    const totalPrice = items.reduce(
      (prev, curr) => prev + curr.value * curr.price,
      0
    );

    return { totalItem, totalPrice };
  },
});
