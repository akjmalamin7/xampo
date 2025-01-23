import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const LazyLogin = lazy(() => import("@/pages/signin/Signin"));
const LazyRegistration = lazy(() => import("@/pages/signup/Signup"));
const LazyLanding = lazy(() => import("@/pages/landing/Landing"));
const LazyCart = lazy(() => import("@/pages/cart/Cart"));
const LazyPackages = lazy(() => import("@/pages/packages/Packages"));
const LazyCreatePackage = lazy(() => import("@/pages/createPackage/CreatePackage"));
const DashboardLayout = lazy(() => import("@/components/common/dashboardLayout"));
// const PrivateRoute = lazy(() => import("@/app/routes/PrivateRoutes"));

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/login",
    element: <LazyLogin />,
  },
  {
    path: "/registration",
    element: <LazyRegistration />,
  },
  {
    path: "/",
    element: <LazyLanding />,
  },

  // Private Routes (Dashboard)
  {
    path: "/dashboard",
    element: (
        <DashboardLayout />
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <LazyCart />,
      },
      {
        path: "/dashboard/packages",
        element: <LazyPackages />,
      },
      {
        path: "/dashboard/create-package",
        element: <LazyCreatePackage />,
      },
    ],
  },
]);
