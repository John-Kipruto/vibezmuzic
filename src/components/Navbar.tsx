import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface NavbarProps {
  toggleShowSidebar: () => void;
}

const Navbar = (props: NavbarProps) => {
  const { toggleShowSidebar } = props;

  return (
    <div className="flex justify-between items-center sticky top-0 z-10 bg-black px-4 py-2">
      <div className="flex gap-1">
        <button
          onClick={toggleShowSidebar}
          className="lg:hidden cursor-pointer"
        >
          <Bars3Icon className="w-6 h-6 mr-1" />
        </button>
        <i className="text-2xl font-semibold">
          <span className="text-green-300">Vibez</span> Muzic
        </i>
      </div>
      <div className="flex gap-1 rounded-full">
        <input type="text" placeholder="Search Music" />
        <button>
          <MagnifyingGlassCircleIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex gap-1">
        <UserIcon className="w-6 h-6" />
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default Navbar;
