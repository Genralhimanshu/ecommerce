import Header from "./sections/header";
import Banner from "./sections/Banner";
import Category from "./sections/Category";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Insta from "./sections/Insta";
import Productsgrid from "./sections/Productsgrid";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Types from "./sections/Types";
import Cart from "./sections/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <Types />
              <Services />
              <Productsgrid />
              <Banner />
              <Reviews />
              <Insta />
              <Footer />
            </>
          }
        />
        {/* Cart route */}
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}
