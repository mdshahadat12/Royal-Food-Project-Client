import CartCard from "../Components/Cart/CartCard";

const Cart = () => {
  return (
    <div className="grid grid-cols-1 col-span-4 gap-5">
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
    </div>
  );
};

export default Cart;
