type Pizza = {
  pizza: {
    id: string;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
    formatCurrency: (value: number) => string;
  };
};


function MenuItem({ pizza }: Pizza ) {
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
    formatCurrency,
  } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
