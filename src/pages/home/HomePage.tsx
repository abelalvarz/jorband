import CurrentList from "./components/CurrentList";
import UnusedSongs from "./components/UnusedSongs";

export const HomePage = () => {
  return (
    <div style={{ maxWidth: '768px' }} className="page-container">
      {/* <UnusedSongs /> */}
      <CurrentList />
    </div>
  )
}

