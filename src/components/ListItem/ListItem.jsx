import { Item } from "../Item";

const ListItem = ({ items, onItemChange }) => {
  return (
    <div className="listItem flex flex-wrap justify-between gap-4">
      {items.map((item) => (
        <Item item={item} onItemChange={onItemChange} />
      ))}
    </div>
  );
};

export default ListItem;
