import { useState } from "react";
import { RingLoader } from "react-spinners";

const override={
  display: "block",
  margin: "50px auto",
  borderColor: "red",
};

function Loader({sizeNumber}) {
  return (
    <div>
      <RingLoader
  color="#fab3e4"
  cssOverride={override}
  loading
  size={sizeNumber}
  speedMultiplier={1.3}
/>
    </div>
  );
}

export default Loader;