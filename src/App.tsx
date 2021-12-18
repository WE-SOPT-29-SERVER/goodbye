import Home from "./routes/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificate from "./routes/Certificate";
import Lobby from "./routes/Lobby";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-surface-light text-on-surface h-screen text-base w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="certificate">
            <Route path=":certificateId" element={<Certificate />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
