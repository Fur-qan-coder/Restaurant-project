import Menu from './components/Menu-Api/MenuApi';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import AppLayout from './components/AppLayout/AppLayout';
import ContactUs from './components/Contact-us/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage/MenuPage';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const uniqueList = [ ...new Set (Menu.map((currentEl)=>{
  return (currentEl.categories)
})
), "All",
];

function App(){
  // AOS 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  } , []);
  
  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setMenuList] = useState(uniqueList);

  const filteritem = (categories) =>{
    if (categories === "All"){
      setMenuData(Menu)
      return;
    }
    const upadatedlist = Menu.filter((currentEl)=>{
      return currentEl.categories === categories;
    })
    setMenuData(upadatedlist);
    }

  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/menu' element={<MenuPage filteritem={filteritem} menuList= {menuList} menuData={menuData} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;