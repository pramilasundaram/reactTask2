import "./styles.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import data from "./data.json";

import { useState } from "react";

export default function App() {
  const [description, setDescription] = useState([]);
  const [product, setProduct] = useState(data);

  const updatedes = (desc, id) => {
    let tempdesc = { id, desc };
    setDescription([...description, tempdesc]);
    let index = product.findIndex((obj) => obj.id === id);
    let temp = product;
    temp[index].isvisible = false;
    setProduct([...temp]);
  };
  const removedes = (id) => {
    setDescription(description.filter((value) => value.id !== id));
    let index = product.findIndex((obj) => obj.id === id);
    let temps = product;
    temps[index].isvisible = true;
    setProduct([...temps]);
  };

  return (
    <div className="App">
      <Navbar description={description} />
      <Home />

      <Product data={data} updatedes={updatedes} removedes={removedes} />
      <Footer />
    </div>
  );
}
