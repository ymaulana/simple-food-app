import { useEffect } from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body, Container } from "./components/Layout";
import { ListItem } from "./components/ListItem";
import items from "./dummy/items.json";
import { listItemsState } from "./recoil/items";

function App() {
  const [listItems, setListItems] = useRecoilState(listItemsState);

  useEffect(() => {
    setListItems(items);
  }, [setListItems]);

  return (
    <div className="App">
      <Container>
        <Header />
        <Body>
          <ListItem items={listItems} />
        </Body>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
