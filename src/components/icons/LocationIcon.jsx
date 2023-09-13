import React from "react";

const LocationIcon = ({ props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="24"
      viewBox="0 0 18 24"
      fill="none"
      {...props}
    >
      <path
        d="M8.61576 1C4.41123 1 1 4.24675 1 8.24555C1 12.8467 6.07717 20.1383 7.94145 22.6568C8.01883 22.7631 8.12026 22.8496 8.23745 22.9093C8.35463 22.9689 8.48427 23 8.61576 23C8.74725 23 8.87689 22.9689 8.99407 22.9093C9.11126 22.8496 9.21269 22.7631 9.29007 22.6568C11.1543 20.1394 16.2315 12.8504 16.2315 8.24555C16.2315 4.24675 12.8203 1 8.61576 1Z"
        stroke="#FF6B07"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.61586 11.1555C10.0179 11.1555 11.1544 10.019 11.1544 8.61696C11.1544 7.21493 10.0179 6.07837 8.61586 6.07837C7.21383 6.07837 6.07727 7.21493 6.07727 8.61696C6.07727 10.019 7.21383 11.1555 8.61586 11.1555Z"
        stroke="#FF6B07"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
