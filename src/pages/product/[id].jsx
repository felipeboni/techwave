import { useState, useEffect } from "react";

import { Star, ShoppingBag } from "react-feather";

import axios from "axios";

export default function Product({ asin }) {
  const [product, setProduct] = useState("");

  useEffect(() => {
    // axios.post(
    //   `https://api.apify.com/v2/acts/junglee~free-amazon-product-scraper/run-sync-get-dataset-items?token=${process.env.NEXT_PUBLIC_APIFY_TOKEN}`,
    //   {
    //     categoryUrls: [
    //       {
    //         url: `https://www.amazon.com/dp/${asin}`,
    //       },
    //     ],
    //   }
    // ).then((res) => {
    //   setProduct(res.data[0])
    // })
    
    setTimeout(() => {
      setProduct({
        title:
          "Skullcandy Crusher Evo Wireless Over-Ear Bluetooth Headphones for iPhone and Android with Mic / 40 Hour Battery Life / Extra Bass Tech / Best for Music, School, Workouts, and Gaming - Black",
        url: "https://www.amazon.com/dp/B08FCGH2RL",
        asin: "B08FCGH2RL",
        inStock: true,
        inStockText: "In Stock",
        brand: "Skullcandy",
        price: {
          value: 142.46,
          currency: "$",
        },
        listPrice: {
          value: 199.99,
          currency: "$",
        },
        shippingPrice: null,
        stars: 4.8,
        starsBreakdown: {},
        reviewsCount: 7957,
        answeredQuestions: 159,
        breadCrumbs:
          "Electronics › Headphones, Earbuds & Accessories › Headphones & Earbuds › Over-Ear Headphones",
        thumbnailImage:
          "https://m.media-amazon.com/images/I/71I0lybSq+L._AC_SY300_SX300_.jpg",
        description: null,
        features: [
          "Feel the bass tuned to you - Listen to songs the way they were made to be heard. With Audiodo customization the Crusher Evo analyzes your hearing and produces sound specifically for YOU. Adjust the bass with a slide to produce bass you can feel!",
          "One Fat Battery - 40 hours of listening off of 1 charge so whether you're on an all day gaming sesh or just don’t have time to charge you'll know that you still have some juice. If you do run out a 10 minute quicky... charge will give you 4 hours of play!",
          "What the **** is Crusher Tech? Have you ever wanted to really feel the bass? Now you can! Boost your bass with the bass slider, mellow out or go all in skull crushing! YOU decide. Crusher Tech enhances your iPhone, Android or Computer audio experience.",
          "Best thing since sliced bread, little more comfortable though. The Crusher Evo achieves this level of comfort through a thick padded headband and foam cushion ear pads and use the integrated hidden mic for calls.",
          "Travel with Crusher - Take your Crusher Evo travelling with you, proivded is a durable travel bag to protect your headphones while on the move. Plus, fold the Crusher Evo to protect them and save space.",
          "Never Lost & Warranty - With Tile Tech, if you misplace your Crusher Evo you can easily track them down and keep you gadgets safe! Also a 1 Year warranty is included with the Crusher Evo, wear your headphones in full confidence.",
        ],
        variantAsins: ["B08FCGLYFZ", "B08FCGH2RL"],
        reviewsLink:
          "/Skullcandy-Crusher-Wireless-Over-Ear-Headphone/product-reviews/B08FCGH2RL/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
        hasReviews: true,
        delivery: "Tuesday, May 16",
        fastestDelivery: "Friday, May 12",
        returnPolicy: null,
        support: null,
        variantAttributes: [
          {
            key: "Color",
            value: "True Black",
          },
        ],
        priceVariants: null,
        seller: {
          name: "Amazon.com",
          id: null,
          url: null,
          reviewsCount: null,
          averageRating: null,
        },
        bestsellerRanks: null,
        locationText: "Select your address",
      });
    }, 5000);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto py-12">
      {product ? (
        <div className="px-8 grid grid-cols-[40%_60%] justify-center items-center gap-8">
          <div className="h-auto p-5 border-2 aspect-square rounded-xl border-sky-100/50">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-contain"
              // style={{ backgroundImage: `url(${product.thumbnailImage})` }}
            />
          </div>

          <div className="flex flex-col items-start justify-start w-full h-full gap-5 text-slate-500">
            <div>
              <h1 className="text-2xl font-semibold">{product.title}</h1>

              <div className="flex items-center gap-1">
                <span className="text-slate-500/50">
                  {product.reviewsCount} reviews &nbsp;•&nbsp;
                </span>
                <span className="text-slate-500/50">{product.stars}</span>
                <Star className="w-4 h-4 star-icon" />
              </div>
            </div>

            <div className="flex flex-col leading-none">
              {product.listPrice && (
                <h2 className="text-lg font-semibold line-through opacity-50">
                  {product.listPrice.currency}
                  {product.listPrice.value.toFixed(2)}
                </h2>
              )}
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-4xl font-semibold text-green-500">
                  {product.price.currency}
                  {product.price.value.toFixed(2)}
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

            <div className="flex w-full gap-3">
              <button className="flex-1 p-3 font-semibold text-white rounded-xl bg-sky-500">
                Buy
              </button>
              <button className="p-3 font-semibold text-sky-500 rounded-xl bg-sky-200">
                <ShoppingBag />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-8 grid grid-cols-[40%_60%] justify-center items-center gap-8 animate-pulse">
          <div className="h-auto p-5 rounded-lg aspect-square bg-slate-300">
          </div>

          <div className="flex flex-col items-start justify-start w-full h-full gap-5 text-slate-300">
            <div className="flex flex-col w-full gap-2">
              <div className="w-full h-10 rounded-lg bg-slate-300"></div>
              <div className="w-full h-10 rounded-lg bg-slate-300"></div>

              <div className="flex items-center gap-1">
                <span className="w-20 h-5 rounded-lg text-slate-300/50 bg-slate-300">
                </span>
                <span className="w-16 h-5 rounded-lg text-slate-300/50 bg-slate-300">
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 leading-none">
              <h2 className="w-20 h-10 text-lg font-semibold line-through rounded-lg bg-slate-300">
              </h2>
              <div className="flex items-center justify-center w-32 h-10 gap-3 rounded-lg bg-slate-300">
              </div>
            </div>

            <div className="flex w-full gap-3">
              <div className="flex-1 h-12 rounded-lg bg-slate-300">
              </div>
              <div className="w-12 h-12 rounded-lg bg-slate-300">
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const asin = context.params.id; // Get ID from slug `/book/1`

  return { props: { asin } };
}
