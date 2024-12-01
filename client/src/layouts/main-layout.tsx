import { Outlet, useLocation } from "react-router-dom";

import Button from "../components/ui/button";
import Insignia from "../components/insignia";

function MainLayout() {
  const { pathname } = useLocation();
  return (
    <main>
      <header className="px-6 py-6 max-w-screen-lg mx-auto">
        <nav className="flex items-center justify-between">
          <Insignia />
          <Button
            className={
              pathname === "/register" || pathname == "/login"
                ? "hidden"
                : undefined
            }
          >
            Get Started
          </Button>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default MainLayout;
