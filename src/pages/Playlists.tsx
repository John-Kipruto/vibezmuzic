import { PlayIcon } from "@heroicons/react/16/solid";
import { playlists } from "../assets/db/playlists";

const Playlist = () => {
  return (
    <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
      {playlists.map((list) => (
        <div className="rounded-md relative group">
          {/* <p className=" text-center text-xl font-bold">{list.name}</p> */}
          <img src={`${list.cover}`} className="aspect-square rounded-md" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 hidden group-hover:flex justify-center items-center rounded-md cursor-pointer">
            <div className="bg-white p-2 rounded-full">
              <PlayIcon className="w-10 h-10 text-black" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
