// import  { useState, useEffect  } from 'react';
// import { themeChange } from 'theme-change'

// import TopBar from './components/TopBar';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';



// function App() {
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   useEffect(() => {
//     themeChange(false)
//     // 👆 false parameter is required for react project
//   }, [])

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleMenuItemClick = (component) => {
//     setSelectedComponent(component);
//   };

//   return (
   
//     <div className="flex h-screen bg-gray-100">
//       {isSidebarOpen && <Sidebar onMenuItemClick={handleMenuItemClick} />}
//       <div className="flex flex-col flex-1 overflow-hidden">
//         <TopBar toggleSidebar={toggleSidebar} />
//         <MainContent selectedComponent={selectedComponent} />
//       </div>
//     </div>
    
//   );
// }

// export default App;

import  { useState, useEffect } from 'react';
import { themeChange } from 'theme-change';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import HomeContent from './components/index';
import Facture from './pages/Facture';
import Devis from './pages/Devis';
import Formulaire from './pages/Formulaire';
import Instruction from './pages/Instruction';
import Parametre from './pages/Parametre';

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {isSidebarOpen && <Sidebar />}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto"> {/* Ajout de la classe pour le défilement */}
          <Outlet   />
        </div> {/* Ici, Outlet rendra le composant correspondant à la route actuelle */}
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeContent />} />
          <Route path="Facture" element={<Facture />} />
          <Route path="Devis" element={<Devis />} />
          <Route path="Formulaire" element={<Formulaire />} />
          <Route path="instruction" element={<Instruction />} />
          <Route path="parametre" element={<Parametre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
