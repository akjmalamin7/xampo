import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const LazyLogin = lazy(()=>import("@/pages/signin/Signin"))
const LazyRegistration = lazy(()=>import("@/pages/signup/Signup"))
const LazyLanding = lazy(()=>import("@/pages/home/Home"))
const LazyCart = lazy(()=>import("@/pages/cart/Cart"))
const LazyPackages = lazy(()=>import("@/pages/packages/Packages"))
const LazyCreatePackage = lazy(()=>import("@/pages/createPackage/CreatePackage"))

export const router = createBrowserRouter([
  // !@___ public route __@
  {
    path:"/login",
    element:<LazyLogin/>
  },
  {
    path:"/registration",
    element:<LazyRegistration/>
  },
  {
    path:"/",
    element:<LazyLanding/>
  },
  {
    path:"/cart",
    element:<LazyCart/>
  },
  {
    path:"/packages",
    element:<LazyPackages/>
  },
  {
    path:"/create-package",
    element:<LazyCreatePackage/>
  },
]);
