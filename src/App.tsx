import { Routes, Route } from "react-router-dom";

import Layout from './layout'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
