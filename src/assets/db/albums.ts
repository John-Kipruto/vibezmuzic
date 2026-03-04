import { artists } from "./artists";
import { randomItem } from "../../utils/random";
import { coversImages } from "./images";

export const albums = Array.from({ length: 20 }, (_, i) => {
  const artist = randomItem(artists);

  return {
    id: `album-${i + 1}`,
    title: `Album ${i + 1}`,
    artistId: artist.id,
    cover: randomItem(coversImages),
    year: 2015 + Math.floor(Math.random() * 10),
  };
});
