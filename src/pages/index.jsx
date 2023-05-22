import { useState, useEffect } from "react";

import { ChevronRight } from "react-feather";
import axios from "axios";

import _ from "lodash";

import { Caroussel } from "@/modules/caroussel";
import ProductCard from "@/modules/product";

export default function Index({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "Mobiles",
    "Eletronics",
    "Watches",
    "Keyboards",
    "Earbuds",
  ];

  const brands = [
    "apple",
    "realme",
    "xiaomi"
  ];

  useEffect(() => {
    axios
      .get("/data/list.json")
      .then((res) => setProducts(_.shuffle(res.data)));
  }, []);

  useEffect(() => {
    products.length > 0 && setLoading(false);
  }, [products]);

  return (
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="my-12 z-[0] relative">
        {loading ? (
          <div className="w-full bg-slate-300 h-[350px] rounded-xl animate-pulse"></div>
        ) : (
          <Caroussel />
        )}
      </div>

      <div className="flex flex-col gap-20">
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

        <div>
          <div className="flex items-center justify-between py-3 border-b-2 border-sky-100/50">
            <div className="relative text-xl font-semibold w-max after:absolute after:bottom-[-13px] after:rounded-full after:left-0 after:h-1 after:bg-sky-500 after:w-full">
              <span className="text-slate-500">Grab the </span>
              <span className="text-sky-500">Best categories</span>
            </div>

            <button className="flex items-center justify-center gap-1">
              <span className="text-slate-500">View All</span>
              <span>
                <ChevronRight className="w-5 h-5 text-sky-500" />
              </span>
            </button>
          </div>

          <div className="grid gap-5 justify-start items-center grid-cols-[repeat(auto-fill,18.8%)] min-h-[150px] max-h-[150px] mt-12 w-full">
            {loading
              ? [...Array(5)].map((x, i) => (
                  <div
                    key={`${i}__category`}
                    className="w-[150px] h-[150px] mx-auto rounded-full aspect-square animate-pulse bg-slate-300"
                  />
                ))
              : categories.map((category, i) => (
                  <a
                    href="#"
                    key={`${i}__category`}
                    className="flex flex-col items-center justify-center gap-3"
                  >
                    <div
                      className={`w-[150px] h-[150px] mx-auto rounded-full aspect-square bg-slate-300 bg-[url(/categories/mobiles.png)] bg-center bg-contain bg-no-repeat`}
                    />
                    <span className="text-sm font-semibold text-slate-500">
                      {category}
                    </span>
                  </a>
                ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between py-3 border-b-2 border-sky-100/50">
            <div className="relative text-xl font-semibold w-max after:absolute after:bottom-[-13px] after:rounded-full after:left-0 after:h-1 after:bg-sky-500 after:w-full">
              <span className="text-slate-500">Grab the </span>
              <span className="text-sky-500">Best brands</span>
            </div>

            <button className="flex items-center justify-center gap-1">
              <span className="text-slate-500">View All</span>
              <span>
                <ChevronRight className="w-5 h-5 text-sky-500" />
              </span>
            </button>
          </div>

          <div className="grid gap-5 justify-start items-center grid-cols-[repeat(auto-fill,32.3%)] min-h-[210px] max-h-[210px] mt-12">
            {loading
              ? [...Array(3)].map((x, i) => (
                  <div
                    key={`${i}__brand`}
                    className="w-full h-full animate-pulse rounded-xl bg-slate-300"
                  ></div>
                ))
              : brands.map((brand, i) => (
                  <div
                    key={`${i}__brand`}
                    className="w-full bg-cover h-max rounded-xl bg-repeat-norepeat"
                    style={{ backgroundImage: `url(./brands/bg_${brand}.svg)` }}
                  >
                    <img src={`./brands/${brand}.png`} className="object-contain object-center px-2 pt-2 mx-auto" />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
