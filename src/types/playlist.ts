import type { Song } from "./song";

export type Playlist = {
  id: string;
  name: string;
  cover: any;
  songs: Song[];
};
