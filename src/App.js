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

        <Route path='/' element={<AllMeetupsPage fruits={names1} veggies={names2}/>} /> 
        
        <Route path='/newmeetup' element={<NewMeetupsPage frozen={items} /> } /> 
        
        
        <Route path='/favorite' element={<FavoritesPage styles={men} womenstyles={women} kidsstyles={kid}/> } /> 
        
        
      </Routes>
    </div>
  );
}

export default App;

const names1 = ['Apple','Mango','Kiwi','Pineapple','Banana']
const names2 = ['Potatoes','Spinach','Cabbage','Cauliflower']
const men = ['Jeans','Shirts','Formals']
const women = ['Sarees','Kurthi','Jeans','Shirts','Lehenga']
const kid = ['Frocks','Skirts','Pants','Tops','Jumpsuits']
const items=['Chicken','Mutton','Fish','Pizza','Veggies']