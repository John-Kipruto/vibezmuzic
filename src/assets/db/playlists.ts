import { songs } from "./songs";
import { shuffle } from "../../utils/random";
import { images } from "./images";

const titles = [
  "Late Night Vibes",
  "Chill & Unwind",
  "Afro Heat",
  "Midnight Drive",
  "Trap Energy",
  "Sunday Praise",
  "R&B Essentials",
  "Street Anthems",
  "Soft Life",
  "Workout Boost",
  "Golden Hour",
  "Island Mood",
  "Love & Rhythm",
  "Top Tier Hits",
  "Focus Flow",
  "Weekend Turn Up",
  "Soul Therapy",
  "Urban Waves",
  "Fresh Finds",
  "Throwback Grooves",
  "Calm & Collected",
  "Hype Mode",
  "Sunset Sessions",
  "Deep Feelings",
  "Morning Motivation",
  "Dance All Night",
  "Peaceful Moments",
  "Big Moves Only",
  "Cozy Nights",
  "Vibes on Repeat",
];

export const playlists = Array.from({ length: 30 }, (_, i) => ({
  id: `playlist-${i + 1}`,
  name: titles[Math.floor(Math.random() * 30)],
  cover: images[i],
  songs: shuffle(songs).slice(0, 10),
}));
