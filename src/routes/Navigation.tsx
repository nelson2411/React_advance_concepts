import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import logo from "../logo.svg"
import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages"

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          <ul>
            <li>
              <NavLink
                to="/lazy01"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy-01
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy02"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy-02
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy03"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy-03
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="lazy01" element={<LazyPage01 />} />
          <Route path="/lazy02" element={<LazyPage02 />} />
          <Route path="/lazy03" element={<LazyPage03 />} />
          <Route path="/*" element={<Navigate to="/lazy01" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
