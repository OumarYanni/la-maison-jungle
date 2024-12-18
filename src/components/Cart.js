import "../styles/Cart.css";

function Cart() {
  const plants = [
    { name: "Monstera", price: 8 },
    { name: "Lierre", price: 10 },
    { name: "Bouquet de fleurs", price: 15 },
  ];

  const total = plants.reduce((acc, plant) => acc + plant.price, 0);

  return (
    <div className="lmj-cart">
      <ul>
        {plants.map((plant, index) => (
          <li key={index}> {`${plant.name} : ${plant.price}`}</li>
        ))}
      </ul>

      <h2> Total du Panier : {total}</h2>
    </div>
  );
}

export default Cart;
