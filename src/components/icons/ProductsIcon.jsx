import React from "react";

function ProductsIcon({ iconColor }) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7218 8H7.27734V10.5H27.7218V8ZM29 20.5V18L27.7222 11.75H7.27778L6 18V20.5H7.27778V28H20.0556V20.5H25.1667V28H27.7222V20.5H29ZM17.4997 25.5H9.83301V20.5H17.4997V25.5Z"
        fill={iconColor || "#FF8A00"}
      />
    </svg>
  );
}

export default ProductsIcon;
