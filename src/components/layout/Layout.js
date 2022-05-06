import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import ModeSwitch from "../modeSwitch/ModeSwitch";

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <nav class="bg-white dark:bg-darkEle shadow-md">
        <div class="flex justify-between items-center p-cont vsm:p-cont-vsm">
          <Link
            to="/"
            class="font-extrabold text-xl text-black dark:text-white relative"
          >
            Where in the world?
            <span class="text-xs font-normal absolute w-full left-4 top-6 vsm:hidden">
              Made by{" "}
              <Link
                to="https://twitter.com/_danieloyerinde"
                class="text-black dark:text-white relative"
              >
                OYERINDE DANIEL
              </Link>
            </span>
          </Link>
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
