import { useState } from "react";
import Select from "react-select";
import { Caroussel } from "@/modules/caroussel";

export default function Index({ children }) {
  return (
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="my-5 z-[0] relative">
        <Caroussel />
      </div>
    </div>
  );
}
