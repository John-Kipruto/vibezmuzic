import { songs } from "../assets/db/songs";
import SongsTable from "../components/SongsTable";

const Trending = () => {
  return (
    <div>
      <SongsTable songs={songs.slice(10, 25)} />
    </div>
  );
};

export default Trending;
