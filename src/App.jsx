import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body, Container } from "./components/Layout";
import { ListItem } from "./components/ListItem";
import items from "./dummy/items.json";

function App() {
  const [listItems, setListItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const sumTotal = (allItems) => {
    const total = allItems.reduce((prev, curr) => prev + curr.value, 0);
    const totalPrice = allItems.reduce(
      (prev, curr) => prev + curr.value * curr.price,
      0
    );
    setTotalItem(total);
    setTotalPrice(totalPrice);
  };

  const onItemChange = (itemChange) => {
    const newArrayItems = listItems.map((item) => {
      if (item.id === itemChange.id) {
        return itemChange;
      } else {
        return item;
      }
    });
    setListItems(newArrayItems);
    sumTotal(newArrayItems);
  };

  useEffect(() => {
    setListItems(items);
    sumTotal(items);
  }, []);

  return (
    <div className="App">
      <Container>
        <Header totalItem={totalItem} />
        <Body>
          <ListItem items={listItems} onItemChange={onItemChange} />
        </Body>
        <Footer totalPrice={totalPrice} />
      </Container>
    </div>
  );
}

export default App;
