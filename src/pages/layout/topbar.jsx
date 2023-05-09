import { useState } from "react";
import Select from "react-select";

export default function TopBar() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="h-[60px] border-b-2 border-sky-100/50">
      <div className="max-w-[1400px] px-8 h-full mx-auto flex items-center justify-between gap-3">
        <Select
          unstyled
          classNames={{
            container: (state) =>
              state.isFocused
                ? "rounded-full bg-sky-500 text-white text-sm flex-1 relative"
                : "rounded-full bg-sky-50 text-slate-500 font-medium transition-all text-sm flex-1",
            control: (state) => "px-4",
            menuList: (state) =>
              "mt-2 text-slate-900 bg-white rounded-xl shadow-lg shadow-sky-800/10 p-4 mx-4 !z-[999]",
            option: (state) =>
              "p-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors cursor-pointer",
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          placeholder="Smartwatches"
        />

        <Select
          unstyled
          classNames={{
            container: (state) =>
              state.isFocused
                ? "rounded-full bg-sky-500 text-white text-sm flex-1 relative"
                : "rounded-full bg-sky-50 text-slate-500 font-medium transition-all text-sm flex-1",
            control: (state) => "px-4",
            menuList: (state) =>
              "mt-2 text-slate-900 bg-white rounded-xl shadow-lg shadow-sky-800/10 p-4 mx-4",
            option: (state) =>
              "p-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors cursor-pointer",
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          placeholder="iPhones"
        />
        <Select
          unstyled
          classNames={{
            container: (state) =>
              state.isFocused
                ? "rounded-full bg-sky-500 text-white text-sm flex-1 relative"
                : "rounded-full bg-sky-50 text-slate-500 font-medium transition-all text-sm flex-1",
            control: (state) => "px-4",
            menuList: (state) =>
              "mt-2 text-slate-900 bg-white rounded-xl shadow-lg shadow-sky-800/10 p-4 mx-4",
            option: (state) =>
              "p-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors cursor-pointer",
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          placeholder="iPads"
        />
        <Select
          unstyled
          classNames={{
            container: (state) =>
              state.isFocused
                ? "rounded-full bg-sky-500 text-white text-sm flex-1 relative"
                : "rounded-full bg-sky-50 text-slate-500 font-medium transition-all text-sm flex-1",
            control: (state) => "px-4",
            menuList: (state) =>
              "mt-2 text-slate-900 bg-white rounded-xl shadow-lg shadow-sky-800/10 p-4 mx-4",
            option: (state) =>
              "p-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors cursor-pointer",
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          placeholder="Macbooks"
        />
        <Select
          unstyled
          classNames={{
            container: (state) =>
              state.isFocused
                ? "rounded-full bg-sky-500 text-white text-sm flex-1 relative"
                : "rounded-full bg-sky-50 text-slate-500 font-medium transition-all text-sm flex-1",
            control: (state) => "px-4",
            menuList: (state) =>
              "mt-2 text-slate-900 bg-white rounded-xl shadow-lg shadow-sky-800/10 p-4 mx-4",
            option: (state) =>
              "p-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors cursor-pointer",
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          placeholder="Alexa"
        />
        <Select
          unstyled
          classNames={{
            container: (state) =>
              state.isFocused
                ? "rounded-full bg-sky-500 text-white text-sm flex-1 relative"
                : "rounded-full bg-sky-50 text-slate-500 font-medium transition-all text-sm flex-1",
            control: (state) => "px-4",
            menuList: (state) =>
              "mt-2 text-slate-900 bg-white rounded-xl shadow-lg shadow-sky-800/10 p-4 mx-4",
            option: (state) =>
              "p-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors cursor-pointer",
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          placeholder="AirPods"
        />
        <Select
          unstyled
          classNames={{
            container: (state) =>
              state.isFocused
                ? "rounded-full bg-sky-500 text-white text-sm flex-1 relative"
                : "rounded-full bg-sky-50 text-slate-500 font-medium transition-all text-sm flex-1",
            control: (state) => "px-4",
            menuList: (state) =>
              "mt-2 text-slate-900 bg-white rounded-xl shadow-lg shadow-sky-800/10 p-4 mx-4",
            option: (state) =>
              "p-2 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition-colors cursor-pointer",
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable={false}
          placeholder="Others"
        />
      </div>
    </div>
  );
};