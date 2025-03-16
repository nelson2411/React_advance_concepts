import { lazy, LazyExoticComponent } from "react"
import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages"
import { NoLazyLoad } from "01-lazyload/pages/NoLazyLoad"

interface Route {
  to: string
  path: string
  Component: React.FC
  name: string
}

// Implementing lazy loading

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
)

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy Load",
  },

  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazyLoad,
    name: "No Lazy Load",
  },
]
