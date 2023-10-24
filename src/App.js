import { Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root";
import { Music } from "./pages/Music";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Root/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/music' element={<Music/>}/>
    </Routes>
  );
}

export default App;
