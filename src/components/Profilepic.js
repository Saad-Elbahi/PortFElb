import React from "react";
import pic from"../assets/pic.png";

function Profilepic() {
  return (
    <div className="text-center mb-4">
      <img
        src={pic}
        alt="pic"
        className="rounded-circle profile-img"
      />
    </div>
  );
}

export default Profilepic;