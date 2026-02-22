import { createContext, useContext, useRef, useState } from "react";

type PlayerContextType = {
  currentSong: any;
  isPlaying: boolean;
  playSong: (song: any) => void;
  pauseSong: () => void;
  stopSong: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSong, setCurrentSong] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = async (song: any) => {
    if (!audioRef.current) return;

    setCurrentSong(song);
    audioRef.current.src = song.audio;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Autoplay blocked:", err);
    }
  };

  const pauseSong = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stopSong = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // reset to start
    setIsPlaying(false);
    setCurrentSong(null);
  };

  return (
    <PlayerContext.Provider
      value={{ currentSong, isPlaying, playSong, pauseSong, stopSong }}
    >
      {children}
      <audio ref={audioRef} />
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }
  return context;
};
