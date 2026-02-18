import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  toggleShowSidebar: () => void;
}

const MobileSidebar = (props: MobileSidebarProps) => {
  const { toggleShowSidebar } = props;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/** Overlay */}
      <div
        onClick={toggleShowSidebar}
        className="absolute inset-0 bg-white z-30 opacity-30"
      ></div>

      <div className="absolute inset-0 w-fit z-50 bg-black overflow-y-auto py-2 px-5">
        <div className="flex gap-1 mb-3 p-2">
          <button
            onClick={toggleShowSidebar}
            className="lg:hidden hover:cursor-pointer"
          >
            <Bars3Icon className="w-6 h-6 mr-1" />
          </button>
          <h1>
            <span>Vibez</span> Muzic
          </h1>
        </div>
        <div>
          <Sidebar toggleShowSidebar={toggleShowSidebar} />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
