import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const SiteLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="mx-auto flex w-full max-w-content flex-1 flex-col page-padding">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SiteLayout;
