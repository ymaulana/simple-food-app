import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body, Container } from "./components/Layout";
import { ListItem } from "./components/ListItem";
import items from "./dummy/items.json";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Body>
          <ListItem items={items} />
        </Body>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
