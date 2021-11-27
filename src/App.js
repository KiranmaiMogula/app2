import {Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div> 
      <MainNavigation />
      <Routes>

        <Route path='/' element={<AllMeetupsPage />} /> 
        
        
        <Route path='/newmeetup' element={<NewMeetupsPage /> } /> 
        
        
        <Route path='/favorite' element={<FavoritesPage /> } /> 
        
        
      </Routes>
    </div>
  );
}

export default App;
