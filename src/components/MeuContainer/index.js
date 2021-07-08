import "./style.css";
import Product from "../Product";
import { useState } from "react";
function MeuContainer({
  products,
  filteredProducts,
  showProducts,
  handleClick,
}) {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      {filteredProducts.length < 1 ? (
        <Product products={products} handleClick={handleClick} />
      ) : (
        <Product products={filteredProducts} handleClick={handleClick} />
      )}
      <form>
        <input
          placeholder="Procurando por algo?"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button type="button" onClick={() => showProducts(userInput)}>
          Pesquisar
        </button>
      </form>
    </>
  );
}

export default MeuContainer;
