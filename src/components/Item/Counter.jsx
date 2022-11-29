import { useEffect } from "react";
import { useState } from "react";

const Counter = ({ defaultValue, onRemoveItem, onValueChange }) => {
  const [value, setValue] = useState(0);

  const buttonStyle =
    "bg-transparent border border-[#4caf50] border-solid text-[#4caf50] font-bold w-6 h-6 rounded cursor-pointer ";

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onMinItem = () => {
    if (value > 0) {
      if (value === 1) {
        onRemoveItem();
      }
      setValue(value - 1);
      onValueChange(value - 1);
    } else {
      setValue(value);
      onValueChange(value);
    }
  };

  const onPlusItem = () => {
    setValue(value + 1);
    onValueChange(value + 1);
  };

  return (
    <div className="counter flex box-content w-full justify-between gap-1 mt-10">
      <button className={buttonStyle} onClick={onMinItem}>
        -
      </button>
      <input
        type="number"
        className="min-w-[10px] flex-1 bg-slate-400 border border-[#4caf50] border-solid font-bold text-center h-[24px] rounded p-0 appearance-none"
        value={value}
      />
      <button className={buttonStyle} onClick={onPlusItem}>
        +
      </button>
    </div>
  );
};

export default Counter;
