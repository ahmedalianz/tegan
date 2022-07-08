import NavigationBar from "./NavigationBar";
import Shapes from "./Shapes";

export default function Header() {
  return (
    <header id="header" className="header-area pt-100">
      <NavigationBar />
      <Shapes />
    </header>
  );
}
