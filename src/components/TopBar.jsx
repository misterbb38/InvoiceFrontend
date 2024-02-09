// import { useState } from "react";
// import PropTypes from "prop-types";
// import {
//   FiMenu,
//   FiChevronLeft,
//   FiSearch,
//   FiBell,
//   FiSettings,
// } from "react-icons/fi";
// import UserPhoto from "../assets/icone/react.svg";

// function TopBar({ toggleSidebar, isSidebarOpen }) {
//   const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
//   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

 

//   return (
//     <div className="flex items-center justify-between bg-base-300 p-4 shadow">
//       <button onClick={toggleSidebar} className="p-2 text-base-content">
//         {isSidebarOpen ? <FiChevronLeft size={24} /> : <FiMenu size={24} />}
//       </button>

//       <div className="flex flex-grow mx-4">
//         <FiSearch className="text-base-content mr-2" size={20} />
//         <input
//           className="flex-grow border-2 border-base-300 bg-base-200 h-10 px-5 rounded-lg text-sm focus:outline-none"
//           type="search"
//           name="search"
//           placeholder="Type to search..."
//         />
//       </div>

      // <div className="flex items-center">
      //   <div className="relative mx-4">
      //     <FiBell
      //       className="cursor-pointer text-base-content"
      //       size={24}
      //       onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
      //     />
      //     {isNotificationsOpen && (
      //       <div className="absolute right-0 mt-2 py-2 w-48 bg-base-100 rounded-md shadow-xl z-50">
      //         <div className="block px-4 py-2 text-sm text-base-content hover:bg-base-200">
      //           Notification 1
      //         </div>
      //         <div className="block px-4 py-2 text-sm text-base-content hover:bg-base-200">
      //           Notification 2
      //         </div>
      //       </div>
      //     )}
      //   </div>

        // <div className="relative mx-4">
        //   <FiSettings
        //     className="cursor-pointer text-base-content"
        //     size={24}
        //     onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
        //   />
        //   {isSettingsMenuOpen && (
        //     <div className="absolute right-0 mt-2 py-2 w-48 bg-base-100 rounded-md shadow-xl z-50">
        //       <a
        //         href="/profile"
        //         className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
        //       >
        //         Mon Profil
        //       </a>
        //       <a
        //         href="/settings"
        //         className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
        //       >
        //         Réglages
        //       </a>
        //       <a
        //         href="/logout"
        //         className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
        //       >
        //         Déconnexion
        //       </a>
        //     </div>
        //   )}
        // </div>
//         <div className="dropdown relative z-50">
//   <div tabIndex={0} role="button" className="btn m-1">
//     Theme
//     <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
//   </div>
//   <ul tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-base-300 rounded-box w-52">
//   <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake" value="cupcake"/></li>
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
//     {/* Ajout de nouveaux thèmes */}
//     <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>

//   </ul>
// </div>



      

//         <div className="flex items-center ml-4">
//           <img src={UserPhoto} alt="User" className="h-8 w-8 rounded-full" />
//           <div className="ml-2">
//             <div className="text-base-content">Thomas Anree</div>
//             <div className="text-xs text-base-content">UX Designer</div>
//           </div>
//         </div>
//       </div>
//     </div>

    
//   );
// }

// TopBar.propTypes = {
//   toggleSidebar: PropTypes.func.isRequired,
//   isSidebarOpen: PropTypes.bool.isRequired,
// };

// export default TopBar;

import { useState } from "react";
import PropTypes from "prop-types";
import { FiMenu, FiChevronLeft, FiSearch, FiBell, FiSettings } from "react-icons/fi";
import UserPhoto from "../assets/icone/react.svg";

function TopBar({ toggleSidebar, isSidebarOpen }) {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-base-300 p-4 shadow">
      {/* Bouton de menu pour mobile */}
      <button onClick={toggleSidebar} className="p-2 text-base-content ">
        {isSidebarOpen ? <FiChevronLeft size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Champ de recherche uniquement visible sur les écrans plus grands */}
      <div className="hidden md:flex flex-grow mx-4">
        <FiSearch className="text-base-content mr-2" size={20} />
        <input
          className="flex-grow border-2 border-base-300 bg-base-200 h-10 px-5 rounded-lg text-sm focus:outline-none"
          type="search"
          placeholder="Type to search..."
        />
      </div>

      <div className="flex items-center">
        <div className="relative mx-4">
          <FiBell
            className="cursor-pointer text-base-content"
            size={24}
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          />
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-base-100 rounded-md shadow-xl z-50">
              <div className="block px-4 py-2 text-sm text-base-content hover:bg-base-200">
                Notification 1
              </div>
              <div className="block px-4 py-2 text-sm text-base-content hover:bg-base-200">
                Notification 2
              </div>
            </div>
          )}
        </div>

        <div className="relative mx-4">
          <FiSettings
            className="cursor-pointer text-base-content"
            size={24}
            onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
          />
          {isSettingsMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-base-100 rounded-md shadow-xl z-50">
              <a
                href="/profil"
                className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
              >
                Mon Profil
              </a>
              <a
                href="/Parametre"
                className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
              >
                Réglages
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
              >
                Déconnexion
              </a>
            </div>
          )}
        </div>

        {/* Informations de l'utilisateur uniquement pour les écrans plus grands */}
        <div className="hidden md:flex items-center ml-4">
        <div className="dropdown z-50">
  <div tabIndex={0} role="button" className="btn m-1">
    Theme
    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="synthwave" value="synthwave"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dark" value="dark"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="coffee" value="coffee"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="luxury" value="luxury"/></li>
  </ul>
</div>
          <img src={UserPhoto} alt="User" className="h-8 w-8 rounded-full" />
          <div className="ml-2">

          

            <div className="text-base-content">Thomas Anree</div>
            <div className="text-xs text-base-content">UX Designer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default TopBar;
