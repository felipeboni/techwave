import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, LogOut } from "react-feather";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { useSelector } from "react-redux";

export default function NavBar() {
  const { data: session } = useSession();
  const [basePath, setBasePath] = useState("");

  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  useEffect(() => {
    setBasePath(window.location.origin);
  }, []);

  return (
    <div className="h-[90px] border-b-2 border-sky-100/50">
      <div className="max-w-[1400px] px-8 h-full mx-auto flex items-center justify-between">
        <div className="max-w-[180px] w-full">
          <Link href="/">
            <img
              src={`${basePath}/logos/Logo - Full - Blue.svg`}
              className="w-full h-full"
            />
          </Link>
        </div>

        <div className="flex justify-between w-1/2 gap-5">
          <form className="flex-1">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-sky-500" />
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full pr-5 py-3 pl-10 text-sm text-gray-900  rounded-lg bg-sky-50 border-2 border-sky-50 focus:ring-sky-500 focus:border-sky-500 focus-visible:border-2 focus-visible:ring-sky-500 focus-visible:border-sky-500 placeholder-slate-500"
                placeholder="Search watchs, phones, and more..."
                required
              />
            </div>
          </form>

          <div className="flex items-center justify-center gap-4">
            {session ? (
              <>
                <button className="relative flex items-center justify-center gap-2 group">
                  <User className="w-4 h-4 text-sky-500" />

                  <span className="font-semibold text-slate-500">
                    Hello,{" "}
                    <span className="text-sky-500">
                      {session.user.username}!
                    </span>
                  </span>
                </button>

                <div className="w-px h-4 bg-slate-500/20"></div>

                <button
                  onClick={() => signOut()}
                  className="relative flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4 text-sky-500" />

                  <span className="font-semibold text-slate-500">Sign out</span>
                </button>

                <div className="w-px h-4 bg-slate-500/20"></div>

                <Link
                  href="/cart"
                  className="relative flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-sky-500" />
                  {getItemsCount() > 0 && (
                    <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -left-3 -top-2 aspect-square">
                      {getItemsCount()}
                    </span>
                  )}

                  <span className="font-semibold text-slate-500">Cart</span>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => signIn()}
                  className="flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 text-sky-500" />

                  <span className="font-semibold text-slate-500">Sign In</span>
                </button>

                <div className="w-px h-4 bg-slate-500/20"></div>

                <button
                  onClick={() => signIn()}
                  className="relative flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-sky-500" />
                  {getItemsCount() > 0 && (
                    <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -left-3 -top-2 aspect-square">
                      {getItemsCount()}
                    </span>
                  )}

                  <span className="font-semibold text-slate-500">Cart</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
