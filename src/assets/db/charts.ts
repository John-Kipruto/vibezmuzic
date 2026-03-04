import { songs } from "./songs";
import { shuffle } from "../../utils/random";
import { chartsImages } from "./images";

const titles: string[] = [];

for (let i = 0; i < 30; i++) {
  titles.push("Top song");
}

export const charts = Array.from({ length: 30 }, (_, i) => ({
  id: `playlist-${i + 1}`,
  name: titles[Math.floor(Math.random() * 30)],
  cover: chartsImages[i],
  songs: shuffle(songs).slice(0, 10),
}));
