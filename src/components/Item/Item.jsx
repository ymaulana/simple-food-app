import currency from "../../utils/currency";
import Counter from "./Counter";

const Item = (props) => {
  const {
    item: { name, img, price, value },
  } = props;
  return (
    <div className="item w-[47%] rounded-lg overflow-hidden border-solid border box-border">
      <img src={img} alt="item-1" />
      <div className="item-info p-2">
        <p className="item-name m-0 font-bold">{name}</p>
        <p className="item-price mx-2 my-0 text-red-700">{currency(price)}</p>
        {value > 0 ? (
          <Counter />
        ) : (
          <button className="w-full rounded-3xl bg-transparent border border-solid border-[#4caf50] text-[#4caf50] p-1 mt-8 font-bold cursor-pointer">
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Item;
