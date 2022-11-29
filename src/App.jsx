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

  const sumTotal = (allItems) => {
    const total = allItems.reduce((prev, curr) => prev + curr.value, 0);
    setTotalItem(total);
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
          <ListItem items={listItems} />
        </Body>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
