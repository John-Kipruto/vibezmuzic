import {
  ArrowDownTrayIcon,
  FolderPlusIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import type { Song } from "../types/song";

interface SongsTableProps {
  songs: Song[];
}

const SongsTable = (props: SongsTableProps) => {
  const { songs } = props;
  const shareIcons = [ArrowDownTrayIcon, ShareIcon, FolderPlusIcon];
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="grid grid-cols-3 md:grid-cols-4 text-sm gap-4 font-semibold p-1">
          <h1>Title</h1>
          <h1>Plays</h1>
          <h1 className="hidden md:block"></h1>
          <h1>Time</h1>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {songs.map((song, index) => (
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center text-sm p-1 hover:bg-gray-600 hover:rounded hover:cursor-pointer">
            <p className="flex gap-4 items-center">
              <span>{index + 1}</span>
              <img src={song.image} className="w-12 h-12 rounded object-fill" />
              <span>{song.title}</span>
            </p>
            <p>{song.plays}</p>
            <p className="hidden md:flex gap-6">
              {shareIcons.map((Icon) => (
                <Icon className="w-5 -h-5 hover:cursor-pointer hover:text-green-300" />
              ))}
            </p>
            <p>{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsTable;
