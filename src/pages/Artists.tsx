import { artists } from "../assets/db/artists";
import ArtistCard from "../components/ArtistCard";

const Artists = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-10">
      {artists.map((artist) => (
        <ArtistCard artist={artist} />
      ))}
    </div>
  );
};

export default Artists;
