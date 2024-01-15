
import React from "react";

const FilteredResults = ({ filteredItems, inputValue, handleChipAdd }) => (
  <ul
    className={`min-w-[450px] divide-y-2 z-10  rounded-md max-h-[50dvh] overflow-auto  absolute top-16 shadow-lg ${
      filteredItems.length > 0 ? "border border-gray-300" : ""
    }`}
  >
    {filteredItems.map(({ name, email, image, id }) => (
      <li
        key={id}
        onClick={() => handleChipAdd(name, image)}
        className="flex gap-x-2 items-center py-2 px-6 cursor-pointer hover:bg-gray-300 transition-bg duration-300"
      >
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="flex-1">
          {name.split("").map((character, index) => (
            <span
              key={index}
              className={
                inputValue.toLowerCase().includes(character.toLowerCase())
                  ? "text-slate-500  font-extrabold "
                  : "text-back"
              }
            >
              {character}
            </span>
          ))}
        </span>
        <span className="text-slate-600 ml-4 text-sm">{email}</span>
      </li>
    ))}
  </ul>
);

export default FilteredResults;
