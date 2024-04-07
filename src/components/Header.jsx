import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Nilanjan Chakraborty");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "#home",
      id: 1,
      isActive: true,
    },
    {
      title: "About",
      link: "#about",
      id: 2,
      isActive: false,
    },
    {
      title: "Skills",
      link: "#skills",
      id: 3,
      isActive: false,
    },
  ]);

  const actionButton = {
    title: "Download CV",
    link: "Nilanjan-chakraborty-web developer.pdf",
  };

  const activeMenu = (id) => {
    // Create a copy of the menuLinks array
    const updatedMenuLinks = menuLinks.map(link => {
      // If the link's id matches the provided id, set isActive to true, otherwise set it to false
      return {
        ...link,
        isActive: link.id === id ? true : false
      };
    });

    // Update the state with the modified array
    setMenuLinks(updatedMenuLinks);
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="md:px-16 bg-gray-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className=" text-sm self-center md:text-2xl font-semibold whitespace-nowrap ">Nilanjan Chakraborty</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-orange-500 shadow rounded-full px-4 py-2" onClick={()=> window.open(window.location.href + actionButton.link, '_blank')}>{actionButton.title}</button>
            <button type="button" className="inline-flex items-center p-2 w-10 h-10 text-orange-600 justify-center text-sm text-orrange-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-orange-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600" onClick={toggleMobileMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" style={{display: mobileMenuOpen ? 'block' : '' }}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {menuLinks.map((link) => (
              <li>
                <a key={link.id} onClick={() => { activeMenu(link.id)}} href={link.link} className={`block py-2 px-3 ${link.isActive ? 'bg-orange-600 text-white' : 'text-gray-600'} md:bg-transparent md:text-gray-600 ${link.isActive && 'border-b-2 border-orange-500'} md:p-0 md:hover:text-orange-600`}  >
                {link.title}
                </a>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>



    </>
  );
};

export default Header;
