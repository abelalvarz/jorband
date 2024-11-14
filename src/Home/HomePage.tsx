import { LayoutComponent } from "@/App/styled-components/LayoutComponent";
import {CurrentList} from "./components/CurrentList";

export const HomePage = () => {
  return (
    <LayoutComponent>
      <CurrentList />
    </LayoutComponent>
  )
}

