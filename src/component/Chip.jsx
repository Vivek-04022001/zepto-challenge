import React from "react";

const Chip = ({ label, onRemove, image, id }) => {
  // Set a maximum length for the label
  const maxLength = 10;
  const truncatedLabel =
    label.length > maxLength ? `${label.substring(0, maxLength)}...` : label;

  return (
    <div className="px-4 py-3 bg-blue-500 text-white rounded-full max-w-36 flex items-center justify-between shadow-md">
      <div className="flex gap-2 items-center">
        <img src={image} alt={label} className="w-6 h-6 rounded-full" />
        <span className="max-w-[60px] overflow-hidden overflow-ellipsis">
          {truncatedLabel}
        </span>
      </div>
      <span
        className="ml-4 text-xl cursor-pointer hover:text-gray-300"
        onClick={() => onRemove(id)}
      >
        &times;
      </span>
    </div>
  );
};

export default Chip;