import { lazy, LazyExoticComponent } from "react"
import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages"

interface Route {
  to: string
  path: string
  Component: React.ComponentType<any> | LazyExoticComponent<any>
  name: string
}

// Implementing lazy loading

const Lazy01 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage01" */ "../01-lazyload/pages/LazyPage01"
    )
)
const Lazy02 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage02" */ "../01-lazyload/pages/LazyPage02"
    )
)
const Lazy03 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage03" */ "../01-lazyload/pages/LazyPage03"
    )
)

export const routes = [
  {
    to: "/lazy01",
    path: "lazy01",
    Component: Lazy01,
    name: "Lazy-01",
  },
  {
    to: "/lazy02",
    path: "lazy02",
    Component: Lazy02,
    name: "Lazy-02",
  },
  {
    to: "/lazy03",
    path: "lazy03",
    Component: Lazy03,
    name: "Lazy-03",
  },
] as Route[] // This is useful for TypeScript to know the type of the array
