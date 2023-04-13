export default function CartItem({ name }) {
  return (
    <div className='cart-item'>
      <p>{name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
