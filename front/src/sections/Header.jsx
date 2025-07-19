import React, { useEffect, useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: 'ease-in-out' });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Products', path: 'products' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 bg-themeyellow lg:flex hidden justify-between items-center gap-4">
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaPhoneVolume /> +91 70143-----
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaMapMarkerAlt /> Chandigarh India
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <MdEmail /> Electra@gmail.com
        </h1>
      </div>

      <nav className="w-full bg-gray-100 lg:flex hidden justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sticky top-0 z-50">
        <h1 className="text-themepurple font-bold text-2xl italic underline">ElectraShop</h1>
        <ul className="lg:flex items-center gap-4 lg:gap-6 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-themepurple hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
        <div className="lg:flex items-center gap-4 text-black">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-themepurple"
            />
            <button type="submit" className="bg-themepurple text-white px-3 py-1 rounded-r-md hover:bg-themepurple-dark">
              <FaSearch />
            </button>
          </form>
          <IoPerson className="w-5 h-5 cursor-pointer hover:text-themepurple" />
          <FaHeart className="w-5 h-5 cursor-pointer hover:text-themepurple" />
          <div className="relative" onClick={() => navigate('./Cart')}>
            <FaShoppingCart className="w-5 h-5 cursor-pointer hover:text-themepurple" />
            <div className="bg-themepurple text-white rounded-full absolute -top-2 -right-2 text-xs font-bold px-2 py-1">
              2
            </div>
          </div>
        </div>
      </nav>

      <div className="lg:hidden flex justify-between items-center px-4 py-4 bg-gray-100 sticky top-0 z-50">
        <h1 className="text-themepurple font-bold text-2xl italic underline">ElectraShop</h1>
        <div onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="text-themepurple text-3xl" /> : <FaBars className="text-themepurple text-3xl" />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full bg-themepurple p-4 absolute top-20 left-0 z-40`}>
        <ul className="flex flex-col items-center gap-4 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white text-center uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-themepurple"
            />
            <button type="submit" className="bg-themepurple text-white px-3 py-1 rounded-r-md hover:bg-themepurple-dark">
              <FaSearch />
            </button>
          </form>
        </ul>
      </div>
    </>
  );
};

export default Header;
