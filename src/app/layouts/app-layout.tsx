import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div className="app">
      <main>
        <Outlet />
      </main>
    </div>
  );
};
