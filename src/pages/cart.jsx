import Image from "next/image";
import Link from "next/link";

import { Plus, Minus, Trash2 } from "react-feather";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price.value,
      0
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto px-8">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full gap-6 p-12">
          <Image
            src="./arts/empty_cart.svg"
            width={350}
            height={350}
            className="text-red-200"
          />
          <h1 className="text-2xl font-bold text-center text-slate-500/75">
            Your cart is empty!
          </h1>

          <Link
            href="/"
            className="bg-gradient-to-r from-sky-400 to-sky-500 text-white font-bold py-2.5 px-4 rounded shadow-lg shadow-sky-500/20 flex justify-center items-center"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <div className="relative flex w-full gap-8 p-6">
          <div className="flex flex-col w-[75%]">
            {cart.map((item) => (
              <div key={`product__${item.asin}`} className="flex flex-row justify-between w-full gap-8 p-4 border-t-2">
                <div
                  className="h-[200px] bg-white bg-center bg-contain bg-no-repeat w-44"
                  style={{
                    backgroundImage: `url(${item.thumbnailImage})`,
                  }}
                />

                <div className="flex flex-col flex-1 py-2">
                  <h1 className="mb-2 text-lg font-bold text-slate-500 line-clamp-2">
                    {item.title}
                  </h1>
                  <span className="text-sm text-slate-500/75">
                    ID #{item.asin}
                  </span>
                  <span className="text-sm text-slate-500/75">
                    Brand: <span>{item.brand}</span>
                  </span>
                  <span className="text-sm text-slate-500/75">In Stock</span>

                  <div className="flex items-center justify-start gap-2 mt-auto">
                    <button
                      onClick={() => dispatch(incrementQuantity(item.asin))}
                      className="flex items-center justify-center rounded text-slate-500/75 w-7 h-7 bg-slate-200"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => dispatch(decrementQuantity(item.asin))}
                      className="flex items-center justify-center rounded text-slate-500/75 w-7 h-7 bg-slate-200"
                    >
                      <Minus size={16} />
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.asin))}
                      className="text-xs text-slate-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <h1 className="text-lg font-bold text-slate-500">Each</h1>
                  <span className="text-sm text-slate-500/75">
                    {item.price.currency}
                    {item.price.value.toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col py-2">
                  <h1 className="text-lg font-bold text-slate-500">Quantity</h1>
                  <span className="text-sm text-slate-500/75">
                    {item.quantity}
                  </span>
                </div>

                <div className="flex flex-col py-2">
                  <h1 className="text-lg font-bold text-slate-500">Total</h1>
                  <span className="text-sm font-bold text-green-500">
                    {item.price.currency}
                    {(item.price.value * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[20%] absolute right-0">
            <div className="fixed flex flex-col gap-4 p-4 border-2 rounded-lg">
              <div className="flex justify-between gap-6 text-xl">
                <span className="font-bold text-slate-500">
                  Estimated total
                </span>
                <span className="font-bold text-green-500">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white font-bold py-2.5 px-4 rounded shadow-lg shadow-sky-500/20 flex justify-center items-center">
                Buy now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
