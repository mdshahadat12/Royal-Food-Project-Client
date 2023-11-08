import CartCard from "../Components/Cart/CartCard";

const Cart = () => {
  return (
    <div className="grid grid-cols-6 gap-5 my-10">
      <div className="grid grid-cols-1 col-span-4 gap-5">
        <CartCard></CartCard>
        <CartCard></CartCard>
        <CartCard></CartCard>
        <CartCard></CartCard>
      </div>
      <div className="border col-span-2">

      </div>
    </div>
  );
};

export default Cart;
