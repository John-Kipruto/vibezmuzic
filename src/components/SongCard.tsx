import { usePlayer } from "../context/PlayerContext";

export const SongCard = ({ song }: any) => {
  const { currentSong, isPlaying, playSong, pauseSong } = usePlayer();

  return (
    <div className="cursor-pointer hover:bg-neutral-800 p-2 rounded-lg flex gap-6 items-center">
      <div className="flex items-center gap-1">
        <p>{song.title}</p>
        <p className="text-sm text-gray-400">{song.duration}</p>
      </div>

      <button onClick={() => (isPlaying ? pauseSong() : playSong(song))}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
