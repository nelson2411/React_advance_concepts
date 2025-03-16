import React from "react"
import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import { LazyPage01, LazyPage02, LazyPage03 } from "../pages"

function LazyLayout() {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <p>
        I'm baby mukbang adaptogen YOLO biodiesel normcore cardigan shabby chic
        waistcoat. Sartorial raw denim try-hard cold-pressed green juice cronut.
        Trust fund vaporware hella kinfolk DSA. Artisan hot chicken mixtape,
        synth tilde franzen keffiyeh pabst jianbing health goth distillery.
      </p>
      <ul>
        <li>
          <NavLink to="/lazyload/lazy-page-01">Lazy Page 01</NavLink>
        </li>
        <li>
          <NavLink to="/lazyload/lazy-page-02">Lazy Page 02</NavLink>
        </li>
        <li>
          <NavLink to="/lazyload/lazy-page-03">Lazy Page 03</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy-page-01" element={<LazyPage01 />} />
        <Route path="lazy-page-02" element={<LazyPage02 />} />
        <Route path="lazy-page-03" element={<LazyPage03 />} />

        <Route
          path="*"
          element={<Navigate replace to="/lazyload/lazy-page-01" />}
        />
      </Routes>
    </div>
  )
}

export default LazyLayout
