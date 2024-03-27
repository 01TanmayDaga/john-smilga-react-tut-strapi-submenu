import React from "react";
import {  FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";


function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            return (
              <article key={link.pageId}>
                <h4>{link.page}</h4>
                <ul className="sidebar-sublinks">
                  {link.links.map((ele) => {
                    return (
                      <li key={ele.id}>
                        <a href={ele.url}>
                          {ele.icon} {ele.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
