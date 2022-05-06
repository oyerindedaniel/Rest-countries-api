import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import ModeSwitch from "../modeSwitch/ModeSwitch";

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <nav class="bg-white dark:bg-darkEle shadow-md">
        <div class="flex justify-between items-center p-cont vsm:p-cont-vsm relative">
          <Link
            to="/"
            class="font-extrabold text-xl text-black dark:text-white"
          >
            Where in the world?
          </Link>
          <span class="text-xs font-normal absolute w-full left-16 top-12 vsm:hidden dark:text-white">
            Made by OYERINDE DANIEL
          </span>
          <div>
            <ModeSwitch />
          </div>
        </div>
      </nav>
      <main class="bg-lightBg dark:bg-darkBg min-h-screen">
        <div class="p-cont vsm:p-cont-vsm">{children}</div>
      </main>
    </Fragment>
  );
};

export default Layout;
