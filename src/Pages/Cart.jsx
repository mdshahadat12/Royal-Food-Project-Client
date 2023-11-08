import { Helmet } from "react-helmet-async";
import CartCard from "../Components/Cart/CartCard";

const Cart = () => {
  return (
    <>
    <Helmet>
        <title>Royal Food || Odered Food</title>
      </Helmet>
    <div className="grid grid-cols-1 col-span-4 gap-5">
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
      <CartCard></CartCard>
    </div>
    </>
  );
};

export default Cart;
