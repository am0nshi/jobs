import { useState, useCallback } from "react"

import Notifications from "./Notifications";
import Login from "./Login";
import MainMenu from "./MainMenu"
import HeaderImg from "/public/assets/images/header1-logo.svg"

const MenuArea = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = useCallback(() => {
    setShowMenu(state => !state)
  }, [])

  return (
    <div>
      <div className="menu-area">
        <div className="header-logo">
          <a href="index.html"><img alt="image" className="img-fluid" src={HeaderImg} /></a>
        </div>
        <MainMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <ul>
            <Notifications />
            <Login />
          </ul>
          <div className="sidebar-button mobile-menu-btn "
            onClick={toggleShowMenu}
          >
            <i className="bi bi-list"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuArea