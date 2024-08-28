type OrderItemProps = {
  item: {
    quantity: number;
    name: string;
    totalPrice: number;
  };
  isLoadingIngredients: boolean;
  ingredients: string[];
  formatCurrency: (value: number) => string;
};



function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
  formatCurrency,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
