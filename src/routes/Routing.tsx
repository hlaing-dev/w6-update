import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "./paths";
import Profile from "../pages/profile/Profile";
import Payment from "../pages/payment/Payment";
import Fallback from "../Fallback";

const Home = lazy(() => import("../pages/Home"));
const Income = lazy(() => import("../pages/Income"));
const WithdrawRecord = lazy(() => import("../pages/WithdrawRecord"));
const WithdrawDetail = lazy(() => import("../pages/WithdrawDetail"));
const Myhost = lazy(() => import("../pages/home/Myhost"));
const LiveAcc = lazy(() => import("../pages/home/LiveAcc"));
const NotFound = lazy(() => import("../pages/Home"));

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: paths.home,
      element: (
        <Suspense fallback={<Fallback />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: paths.income,
      element: (
        <Suspense fallback={<Fallback />}>
          <Income />
        </Suspense>
      ),
    },
    {
      path: paths.myHost,
      element: (
        <Suspense fallback={<Fallback />}>
          <Myhost />
        </Suspense>
      ),
    },
    {
      path: paths.withdraw_record,
      element: (
        <Suspense fallback={<Fallback />}>
          <WithdrawRecord />
        </Suspense>
      ),
    },
    {
      path: paths.withdraw_detail,
      element: (
        <Suspense fallback={<Fallback />}>
          <WithdrawDetail />
        </Suspense>
      ),
    },
    {
      path: paths.liveAccount,
      element: (
        <Suspense fallback={<Fallback />}>
          <LiveAcc />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Fallback />}>
          <NotFound />
        </Suspense>
      ),
    },
    {
      path: paths.profile,
      element: (
        <Suspense>
          <Profile />
        </Suspense>
      ),
    },
    {
      path: paths.payment,
      element: (
        <Suspense>
          <Payment />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
