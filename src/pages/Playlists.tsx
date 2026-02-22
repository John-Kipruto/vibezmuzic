import { playlists } from "../assets/db/playlists";

const Playlist = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      {playlists.map((list) => (
        <div className="rounded-md relative group">
          <img
            src={`${list.cover}`}
            className="aspect-square rounded-md rounded-b-none"
          />
          <p className="test-sm p-2">{list.name}</p>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 hidden group-hover:block group-hover:cursor-pointer rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
