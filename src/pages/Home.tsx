import { songs } from "../assets/db/songs";
import { artists } from "../assets/db/artists";
import { SongCard } from "../components/SongCard";
import SmoothRow from "../components/SmoothRow";

export const trendingSongs = [...songs]
  .sort((a, b) => b.plays - a.plays)
  .slice(0, 10);

export const featuredArtists = [...artists]
  .sort((a, b) => b.monthlyListeners - a.monthlyListeners)
  .slice(0, 10);

const Home = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold mb-4">Trending</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-10 mb-4">Featured Artists</h2>
        <SmoothRow>
          {featuredArtists.map((artist) => (
            <img
              key={artist.id}
              src={artist.image}
              className="w-40 h-40 rounded-full  transition"
            />
          ))}
        </SmoothRow>
      </div>
    </div>
  );
};

export default Home;
