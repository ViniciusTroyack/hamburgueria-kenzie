import "./style.css";

function CarMenu({ currentSale, cartTotal, setCartTotal }) {
  return (
    <aside>
      <div>
        <h3>Carrinho de Compras</h3>
        <div className="subTotal">
          <h4>Total:{cartTotal.toFixed(2)}</h4>
        </div>
        <ul>
          {currentSale.map((produto, index) => (
            <li key={index}>
              <ul className="card">
                <li>{produto.name}</li>
                <li>Categoria: {produto.category}</li>
                <li>Preço: {produto.price}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default CarMenu;
