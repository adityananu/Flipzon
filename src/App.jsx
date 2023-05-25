import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./components/View/View";
import CardView from "./pages/cardView/CardView";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/CardView/:id" element={<CardView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
