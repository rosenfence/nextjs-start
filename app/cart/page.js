import CartItem from '../components/CartItem';

export default function Cart() {
  let items = ['Tomatoes', 'Pasta'];
  return (
    <div>
      <h4 className='title'>Cart</h4>
      <CartItem name={items[0]} />
      <CartItem name={items[1]} />
    </div>
  );
}
