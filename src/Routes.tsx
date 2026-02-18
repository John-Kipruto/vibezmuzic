import { Routes, Route } from "react-router-dom";
import {
  AddPlaylist,
  Artists,
  Buzz,
  Charts,
  Favourites,
  Genres,
  Home,
  MyPlaylist,
  New,
  NotFound,
  Playlists,
  Podcasts,
  Trending,
  Videos,
} from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/addPlaylist" element={<AddPlaylist />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/buzz" element={<Buzz />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/myPlaylist" element={<MyPlaylist />} />
      <Route path="/new" element={<New />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/podcasts" element={<Podcasts />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
