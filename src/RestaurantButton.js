import React from "react";

const RestaurantButton = ({ on }) => {
  return (
    <div>
      <button onClick={on} className="buttons-restaurant">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
