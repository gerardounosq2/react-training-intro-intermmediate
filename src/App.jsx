import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Brownie" animal="Dog" breed="Chihuahua" />
      <Pet name="Rex" animal="Dog" breed="Chihuahua" />
      <Pet name="Dash" animal="Dog" breed="Pug" />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
