import useDarkSide from "../../hooks/use-darkside";

import icons from "../../svg/sprite.svg";

const ModeSwitch = () => {
  const [colorTheme, setTheme] = useDarkSide();

  const toggleMode = (checked) => {
    setTheme(colorTheme);
  };

  return (
    <span class="flex items-center cursor-pointer" onClick={toggleMode}>
      <svg class="h-5 w-5 mr-3 dark:stroke-lightInput stroke-black dark:fill-white">
        <use
          xlinkHref={`${icons}#icon-${
            colorTheme === "light" ? "wb_sunny" : "moon-o"
          }`}
        ></use>
      </svg>
      <h4 class="font-semibold text-black dark:text-white">
        {colorTheme === "light" ? "Light Mode" : "Dark Mode"}
      </h4>
    </span>
  );
};

export default ModeSwitch;
