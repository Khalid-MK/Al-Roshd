import { Outlet } from "react-router-dom";

import StaticHeader from "./StaticHeader";
import StickyHeader from "./StickyHeader";
import StickyFooter from "./StickyFooter";
import StaticFooter from "./StaticFooter";
import CopyRightsFooter from "./CopyRightsFooter";
const Layout = () => {
  return (
    <>
      <StaticHeader />
      <StickyHeader />
      <Outlet />
      <StaticFooter />
      <CopyRightsFooter />
      <StickyFooter />
    </>
  );
};

export default Layout;
