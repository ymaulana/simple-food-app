import { Item } from "../Item";

const ListItem = ({ items }) => {
  return (
    <div className="listItem flex flex-wrap justify-between gap-4">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default ListItem;
