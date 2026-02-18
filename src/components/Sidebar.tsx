import {
  ChartBarIcon,
  FireIcon,
  FlagIcon,
  HandThumbUpIcon,
  InformationCircleIcon,
  ListBulletIcon,
  MusicalNoteIcon,
  PlusCircleIcon,
  StarIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Anchor {
  href: string;
  title: string;
  icon: any;
}

interface SidbarItem {
  title: string;
  links: Anchor[];
}

const Sidebar = (props: any) => {
  const { toggleShowSidebar } = props;
  const location = useLocation();
  const [visitedHref, setVisitedHref] = useState(location.pathname);

  const sidebarItems: SidbarItem[] = [
    {
      title: "Music",
      links: [
        {
          href: "/",
          title: "Home",
          icon: MusicalNoteIcon,
        },
        {
          href: "/trending",
          title: "Trending",
          icon: FireIcon,
        },
        {
          href: "/new",
          title: "New",
          icon: FlagIcon,
        },
        {
          href: "/artists",
          title: "Artists",
          icon: UsersIcon,
        },
        {
          href: "/videos",
          title: "Videos",
          icon: VideoCameraIcon,
        },
        {
          href: "/playlists",
          title: "Playlists",
          icon: ListBulletIcon,
        },
        {
          href: "/charts",
          title: "Charts",
          icon: ChartBarIcon,
        },
        {
          href: "/genres",
          title: "Genres",
          icon: InformationCircleIcon,
        },
      ],
    },
    {
      title: "Library",
      links: [
        {
          href: "/addPlaylist",
          title: "Add Playlist",
          icon: PlusCircleIcon,
        },
        {
          href: "/favourites",
          title: "Favourites",
          icon: HandThumbUpIcon,
        },
        {
          href: "myPlaylist",
          title: "My Playlist",
          icon: ListBulletIcon,
        },
      ],
    },
    {
      title: "Buzz",
      links: [
        {
          href: "/buzz",
          title: "Recommended",
          icon: StarIcon,
        },
      ],
    },
    {
      title: "Podcasts",
      links: [
        {
          href: "/podcasts",
          title: "Recommended",
          icon: StarIcon,
        },
      ],
    },
  ];

  const handleLinkClick = (link: Anchor) => {
    setVisitedHref(link.href);
    if (toggleShowSidebar) {
      toggleShowSidebar();
    }
  };
  return (
    <div className="px-3 overflow-y-auto">
      {sidebarItems.map((item) => (
        <div>
          <h1 className="font-semibold">{item.title}</h1>
          <ul className="p-2">
            {item.links.map((link) => (
              <li className="p-2">
                <Link
                  to={link.href}
                  onClick={() => handleLinkClick(link)}
                  className={`flex items-center gap-1 hover:text-green-300 ${visitedHref === link.href && "text-green-300"}`}
                >
                  <link.icon className="w-5 h-5 mr-1" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
