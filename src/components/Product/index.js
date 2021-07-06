import "./style.css";

function Product({ products, handleClick }) {
  return (
    <ul className="itensCards">
      {products.map((produto, index) => (
        <li key={index}>
          <ul className="card">
            <li>{produto.name}</li>
            <li>Categoria: {produto.category}</li>
            <li>Preço: {produto.price}</li>
            <button onClick={() => handleClick(index)}>
              Adicionar ao Carrinho
            </button>
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Product;
