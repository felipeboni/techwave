import { useState, useEffect } from "react";

import { ChevronRight } from "react-feather";
import axios from "axios";

import { Caroussel } from "@/modules/caroussel";
import ProductCard from "@/modules/product";

export default function Index({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.apify.com/v2/acts/junglee~free-amazon-product-scraper/runs/last/dataset/items?token=${process.env.NEXT_PUBLIC_APIFY_TOKEN}`
      )
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="mt-12 z-[0] relative">
        <Caroussel />
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between py-3 border-b-2 border-sky-100/50">
          <div className="relative text-xl font-semibold w-max after:absolute after:bottom-[-13px] after:rounded-full after:left-0 after:h-1 after:bg-sky-500 after:w-full">
            <span className="text-slate-500">Grab the best deal on </span>
            <span className="text-sky-500">Smartphones</span>
          </div>

          <button className="flex items-center justify-center gap-1">
            <span className="text-slate-500">View All</span>
            <span>
              <ChevronRight className="w-5 h-5 text-sky-500" />
            </span>
          </button>
        </div>
      </div>

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,230px)] min-h-[300px] max-h-[300px] mt-12">
        {products.length > 0 && <ProductCard props={products[0]} />}
      </div>
    </div>
  );
}
