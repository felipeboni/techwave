import { useState, useEffect } from "react";

import axios from "axios";
import { Star, ShoppingBag, Package, ChevronRight } from "react-feather";
import ProductCard from "@/modules/product";

import { useSession, signIn } from "next-auth/react";
import _ from "lodash";

import { toast } from "react-toastify";

import { useRouter } from "next/router";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart.slice';

export default function Product() {
  const { data: session } = useSession();
  const router = useRouter();

  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [product]);

  useEffect(() => {
    if (products.length == 0) return;

    setLoading(true);

    axios
      .get(`/api/products/${router.query.id}`)
      .then((res) => setProduct(res.data));
  }, [products, router.asPath]);

  return (
    <div className="max-w-[1400px] mx-auto py-12">
      {product && !loading ? (
        <div className="px-8 grid grid-cols-[40%_60%] justify-center items-center gap-8">
          <div className="relative h-auto p-5 border-2 aspect-square rounded-xl border-sky-100/50">
            {product.inStock ? (
              <div className="absolute top-0 right-0 flex flex-col items-center justify-center p-2 text-sm text-white rounded-tr-lg rounded-bl-lg bg-sky-500">
                <span>In stock</span>
              </div>
            ) : (
              <div className="absolute top-0 right-0 flex flex-col items-center justify-center p-2 text-sm text-white bg-red-500 rounded-tr-lg rounded-bl-lg">
                <span>Out of stock</span>
              </div>
            )}
            <div
              className="w-full h-full bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${product.thumbnailImage})` }}
            />
          </div>

          <div className="flex flex-col items-start justify-start w-full h-full gap-5 text-slate-500">
            <div className="mb-10">
              <h1 className="text-2xl font-semibold">{product.title}</h1>

              <div className="mt-1">
                <span className="text-slate-500/50">ID #{product.asin}</span>
              </div>

              <div className="flex items-center gap-1 mt-1">
                <span className="text-slate-500/50">
                  {product.reviewsCount} reviews &nbsp;•&nbsp;
                </span>
                <span className="text-slate-500/50">{product.stars}</span>
                <Star className="w-4 h-4 star-icon" />
              </div>
            </div>

            <div className="flex items-end justify-between w-full leading-none">
              <div>
                {product.listPrice && (
                  <h2 className="text-lg font-semibold line-through opacity-50">
                    {product.listPrice.currency}
                    {product.listPrice.value.toFixed(2)}
                  </h2>
                )}
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-4xl font-semibold text-green-500">
                    {product.price?.currency}
                    {product.price?.value.toFixed(2)}
                  </h2>

                  {product.listPrice && (
                    <div className="p-2 font-semibold text-white rounded-lg bg-sky-500">
                      -{" "}
                      {Math.trunc(
                        ((product.listPrice.value - product.price.value) /
                          product.listPrice.value) *
                          100
                      )}
                      %
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center font-semibold">
                <span className="text-slate-500/50">
                  Fastest delivery on&nbsp;
                </span>
                <span className="flex items-center gap-2 text-sky-500">
                  {product.fastestDelivery} <Package className="w-5 h-5" />
                </span>
              </div>
            </div>

            <div className="flex w-full gap-3">
              {session ? (
                <>
                  <button
                    onClick={() => {
                      dispatch(addToCart(product))
                      toast.success("Product added to cart!");
                    }}
                    disabled={!product.inStock}
                    className="flex-1 p-3 font-semibold text-white rounded-xl bg-sky-500"
                  >
                    Buy
                  </button>

                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={!product.inStock}
                    className="p-3 font-semibold text-sky-500 rounded-xl bg-sky-200"
                  >
                    <ShoppingBag />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => signIn()}
                    disabled={!product.inStock}
                    className="flex-1 p-3 font-semibold text-white rounded-xl bg-sky-500"
                  >
                    Buy
                  </button>

                  <button
                    onClick={() => signIn()}
                    disabled={!product.inStock}
                    className="p-3 font-semibold text-sky-500 rounded-xl bg-sky-200"
                  >
                    <ShoppingBag />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-8 grid grid-cols-[40%_60%] justify-center items-center gap-8 animate-pulse">
          <div className="h-auto p-5 rounded-lg aspect-square bg-slate-300"></div>

          <div className="flex flex-col items-start justify-start w-full h-full gap-5 text-slate-300">
            <div className="flex flex-col w-full gap-2">
              <div className="w-full h-10 rounded-lg bg-slate-300"></div>
              <div className="w-full h-10 rounded-lg bg-slate-300"></div>

              <div className="flex items-center gap-1">
                <span className="w-20 h-5 rounded-lg text-slate-300/50 bg-slate-300"></span>
                <span className="w-16 h-5 rounded-lg text-slate-300/50 bg-slate-300"></span>
              </div>
            </div>

            <div className="flex flex-col gap-1 leading-none">
              <h2 className="w-20 h-10 text-lg font-semibold line-through rounded-lg bg-slate-300"></h2>
              <div className="flex items-center justify-center w-32 h-10 gap-3 rounded-lg bg-slate-300"></div>
            </div>

            <div className="flex w-full gap-3">
              <div className="flex-1 h-12 rounded-lg bg-slate-300"></div>
              <div className="w-12 h-12 rounded-lg bg-slate-300"></div>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 mt-12">
        <div className="flex items-center justify-between py-3 border-b-2 border-sky-100/50">
          <div className="relative text-xl font-semibold w-max after:absolute after:bottom-[-13px] after:rounded-full after:left-0 after:h-1 after:bg-sky-500 after:w-full">
            <span className="text-slate-500">About </span>
            <span className="text-sky-500">This product</span>
          </div>
        </div>

        {product && !loading ? (
          <div className="flex gap-5 p-10">
            <div className="flex-1 max-w-[80%] pr-64">
              <div className="flex mb-10 font-semibold text-slate-500">
                <div>
                  {product.description || (
                    <span className="opacity-50">No description available</span>
                  )}
                </div>
              </div>

              <h6 className="mb-4 text-lg font-semibold text-sky-500">
                Features:
              </h6>

              <ul className="flex flex-col gap-5 text-sm font-semibold list-disc text-slate-500">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex px-5 py-3 border-2 border-slate-300 rounded-xl h-max w-[20%]">
              <table className="w-1/4 font-semibold text-left text-slate-500">
                <tr>
                  <th className="py-1 pr-3">Brand</th>
                  <td className="text-sky-500">{product.brand}</td>
                </tr>

                <tr>
                  <th className="py-1 pr-3">Seller</th>
                  <td className="text-sky-500">{product.seller.name}</td>
                </tr>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex gap-5 p-10 animate-pulse">
            <div className="flex-1 flex flex-col gap-1 max-w-[80%] pr-64">
              <div className="flex h-10 rounded-lg bg-slate-300" />
              <div className="flex h-10 rounded-lg bg-slate-300" />
              <div className="flex h-10 mb-5 rounded-lg bg-slate-300 w-[80%]" />

              <div className="flex w-32 h-10 rounded-lg bg-slate-300" />

              <div className="flex h-5 rounded-lg bg-slate-300" />
              <div className="flex h-5 rounded-lg bg-slate-300 w-[60%] mb-5" />
              <div className="flex h-5 rounded-lg bg-slate-300" />
              <div className="flex h-5 mb-5 rounded-lg bg-slate-300" />
              <div className="flex h-5 rounded-lg bg-slate-300" />
              <div className="flex h-5 rounded-lg bg-slate-300 w-[20%]" />
            </div>

            <div className="flex px-5 py-3 border-2 h-36 border-slate-300 rounded-lg w-[20%] bg-slate-300"></div>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between py-3 border-b-2 border-sky-100/50">
          <div className="relative text-xl font-semibold w-max after:absolute after:bottom-[-13px] after:rounded-full after:left-0 after:h-1 after:bg-sky-500 after:w-full">
            <span className="text-slate-500">Grab the </span>
            <span className="text-sky-500">Best deals</span>
          </div>

          <button className="flex items-center justify-center gap-1">
            <span className="text-slate-500">View All</span>
            <span>
              <ChevronRight className="w-5 h-5 text-sky-500" />
            </span>
          </button>
        </div>

        <div className="grid gap-5 justify-start items-center grid-cols-[repeat(auto-fill,250px)] min-h-[300px] max-h-[300px] mt-12">
          {loading
            ? [...Array(5)].map((x, i) => (
                <div
                  key={`${i}__deal`}
                  className="w-full h-full animate-pulse rounded-xl bg-slate-300"
                ></div>
              ))
            : [...Array(5)].map(
                (x, i) =>
                  products[i] && (
                    <ProductCard key={`${i}__deal`} props={products[i]} />
                  )
              )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const asin = context.params.id; // Get ID from slug `/book/1`

  return { props: { asin } };
}
