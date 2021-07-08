import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MeuContainer from "./components/MeuContainer";
import CarMenu from "./components/CarMenu";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function showProducts(item) {
    setFilteredProducts(products.filter((produto) => produto.name === item));
  }

  function handleClick(productId) {
    const addCart = products.find((produto) => produto.id === productId);
    if (!currentSale.includes(addCart)) {
      setCurrentSale([...currentSale, addCart]);
      setCartTotal(cartTotal + addCart.price);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Bem-vindo a Hamburgueria Kenzie</h1>
      </header>
      <div className="Menu">
        <div className="Menu__main">
          <MeuContainer
            products={products}
            filteredProducts={filteredProducts}
            showProducts={showProducts}
            handleClick={handleClick}
          />
        </div>
        <CarMenu
          currentSale={currentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
}

export default App;
