import type { Playlist } from "../types/playlist";

export const MiddleRounded = (playlist: Playlist) => {
  return (
    <div className="h-full bg-gray-600 rounded flex flex-col justify-center items-center gap-3">
      <h1 className="font-bold text-xl">{playlist.name}</h1>
      <img
        src={playlist.cover}
        className="w-52 h-52 aspect-square rounded-full"
      />
    </div>
  );
};

export const NameBottom = (playlist: Playlist) => {
  return (
    <div className="h-full relative items-center">
      <img src={playlist.cover} className="w-full h-full rounded" />
      <p className="absolute bottom-0 left-12 font-bold text-xl">
        {playlist.name}
      </p>
    </div>
  );
};

export const NameBottomRight = (playlist: Playlist) => {
  return (
    <div className="h-full grid grid-cols-[20] grid-rows-[20] rounded bg-gray-600">
      <p className="col-start-1 col-end-18 row-start-1 row-end-4 rounded p-1 text-xl font-bold">
        {playlist.name}
      </p>
      <img
        src={playlist.cover}
        className="col-start-5 col-end-14 row-start-5 row-end-11 rounded-tr-4xl  rounded-bl-4xl z-50"
      />
    </div>
  );
};

export const NameTopLeft = (playlist: Playlist) => {
  return (
    <div className="h-full relative">
      <img src={playlist.cover} className="w-full h-full rounded" />
      <p className="absolute bottom-0">{playlist.name}</p>
    </div>
  );
};
