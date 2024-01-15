import React, { useState, useEffect } from "react";
import Chip from "./Chip";
import ChipList from "./ChipList";
import FilteredResults from "./FilteredResults";

const ChipInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchUsers = async () => {
    try {
      const apiUrl = "https://dummyjson.com/users";
      const response = await fetch(apiUrl);
      const data = await response.json();

      const modifiedData = data.users.map(({ id, firstName, email, image }) => ({
        id,
        name: firstName,
        email,
        image,
      }));

      setAvailableItems(modifiedData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredItems(value !== "" ? filterItems(value) : []);
  };

  const handleChipAdd = (name, image) => {
    const newChip = { name, image, id: chips.length + 1 };
    setChips([...chips, newChip]);
    setInputValue("");
    setFilteredItems([]);
  };

  const handleChipRemove = (id) => {
    const chipsRemaining = chips.filter((chip) => chip.id !== id);
    setChips(chipsRemaining);
  };

  const filterItems = (input) => {
    const stringInput = input.toLowerCase();
    return availableItems.filter(({ name }) => name.toLowerCase().includes(stringInput));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
   <div className="container max-w-6xl mx-auto mt-20 rounded-md shadow-md bg-white">
    <div className="w-full flex justify-start items-start gap-4 px-4 py-2 border-b-4 border-blue-500">
      <ChipList chips={chips} handleChipRemove={handleChipRemove} />
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
          className="placeholder:text-slate-600 outline-none ml-4 px-4 py-2 border-none focus:ring focus:border-blue-300 rounded-md"
        />
        <FilteredResults
          filteredItems={filteredItems}
          inputValue={inputValue}
          handleChipAdd={handleChipAdd}
        />
      </div>
    </div>
  </div>
  );
};

export default ChipInput;
