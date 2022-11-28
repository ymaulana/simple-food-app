import { useEffect } from "react";
import { useState } from "react";
import currency from "../../utils/currency";
import Counter from "./Counter";

const Item = (props) => {
  const { item, onItemChange } = props;
  const { name, img, price, value } = item;
  const [itemValue, setItemValue] = useState(0);

  const onAddItem = () => {
    setItemValue(itemValue + 1);
    onValueChange(itemValue + 1);
  };

  const onRemoveItem = () => {
    setItemValue(0);
  };

  const onValueChange = (valueChange) => {
    const newItem = { ...item };
    newItem.value = valueChange;
    onItemChange(newItem);
  };

  useEffect(() => {
    setItemValue(value);
  }, [value]);

  return (
    <div className="item w-[47%] rounded-lg overflow-hidden border-solid border box-border">
      <img src={img} alt="item-1" />
      <div className="item-info p-2">
        <p className="item-name m-0 font-bold">{name}</p>
        <p className="item-price mx-2 my-0 text-red-700">{currency(price)}</p>
        {itemValue > 0 ? (
          <Counter
            defaultValue={itemValue}
            onRemoveItem={onRemoveItem}
            onValueChange={onValueChange}
          />
        ) : (
          <button
            className="w-full rounded-3xl bg-transparent border border-solid border-[#4caf50] text-[#4caf50] p-1 mt-8 font-bold cursor-pointer"
            onClick={onAddItem}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Item;
