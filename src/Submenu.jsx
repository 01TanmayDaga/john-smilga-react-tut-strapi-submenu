import React, { useRef } from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";

function Submenu() {
  const { setPageId,pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);


  const submenuContainer = useRef(null)

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const result = submenu.getBoundingClientRect();
    const {left,right,bottom} = result;
    const {clientX,clientY} = e;

    if(clientX < left-1  || clientX > right -1 || clientY > bottom -1){
      setPageId(null)
    }
  }

  return (
    <div className={currentPage?"submenu show-submenu" : "submenu"} onMouseLeave={(handleMouseLeave)} ref={submenuContainer}>
      <h5>{currentPage?.page} </h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          return (
            <a key={link.id} href={link.url}>
              {link.icon} {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
