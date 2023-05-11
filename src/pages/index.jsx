import { useState, useEffect } from "react";

import { ChevronRight } from "react-feather";
import axios from "axios";

import { Caroussel } from "@/modules/caroussel";
import ProductCard from "@/modules/product";

export default function Index({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/data/list.json")
      .then((res) => setTimeout(() => setProducts(res.data), 3000));
  }, []);

  useEffect(() => {
    products.length > 0 && setLoading(false);
  }, [products]);

  return (
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="mt-12 z-[0] relative">
        {loading ? (
          <div className="w-full bg-slate-300 h-[350px] rounded-xl animate-pulse"></div>
        ) : (
          <Caroussel />
        )}
      </div>

      <div className="mt-12">
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
      </div>

      <div className="grid gap-5 justify-start items-center grid-cols-[repeat(auto-fill,250px)] min-h-[300px] max-h-[300px] mt-12">
        {loading
          ? [...Array(5)].map((x, i) => (
              <div key={i} className="w-full h-full animate-pulse rounded-xl bg-slate-300"></div>
            ))
          : [...Array(5)].map(
              (x, i) =>
                products[i] && <ProductCard key={i} props={products[i]} />
            )}
      </div>
    </div>
  );
}
