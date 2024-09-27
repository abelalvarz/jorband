import CurrentList from "./components/CurrentList";

export const HomePage = () => {
  return (
    <div style={{ maxWidth: '768px' }} className="page-container">
      {/* <UnusedSongs /> */}
      <CurrentList />
    </div>
  )
}

