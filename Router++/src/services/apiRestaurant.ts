const API_URL: string = 'https://react-fast-pizza-api.onrender.com/api';

export interface MenuItem {
  // Define the properties of a menu item here
}

export async function getMenu(): Promise<MenuItem[]> {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}

export interface Order {
  id: number;
  // Add other properties of the order here
}

export async function getOrder(id: number): Promise<Order> {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder: Order): Promise<Order> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export interface UpdateOrder {
  // Define the properties to update an order here
}

export async function updateOrder(id: number, updateObj: UpdateOrder): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
