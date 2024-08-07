import { Home } from "./features";
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";

function App() {
  return (
    <>
      <Cursor
        animation="beat"
        color="#de6e4cdb"
        dotColor="#632f1fdb"
        hasCursor
        hasDot
        isHollow
        mixBlendMode={false}
        size="sm"
      />
      <Home />
    </>
  );
}

export default App;
