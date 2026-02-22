import type { Artist } from "../types/artist";

interface ArtistProp {
  artist: Artist;
}

const ArtistCard = (props: ArtistProp) => {
  const { artist } = props;

  return (
    <div className="text-center w-full ">
      <img
        src={artist.image}
        alt="artist"
        className="aspect-square rounded-full"
      />
      <p className="mt-2 text-center">{artist.name}</p>
    </div>
  );
};

export default ArtistCard;
