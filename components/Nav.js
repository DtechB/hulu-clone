import requsets from "../utils/requsets";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex py-2 px-10 sm:px-20 whitespace-nowrap text-2xl
      space-x-10 sm:space-x20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requsets).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125
           hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
