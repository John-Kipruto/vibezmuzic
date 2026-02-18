import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./Routes";
import MobileSidebar from "./components/MobileSidebar";

const App = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleShowSidebar = () => {
    setShowMobileSidebar((prev) => !prev);
  };

  return (
    <div className="bg-black text-white">
      <Navbar toggleShowSidebar={toggleShowSidebar} />
      <div className="grid grid-cols-7 min-h-dvh py-2">
        <div className="col-span-1 hidden lg:block py-2 px-4">
          <Sidebar />
        </div>
        <div className="col-span-6 p-4">
          <AppRoutes />
        </div>
      </div>
      {showMobileSidebar && (
        <MobileSidebar toggleShowSidebar={toggleShowSidebar} />
      )}
    </div>
  );
};

export default App;
