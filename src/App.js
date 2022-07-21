import Navigation from "./components/Navigation";
import { Routes, Route } from 'react-router-dom';
import Store from './components/Store';
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import { ItemForm } from "./components/ItemForm";

function App() {
  return(
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/inventory" element={<Inventory />}>
          {/* <Route path=":id" element={<ItemForm />} /> */}
        </Route>
        <Route path="/inventory/:id" element={<ItemForm />} />
      </Routes>
    </div>
  );
}
export default App;
