import Image from "next/image";
import { HomeComponent } from "./components/home.component";
import GlobalLayout from "./components/globallayout";

export default function Home() {
  return (
    <GlobalLayout>
      <HomeComponent />;
    </GlobalLayout>
  );
}
