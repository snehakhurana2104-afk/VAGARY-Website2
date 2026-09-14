
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import CollectionsPage from "./pages/CollectionsPage";
import BagsPage from "./pages/BagsPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import ContactPage from "./pages/ContactPage";
import CollectionCategoryPage from "./pages/CollectionCategoryPage";
import NotFound from "./pages/NotFound";

import "./app.css";

export default function App() {
  return (
    <>
      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}
      <ScrollToTop />

      <Routes>

        {/* =====================================================
            HOME
        ===================================================== */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* =====================================================
            ABOUT
        ===================================================== */}
        <Route
          path="/about"
          element={<About />}
        />


        {/* =====================================================
            COLLECTIONS MAIN PAGE
        ===================================================== */}
        <Route
          path="/collections"
          element={<CollectionsPage />}
        />


        {/* =====================================================
            COLLECTION CATEGORY

            Examples:
            /collections/drinkware
            /collections/planters
            /collections/gardenware
            /collections/bags
            /collections/tableware
            /collections/wallet
            /collections/card-case
            /collections/corporate-giftpack
        ===================================================== */}
        <Route
          path="/collections/:category"
          element={<CollectionCategoryPage />}
        />


        {/* =====================================================
            COLLECTION SUBCATEGORY

            Examples:
            /collections/drinkware/cups
            /collections/drinkware/bottles
        ===================================================== */}
        <Route
          path="/collections/:category/:subcategory"
          element={<CollectionCategoryPage />}
        />


        {/* =====================================================
            OLD BAGS URL
            /bags → /collections/bags
        ===================================================== */}
        <Route
          path="/bags"
          element={<BagsPage />}
        />


        {/* =====================================================
            OLD PLANTERS URL
            /planters → /collections/planters
        ===================================================== */}
        <Route
          path="/planters"
          element={
            <Navigate
              to="/collections/planters"
              replace
            />
          }
        />


        {/* =====================================================
            SUSTAINABILITY
        ===================================================== */}
        <Route
          path="/sustainability"
          element={<SustainabilityPage />}
        />


        {/* =====================================================
            CONTACT
        ===================================================== */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />


        {/* =====================================================
            404
        ===================================================== */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
}

