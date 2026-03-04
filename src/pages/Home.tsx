import { songs } from "../assets/db/songs";
import { artists } from "../assets/db/artists";
import SmoothRow from "../components/SmoothRow";
import { playlists } from "../assets/db/playlists";
import { charts } from "../assets/db/charts";

export const trendingSongs = [...songs]
  .sort((a, b) => b.plays - a.plays)
  .slice(0, 10);

export const featuredArtists = [...artists]
  .sort((a, b) => b.monthlyListeners - a.monthlyListeners)
  .slice(0, 10);

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Trending Songs</h2>
        <SmoothRow>
          {trendingSongs.map((song) => (
            <div className="shrink-0 rounded-md">
              <img
                key={song.id}
                src={song.image}
                className="w-44 h-44 aspect-square rounded-md"
              />
            </div>
            // <SongCard key={song.id} song={song} />
          ))}
        </SmoothRow>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-10 mb-4">Popular Artists</h2>
        <SmoothRow>
          {featuredArtists.map((artist) => (
            <img
              key={artist.id}
              src={artist.image}
              className="w-44 h-44 rounded-full  transition"
            />
          ))}
        </SmoothRow>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-lg">Weekly Top Charts</h1>
        <SmoothRow>
          {charts.slice(0, 14).map((chart) => (
            <div className="shrink-0 rounded-md">
              <img
                key={chart.id}
                src={chart.cover}
                className="w-44 h-44 aspect-square rounded-md"
              />
            </div>
          ))}
        </SmoothRow>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-lg">Weekly Top Albums</h1>
        <SmoothRow>
          {playlists.slice(15, 30).map((playlist) => (
            <div className="shrink-0 rounded-md">
              <img
                key={playlist.id}
                src={playlist.cover}
                className="w-44 h-44 aspect-square rounded-md"
              />
            </div>
          ))}
        </SmoothRow>
      </div>
    </div>
  );
};

export default Home;
