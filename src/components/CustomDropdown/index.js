import classNames from "classnames";
import React, { useState } from "react";

export const CustomDropdown = ({
  button,
  optionsList,
  optionsContainerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (optionsList && optionsList.length > 0) {
    return (
      <div className="relative">
        <button
          type="button"
          className={classNames("flex items-center", button?.buttonClassName)}
          onClick={() => setIsOpen(true)}
        >
          {button.render()}
        </button>
        {isOpen && (
          <>
            <div
              className="fixed top-0 left-0 z-50 h-screen w-full  bg-transparent"
              onClick={() => setIsOpen(false)}
            ></div>
            <div
              className={classNames(
                "absolute z-[51] rounded-[10px] ",
                optionsContainerClassName
              )}
            >
              {optionsList.map((option, index) => {
                if (option.render) {
                  return option.render();
                }
                return (
                  <button
                    type="button"
                    key={index}
                    className={classNames(
                      "pointer px-4 py-2 hover:bg-[#ffffff74]",
                      option?.className
                    )}
                    value={option?.value}
                    onClick={() => {
                      if (typeof option.onClick === "function") {
                        option.onClick();
                      }
                      setIsOpen(false);
                    }}
                  >
                    {option?.icon} {option?.name}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
  return null;
};
