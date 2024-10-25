import { LayoutComponent } from "@/styled-components/LayoutComponent";
import {CurrentList} from "./components/CurrentList";

export const HomePage = () => {
  return (
    <LayoutComponent>
      {/* <UnusedSongs /> */}
      <CurrentList />
    </LayoutComponent>
  )
}

