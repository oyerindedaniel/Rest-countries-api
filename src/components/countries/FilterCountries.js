import { useState } from "react";

import icons from "../../svg/sprite.svg";

const FilterCountries = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const filterVisibleControl = () => {
    setIsVisible((prevState) => !prevState);
  };

  const filterType = (
    <ul class="bg-white dark:bg-darkEle list-none mt-3 rounded-b text-sm cursor-pointer absolute left-0 top-14 z-50 w-full sm:max-w-13rem vsm:max-w-13rem">
      <li
        class="dark:text-white dark:hover:bg-darkBg hover:bg-neutral-200 px-4 py-1"
        onClick={props.onFilterByRegionHandler.bind(null, "africa")}
      >
        Africa
      </li>
      <li
        class="dark:text-white dark:hover:bg-darkBg hover:bg-neutral-200 px-4 py-1"
        onClick={props.onFilterByRegionHandler.bind(null, "americas")}
      >
        Americas
      </li>
      <li
        class="dark:text-white  dark:hover:bg-darkBg hover:bg-neutral-200 px-4 py-1"
        onClick={props.onFilterByRegionHandler.bind(null, "asia")}
      >
        Asia
      </li>
      <li
        class="dark:text-white dark:hover:bg-darkBg hover:bg-neutral-200 px-4 py-1"
        onClick={props.onFilterByRegionHandler.bind(null, "europe")}
      >
        Europe
      </li>
      <li
        class="dark:text-white dark:hover:bg-darkBg hover:bg-neutral-200 px-4 py-1"
        onClick={props.onFilterByRegionHandler.bind(null, "oceania")}
      >
        Oceania
      </li>
      <li
        class="dark:text-white dark:hover:bg-darkBg hover:bg-neutral-200 px-4 py-1"
        onClick={props.onFilterByRegionHandler.bind(null, "")}
      >
        All
      </li>
    </ul>
  );

  return (
    <div class="relative">
      <div
        class="flex items-center bg-white dark:bg-darkEle dark:text-white pr-3 rounded-t cursor-pointer shadow-md sm:max-w-13rem vsm:max-w-13rem"
        onClick={filterVisibleControl}
      >
        <span class="py-3 pl-2 pr-6">Filter by Region</span>
        <span>
          <svg class="h-3 w-3 mr-3 dark:stroke-white dark:fill-white">
            <use
              xlinkHref={`${icons}#icon-chevron-${isVisible ? "down" : "up"}`}
            ></use>
          </svg>
        </span>
      </div>
      {isVisible && filterType}
    </div>
  );
};

export default FilterCountries;
