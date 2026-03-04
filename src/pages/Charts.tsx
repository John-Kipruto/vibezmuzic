import SmoothRow from "../components/SmoothRow";
import { artists } from "../assets/db/artists";
import { playlists } from "../assets/db/playlists";
import { charts } from "../assets/db/charts";

const Charts = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-lg">Top Daily</h1>
        <SmoothRow>
          {charts.slice(14, 25).map((chart) => (
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
        <h1 className="font-semibold text-lg">Weekly Top Charts</h1>
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
        <h1 className="font-semibold text-lg">Weekly Top Artists</h1>
        <SmoothRow>
          {artists.slice(0, 20).map((artist) => (
            <div className="shrink-0">
              <img
                key={artist.id}
                src={artist.image}
                className="w-44 h-44  aspect-square rounded-full  transition"
              />
            </div>
          ))}
        </SmoothRow>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-lg">Weekly Top Playlists</h1>
        <SmoothRow>
          {playlists.slice(0, 14).map((playlist) => (
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

export default Charts;
