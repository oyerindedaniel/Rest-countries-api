import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="flex items-center vsm:flex-col">
      <h1 class="dark:text-white">404 Page Not found</h1>
      <Link
        to="/"
        class="px-6 py-2 text-sm shadow-md ml-4 rounded-t rounded-b font-semibold dark:text-white dark:bg-darkEle vsm:mt-4"
      >
        Go Back To Home Page
      </Link>
    </div>
  );
};

export default NotFound;
