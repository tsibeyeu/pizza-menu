/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearItem, getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import Store from "../../Store";
import { getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const formError = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const currentUser = useSelector((state) => state.user.username);

  const cart = useSelector(getCart);
  const totalCartPrice=useSelector(getTotalCartPrice);
  const priorityPrice =withPriority ? totalCartPrice * 0.2 :0;
const totalPrice=totalCartPrice + priorityPrice

  console.log(cart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 font-semibold text-xl">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2   sm:flex-row sm:items-center ">
          <label className="sm:basis-40 ">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={currentUser}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40  ">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />

            {formError?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2   sm:flex-row sm:items-center ">
          <label className="sm:basis-40  ">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
            className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400  focus:ring-offset-2 "
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order" : ` Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "please give us correct phone number . we might need it to contact you.";
  }
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  Store.dispatch(clearItem())
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
