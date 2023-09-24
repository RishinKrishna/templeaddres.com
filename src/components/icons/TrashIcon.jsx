import React from "react";

const TrashIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      {...props}
    >
      <path
        d="M21 6.33333L19.8436 22.5233C19.7439 23.9188 18.5827 25 17.1837 25H6.14965C4.75061 25 3.58944 23.9188 3.48976 22.5233L2.33333 6.33333M9 11.6667V19.6667M14.3333 11.6667V19.6667M15.6667 6.33333V2.33333C15.6667 1.59696 15.0697 1 14.3333 1H9C8.26363 1 7.66667 1.59696 7.66667 2.33333V6.33333M1 6.33333H22.3333"
        stroke="#A9A9A9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
