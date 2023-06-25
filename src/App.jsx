import { useState } from "react";

import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillBookFill,
} from "react-icons/bs";
import { AiFillEnvironment, AiOutlineLogout } from "react-icons/ai";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import {
  BiSolidVideos,
  BiSolidMessage,
  BiSolidUserRectangle,
} from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";

const App = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuOpenId, setSubMenuOpenId] = useState("");

  const handleToggleSubMenu = (id) => {
    if (id === subMenuOpenId && subMenuOpen) {
      setSubMenuOpen("");
      setSubMenuOpen(false);
      return;
    }

    setSubMenuOpenId(id);
    setSubMenuOpen(true);
  };

  const menuItems = [
    { title: "Dashboard", id: "1", icon: <RiDashboardFill /> },
    { title: "Pages", id: "2", icon: <BsFillBookFill /> },
    { title: "Media", spacing: true, id: "3", icon: <BiSolidVideos /> },
    {
      title: "Projects",
      icon: <MdWork />,
      id: "4",
      subMenu: true,
      subMenuId: "1",
      subMenuItems: [
        { title: "Projects Submenu 1", itemId: "1" },
        { title: "Projects Submenu 2", itemId: "2" },
        { title: "Projects Submenu 3", itemId: "3" },
      ],
    },
    { title: "Analytics", id: "5", icon: <DiGoogleAnalytics /> },
    { title: "Inbox", id: "6", icon: <BiSolidMessage /> },
    {
      title: "Profile",
      icon: <BiSolidUserRectangle />,
      id: "7",
      spacing: true,
      subMenu: true,
      subMenuId: "2",
      subMenuItems: [
        { title: "Profile Submenu 1", itemId: "1" },
        { title: "Profile Submenu 2", itemId: "2" },
        { title: "Profile Submenu 3", itemId: "3" },
      ],
    },
    { title: "Settings", id: "8", icon: <RiSettings5Fill /> },
    { title: "Logout", id: "9", icon: <AiOutlineLogout /> },
  ];
  return (
    <main className="flex">
      <aside
        className={`bg-dark-purple h-screen p-5 pt-8 relative ${
          open ? "w-72 " : "w-20"
        } duration-300 overflow-y-auto overflow-x-visible no-scrollbar`}
      >
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-3xl rounded cursor-pointer block float-left mr-2 ${
              open ? "" : "rotate-[360deg]"
            } duration-500`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl ${
              open ? "" : "scale-0"
            } duration-300`}
          >
            Tailwind
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            open ? "px-4" : "px-2.5"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg float-left cursor-pointer block ${
              open ? "mr-2" : ""
            }`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`bg-transparent text-white w-full focus:outline-none ${
              open ? "" : "hidden"
            }`}
          />
        </div>
        <ul className="pt-4">
          {menuItems.map((item) => (
            <>
              <li
                key={item.id}
                className={`text-gray-300 flex items-center gap-x-4 text-sm cursor-pointer hover:bg-light-white p-2 rounded-md ${
                  item?.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {item?.icon ?? <RiDashboardFill />}
                </span>
                <span
                  className={`font-medium text-base flex-1 ${
                    open ? "" : "scale-0"
                  }`}
                >
                  {item.title}
                </span>
                {item?.subMenu ? (
                  <BsChevronDown
                    onClick={() => handleToggleSubMenu(item?.subMenuId)}
                    className={`${
                      item?.subMenu &&
                      item?.subMenuId === subMenuOpenId &&
                      subMenuOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                ) : null}
              </li>
              <ul
                className={`${
                  item?.subMenu &&
                  item?.subMenuId === subMenuOpenId &&
                  subMenuOpen &&
                  open
                    ? "h-auto"
                    : "h-0"
                } px-4 duration-200 overflow-hidden`}
              >
                {item?.subMenuItems?.map((subMenuItem) => (
                  <>
                    <li
                      key={subMenuItem.itemId}
                      className={`text-gray-300 flex items-center gap-x-4 text-sm cursor-pointer hover:bg-light-white p-2 rounded-md ${
                        item?.spacing ? "mt-9" : "mt-2"
                      }`}
                    >
                      {subMenuItem.title}
                    </li>
                  </>
                ))}
              </ul>
            </>
          ))}
        </ul>
      </aside>
      <section className="p-7 relative">
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute z-20 left-0 top-6 border border-dark-purple cursor-pointer ${
            open ? "" : "rotate-180"
          } -translate-x-[50%]`}
          onClick={() => setOpen((currentState) => !currentState)}
        />
        <h1 className="text-2xl font-semibold" title="Home">
          Home
        </h1>
      </section>
    </main>
  );
};

export default App;
