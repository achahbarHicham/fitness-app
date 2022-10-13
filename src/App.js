import { Routes, Route } from 'react-router-dom';
import { Fragment,useState } from "react";
import Home from "./pages/Home";
import BodyPartsPage from "./pages/bodyPartsPage/BodyPartsPage";
import SinglePageExercise from './pages/SinglePageExersice/SinglePageExercise';
import VideoExersicesPage from './pages/VideoExersicesPage/VideoExersicesPage';
import Equipment from './pages/Euipment/Equipment';
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
     <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='bodyParts' element={<BodyPartsPage />}>
          <Route path='singleExercise' element={<SinglePageExercise />} />
        </Route>
        <Route path='/videoExersice' element={<VideoExersicesPage />} />
        <Route path='/equipment' element={<Equipment />} />
      </Route>
     </Routes>
  );
}

export default App;
