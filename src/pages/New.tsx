import { songs } from "../assets/db/songs";
import SongsTable from "../components/SongsTable";

const New = () => {
  return (
    <div>
      <SongsTable songs={songs.slice(0, 50)} />
    </div>
  );
};

export default New;
