import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages"

interface Route {
  to: string
  path: string
  Component: React.FC // React.Fc is a type for functional components
  name: string
}

export const routes = [
  {
    to: "/lazy01",
    path: "lazy01",
    Component: LazyPage01,
    name: "Lazy-01",
  },
  {
    to: "/lazy02",
    path: "lazy02",
    Component: LazyPage02,
    name: "Lazy-02",
  },
  {
    to: "/lazy03",
    path: "lazy03",
    Component: LazyPage03,
    name: "Lazy-03",
  },
] as Route[] // This is useful for TypeScript to know the type of the array
