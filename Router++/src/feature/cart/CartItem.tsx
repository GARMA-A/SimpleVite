type CartItem = {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
  formatCurrency: (value: number) => string;
};




function CartItem({ item }: { item: CartItem }) {
  const { pizzaId, name, quantity, totalPrice, formatCurrency } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
