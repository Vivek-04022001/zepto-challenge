import React from "react";
import Chip from "./Chip";

const ChipList = ({ chips, handleChipRemove }) => (
  <div className="flex gap-3 flex-wrap max-w-[70%] p-4 bg-gray-100 rounded-md shadow-md">
    {chips.map(({ name, image, id }, index) => (
      <Chip key={index} label={name} image={image} id={id} onRemove={handleChipRemove} />
    ))}
  </div>
);

export default ChipList;
