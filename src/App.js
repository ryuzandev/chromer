import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Importing Components FOR lgcomponents------------------------------> start
import Offers from "./lgcomponents/components/Offers";
import Navbar from "./lgcomponents/components/Navbar";
import NavbarCommon from "./lgcomponents/components/NavbarCommon";
import Carousal from "./lgcomponents/components/Carousal";
import GridMultiService from "./lgcomponents/components/GridMultiService";
import Footer from "./lgcomponents/components/Footer";
import BookNowCards from "./lgcomponents/components/BookNowCards";
import TroubleshootCards from "./lgcomponents/components/TroubleshootCards";
import TvComponent from "./lgcomponents/components/TvComponent";
import WashingMachine from "./lgcomponents/components/WashingMachine";
import MicroWave from "./lgcomponents/components/MicroWave";
import AirConditioner from "./lgcomponents/components/AirConditioner";
import { ProductData } from "./ProductData";
import AllProducts from "./lgcomponents/components/AllProducts";
import Refrigerator from "./lgcomponents/components/Refrigerator";
import Dishwasher from "./lgcomponents/components/DishWasher";
import Chatbot from "./lgcomponents/components/AssestComponents/Chatbot";
import ContactUsFloating from "./lgcomponents/components/AssestComponents/ContactUsFloating";
import ExoticAUtoDeleteCards from "./lgcomponents/components/ExoticAutoDeleteCards";
import ConsoleBox from "./lgcomponents/components/AssestComponents/ConsoleBox";
// importing Components FOR lgcomponents------------------------------> end

// SAMSUNG COMPONENTS START HERE------------------------------------------->
import SamOffers from "./samsungcomponents/components/Offers";
import SamNavbar from "./samsungcomponents/components/Navbar";
import SamNavbarCommon from "./samsungcomponents/components/NavbarCommon";
import SamCarousal from "./samsungcomponents/components/Carousal";
import SamGridMultiService from "./samsungcomponents/components/GridMultiService";
import SamFooter from "./samsungcomponents/components/Footer";
import SamBookNowCards from "./samsungcomponents/components/BookNowCards";
import SamTroubleshootCards from "./samsungcomponents/components/TroubleshootCards";
import SamTvComponent from "./samsungcomponents/components/TvComponent";
import SamWashingMachine from "./samsungcomponents/components/WashingMachine";
import SamMicroWave from "./samsungcomponents/components/MicroWave";
import SamAirConditioner from "./samsungcomponents/components/AirConditioner";
// import { ProductData } from "./ProductData";
import SamAllProducts from "./samsungcomponents/components/AllProducts";
import SamRefrigerator from "./samsungcomponents/components/Refrigerator";
import SamDishwasher from "./samsungcomponents/components/DishWasher";
import SamChatbot from "./samsungcomponents/components/AssestComponents/Chatbot";
import SamContactUsFloating from "./samsungcomponents/components/AssestComponents/ContactUsFloating";
import SamExoticAUtoDeleteCards from "./samsungcomponents/components/ExoticAutoDeleteCards";
import SamConsoleBox from "./samsungcomponents/components/AssestComponents/ConsoleBox";
// SAMSUNG COMPONENTS END HERE----------------------------------------------->

// SONY COMPONENTS START HERE------------------------------------------->
import SonyOffers from "./sonycomponents/components/Offers";
import SonyNavbar from "./sonycomponents/components/Navbar";
import SonyNavbarCommon from "./sonycomponents/components/NavbarCommon";
import SonyCarousal from "./sonycomponents/components/Carousal";
import SonyGridMultiService from "./sonycomponents/components/GridMultiService";
import SonyFooter from "./sonycomponents/components/Footer";
import SonyBookNowCards from "./sonycomponents/components/BookNowCards";
import SonyTroubleshootCards from "./sonycomponents/components/TroubleshootCards";
import SonyTvComponent from "./sonycomponents/components/TvComponent";
import SonyMusicStereo from "./sonycomponents/components/MusicStereo";
import SonyPlayStation from "./sonycomponents/components/PlayStation";
import SonyChatbot from "./sonycomponents/components/AssestComponents/Chatbot";
import SonyContactUsFloating from "./sonycomponents/components/AssestComponents/ContactUsFloating";
import SonyExoticAUtoDeleteCards from "./sonycomponents/components/ExoticAutoDeleteCards";
import SonyConsoleBox from "./sonycomponents/components/AssestComponents/ConsoleBox";
// SONY COMPONENTS END HERE----------------------------------------------->

// Importing Components FOR ifbcomponents------------------------------> start
import IfbOffers from "./ifb/components/Offers";
import IfbNavbar from "./ifb/components/Navbar";
import IfbNavbarCommon from "./ifb/components/NavbarCommon";
import IfbCarousal from "./ifb/components/Carousal";
import IfbGridMultiService from "./ifb/components/GridMultiService";
import IfbFooter from "./ifb/components/Footer";
import IfbBookNowCards from "./ifb/components/BookNowCards";
import IfbTroubleshootCards from "./ifb/components/TroubleshootCards";
import IfbChimney from "./ifb/components/ChimneyComponent";
import IfbWashingMachine from "./ifb/components/WashingMachine";
import IfbMicroWave from "./ifb/components/MicroWave";
import IfbAirConditioner from "./ifb/components/AirConditioner";
// import { ProductData } from "./ProductData";
import IfbAllProducts from "./ifb/components/AllProducts";
import IfbRefrigerator from "./ifb/components/Refrigerator";
import IfbDishwasher from "./ifb/components/DishWasher";
import IfbChatbot from "./ifb/components/AssestComponents/Chatbot";
import IfbContactUsFloating from "./ifb/components/AssestComponents/ContactUsFloating";
import IfbExoticAUtoDeleteCards from "./ifb/components/ExoticAutoDeleteCards";
import IfbConsoleBox from "./ifb/components/AssestComponents/ConsoleBox";
// importing Components FOR ifbcomponents------------------------------> end
// Importing Components FOR ONIDAcomponents------------------------------> start
import OnidaOffers from "./onida/components/Offers";
import OnidaNavbar from "./onida/components/Navbar";
import OnidaNavbarCommon from "./onida/components/NavbarCommon";
import OnidaCarousal from "./onida/components/Carousal";
import OnidaGridMultiService from "./onida/components/GridMultiService";
import OnidaFooter from "./onida/components/Footer";
import OnidaBookNowCards from "./onida/components/BookNowCards";
import OnidaTroubleshootCards from "./onida/components/TroubleshootCards";
import OnidaTvComponent from "./onida/components/TvComponent";
import OnidaWashingMachine from "./onida/components/WashingMachine";
import OnidaMicroWave from "./onida/components/MicroWave";
import OnidaAirConditioner from "./onida/components/AirConditioner";
// import { ProductData } from "./ProductData";
import OnidaAllProducts from "./onida/components/AllProducts";
import OnidaRefrigerator from "./onida/components/Refrigerator";
import OnidaDishwasher from "./onida/components/DishWasher";
import OnidaChatbot from "./onida/components/AssestComponents/Chatbot";
import OnidaContactUsFloating from "./onida/components/AssestComponents/ContactUsFloating";
import OnidaExoticAUtoDeleteCards from "./onida/components/ExoticAutoDeleteCards";
import OnidaConsoleBox from "./onida/components/AssestComponents/ConsoleBox";
// importing Components FOR ONIDAcomponents------------------------------> end
// Importing Components FOR WHIRLPOOLcomponents------------------------------> start
import WpOffers from "./whirlpool/components/Offers";
import WpNavbar from "./whirlpool/components/Navbar";
import WpNavbarCommon from "./whirlpool/components/NavbarCommon";
import WpCarousal from "./whirlpool/components/Carousal";
import WpGridMultiService from "./whirlpool/components/GridMultiService";
import WpFooter from "./whirlpool/components/Footer";
import WpBookNowCards from "./whirlpool/components/BookNowCards";
import WpTroubleshootCards from "./whirlpool/components/TroubleshootCards";
import WpTvComponent from "./whirlpool/components/TvComponent";
import WpWashingMachine from "./whirlpool/components/WashingMachine";
import WpMicroWave from "./whirlpool/components/MicroWave";
import WpAirConditioner from "./whirlpool/components/AirConditioner";
// import { ProductData } from "./ProductData";
import WpAllProducts from "./whirlpool/components/AllProducts";
import WpRefrigerator from "./whirlpool/components/Refrigerator";
import WpDishwasher from "./whirlpool/components/DishWasher";
import WpChatbot from "./whirlpool/components/AssestComponents/Chatbot";
import WpContactUsFloating from "./whirlpool/components/AssestComponents/ContactUsFloating";
import WpExoticAUtoDeleteCards from "./whirlpool/components/ExoticAutoDeleteCards";
import WpConsoleBox from "./whirlpool/components/AssestComponents/ConsoleBox";
// importing Components FOR WHIRLPOOLcomponents------------------------------> end
// Importing Components FOR PHILLIPScomponents------------------------------> start
import PhillipsOffers from "./phillips/components/Offers";
import PhillipsNavbar from "./phillips/components/Navbar";
import PhillipsNavbarCommon from "./phillips/components/NavbarCommon";
import PhillipsCarousal from "./phillips/components/Carousal";
import PhillipsGridMultiService from "./phillips/components/GridMultiService";
import PhillipsFooter from "./phillips/components/Footer";
import PhillipsBookNowCards from "./phillips/components/BookNowCards";
import PhillipsTroubleshootCards from "./phillips/components/TroubleshootCards";
import PhillipsTvComponent from "./phillips/components/TvComponent";
import PhillipsWashingMachine from "./phillips/components/WashingMachine";
import PhillipsMicroWave from "./phillips/components/MicroWave";
import PhillipsAirConditioner from "./phillips/components/AirConditioner";
// import { ProductData } from "./ProductData";
import PhillipsAllProducts from "./phillips/components/AllProducts";
import PhillipsRefrigerator from "./phillips/components/Refrigerator";
import PhillipsDishwasher from "./phillips/components/DishWasher";
import PhillipsChatbot from "./phillips/components/AssestComponents/Chatbot";
import PhillipsContactUsFloating from "./phillips/components/AssestComponents/ContactUsFloating";
import PhillipsExoticAUtoDeleteCards from "./phillips/components/ExoticAutoDeleteCards";
import PhillipsConsoleBox from "./phillips/components/AssestComponents/ConsoleBox";
// importing Components FOR PHILLIPScomponents------------------------------> end

// DEMO COMPONENTS START---------->
import GoogleClone from "./democomponents/GoogleClone";
import Hombale from "./democomponents/Homebale";

// DEMO COMPONENTS END  ---------->

// Context Resource
import { createContext } from "react";

// Context Functionality
export const AppContext = createContext();

function App() {
  const brandName = "immortal";
  return (
    <AppContext.Provider value={{ brandName }}>
      <Router>
        <Routes>
          <Route
            path="chromer/"
            element={
              <>
                <GoogleClone />
              </>
            }
          />
          <Route
            // path="homebale/"
            path={`${brandName}/`}
            element={
              <>
                <Hombale />
                {/* <ConsoleBox /> */}
              </>
            }
          />
          {/* LG COMPONENTS START HERE ---------------------------> */}
          <Route
            // path="lg/"
            path={`/${brandName}/lg/`}
            element={
              <>
                <Offers />
                <NavbarCommon />
                <Carousal />
                <GridMultiService />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="lg/book-now"
            path={`/${brandName}/lg/book-now`}
            element={
              <>
                <Offers />
                <Navbar />
                <BookNowCards />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="lg/troubleshoot"
            path={`/${brandName}/lg/troubleshoot`}
            element={
              <>
                <Offers />
                <Navbar />
                <TroubleshootCards />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="lg/exoticdeletecards"
            path={`/${brandName}/lg/exoticdeletecards`}
            element={
              <>
                <Offers />
                <Navbar />
                <ExoticAUtoDeleteCards />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/tv"
            path={`/${brandName}/lg/tv`}
            element={
              <>
                <Offers />
                <Navbar />
                <TvComponent />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="/lg/washing"
            path={`/${brandName}/lg/washing`}
            element={
              <>
                <Offers />
                <Navbar />
                <WashingMachine />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/microwave"
            path={`/${brandName}/lg/microwave`}
            element={
              <>
                <Offers />
                <Navbar />
                <MicroWave />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/Refrigerator"
            path={`/${brandName}/lg/Refrigerator`}
            element={
              <>
                <Offers />
                <Navbar />
                <Refrigerator />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/DishWasher"
            path={`/${brandName}/lg/DishWasher`}
            element={
              <>
                <Offers />
                <Navbar />
                <Dishwasher />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/aircondition"
            path={`/${brandName}/lg/aircondition`}
            element={
              <>
                <Offers />
                <Navbar />
                <AirConditioner />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="lg/products"
            path={`/${brandName}/lg/products`}
            element={
              <>
                <Offers />
                <Navbar />
                <AllProducts />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
                <ConsoleBox />
              </>
            }
          />
          {/* LG COMPONENTS END HERE -------------------------->  */}
          {/* SAMSUNG COMPONENTS START HERE-------------------------------> */}
          <Route
            // path="samsung/"
            path={`/${brandName}/samsung/`}
            element={
              <>
                <SamOffers />
                <SamNavbarCommon />
                <SamCarousal />
                <SamGridMultiService />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="samsung/book-now"
            path={`/${brandName}/samsung/book-now`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamBookNowCards />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="samsung/troubleshoot"
            path={`/${brandName}/samsung/troubleshoot`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamTroubleshootCards />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="samsung/exoticdeletecards"
            path={`/${brandName}/samsung/exoticdeletecards`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamExoticAUtoDeleteCards />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="samsung/tv"
            path={`/${brandName}/samsung/tv`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamTvComponent />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="samsung/washing"
            path={`/${brandName}/samsung/washing`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamWashingMachine />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="samsung/microwave"
            path={`/${brandName}/samsung/microwave`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamMicroWave />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="samsung/Refrigerator"
            path={`/${brandName}/samsung/Refrigerator`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamRefrigerator />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="samsung/DishWasher"
            path={`/${brandName}/samsung/DishWasher`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamDishwasher />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="samsung/aircondition"
            path={`/${brandName}/samsung/aircondition`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamAirConditioner />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="samsung/products"
            path={`/${brandName}/samsung/products`}
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamAllProducts />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
                <SamConsoleBox />
              </>
            }
          />
          {/* SAMSUNG COMPONENTS END HERE--------------------------------- */}
          {/* SONY COMPONENTS START HERE ---------------------------> */}
          <Route
            // path="sony/"
            path={`/${brandName}/sony/`}
            element={
              <>
                <SonyOffers />
                <SonyNavbarCommon />
                <SonyCarousal />
                <SonyGridMultiService />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="sony/book-now"
            path={`/${brandName}/sony/book-now`}
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyBookNowCards />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="sony/troubleshoot"
            path={`/${brandName}/sony/troubleshoot`}
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyTroubleshootCards />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />
          {/* Troubleshoot Page */}
          <Route
            // path="sony/exoticdeletecards"
            path={`/${brandName}/sony/exoticdeletecards`}
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyExoticAUtoDeleteCards />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="sony/tv"
            path={`/${brandName}/sony/tv`}
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyTvComponent />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />

          <Route
            // path="sony/musicstereo"
            path={`/${brandName}/sony/musicstereo`}
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyMusicStereo />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />
          <Route
            // path="sony/playstation"
            path={`/${brandName}/sony/playstation`}
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyPlayStation />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="sony/products"
            path={`/${brandName}/sony/products`}
            element={
              <>
                <SonyOffers />
                <Navbar />
                <AllProducts />
                <Chatbot />
                <ContactUsFloating />
                <SonyFooter />
                <SonyConsoleBox />
              </>
            }
          />
          {/* SONY COMPONENTS END HERE   ---------------------------> */}

          {/* IFB COMPONENTS START HERE ---------------------------> */}
          <Route
            // path="ifb/"
            path={`/${brandName}/ifb/`}
            element={
              <>
                <IfbOffers />
                <IfbNavbarCommon />
                <IfbCarousal />
                <IfbGridMultiService />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="ifb/book-now"
            path={`/${brandName}/ifb/book-now`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbBookNowCards />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="ifb/troubleshoot"
            path={`/${brandName}/ifb/troubleshoot`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbTroubleshootCards />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          <Route
            // path="ifb/exoticdeletecards"
            path={`/${brandName}/ifb/exoticdeletecards`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbExoticAUtoDeleteCards />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="ifb/chimney"
            path={`/${brandName}/ifb/chimney`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbChimney />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="ifb/washing"
            path={`/${brandName}/ifb/washing`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbWashingMachine />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="ifb/microwave"
            path={`/${brandName}/ifb/microwave`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbMicroWave />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="ifb/Refrigerator"
            path={`/${brandName}/ifb/Refrigerator`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbRefrigerator />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="ifb/DishWasher"
            path={`/${brandName}/ifb/DishWasher`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbDishwasher />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="ifb/aircondition"
            path={`/${brandName}/ifb/aircondition`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbAirConditioner />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="ifb/products"
            path={`/${brandName}/ifb/products`}
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbAllProducts />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
                <IfbConsoleBox />
              </>
            }
          />
          {/* IFB COMPONENTS END HERE -------------------------->  */}
          {/* ONIDA COMPONENTS START HERE ---------------------------> */}
          <Route
            // path="onida/"
            path={`/${brandName}/onida/`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbarCommon />
                <OnidaCarousal />
                <OnidaGridMultiService />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="onida/book-now"
            path={`/${brandName}/onida/book-now`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaBookNowCards />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="onida/troubleshoot"
            path={`/${brandName}/onida/troubleshoot`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaTroubleshootCards />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />
          {/* Troubleshoot Page */}
          <Route
            // path="onida/exoticdeletecards"
            path={`/${brandName}/onida/exoticdeletecards`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaExoticAUtoDeleteCards />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="onida/tv"
            path={`/${brandName}/onida/tv`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaTvComponent />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="onida/washing"
            path={`/${brandName}/onida/washing`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaWashingMachine />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="onida/microwave"
            path={`/${brandName}/onida/microwave`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaMicroWave />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="onida/Refrigerator"
            path={`/${brandName}/onida/Refrigerator`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaRefrigerator />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="onida/DishWasher"
            path={`/${brandName}/onida/DishWasher`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaDishwasher />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="onida/aircondition"
            path={`/${brandName}/onida/aircondition`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaAirConditioner />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="onida/products"
            path={`/${brandName}/onida/products`}
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaAllProducts />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
                <OnidaConsoleBox />
              </>
            }
          />
          {/* ONIDA COMPONENTS END HERE -------------------------->  */}
          {/* WHIRLPOOL COMPONENTS START HERE ---------------------------> */}
          <Route
            // path="whirlpool/"
            path={`/${brandName}/whirlpool/`}
            element={
              <>
                <WpOffers />
                <WpNavbarCommon />
                <WpCarousal />
                <WpGridMultiService />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="whirlpool/book-now"
            path={`/${brandName}/whirlpool/book-now`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpBookNowCards />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="whirlpool/troubleshoot"
            path={`/${brandName}/whirlpool/troubleshoot`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpTroubleshootCards />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="whirlpool/exoticdeletecards"
            path={`/${brandName}/whirlpool/exoticdeletecards`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpExoticAUtoDeleteCards />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="whirlpool/tv"
            path={`/${brandName}/whirlpool/tv`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpTvComponent />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="whirlpool/washing"
            path={`/${brandName}/whirlpool/washing`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpWashingMachine />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="whirlpool/microwave"
            path={`/${brandName}/whirlpool/microwave`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpMicroWave />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="whirlpool/Refrigerator"
            path={`/${brandName}/whirlpool/Refrigerator`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpRefrigerator />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="whirlpool/DishWasher"
            path={`/${brandName}/whirlpool/DishWasher`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpDishwasher />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="whirlpool/aircondition"
            path={`/${brandName}/whirlpool/aircondition`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpAirConditioner />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="whirlpool/products"
            path={`/${brandName}/whirlpool/products`}
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpAllProducts />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
                <WpConsoleBox />
              </>
            }
          />
          {/* WHIRLPOOL COMPONENTS END HERE -------------------------->  */}
          {/* PHILLIPS COMPONENTS START HERE ---------------------------> */}
          <Route
            // path="phillips/"
            path={`/${brandName}/phillips/`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbarCommon />
                <PhillipsCarousal />
                <PhillipsGridMultiService />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="phillips/book-now"
            path={`/${brandName}/phillips/book-now`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsBookNowCards />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="phillips/troubleshoot"
            path={`/${brandName}/phillips/troubleshoot`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsTroubleshootCards />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />
          {/* Troubleshoot Page */}
          <Route
            // path="phillips/exoticdeletecards"
            path={`/${brandName}/phillips/exoticdeletecards`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsExoticAUtoDeleteCards />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="phillips/tv"
            path={`/${brandName}/phillips/tv`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsTvComponent />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="phillips/washing"
            path={`/${brandName}/phillips/washing`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsWashingMachine />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="phillips/microwave"
            path={`/${brandName}/phillips/microwave`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsMicroWave />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="phillips/Refrigerator"
            path={`/${brandName}/phillips/Refrigerator`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsRefrigerator />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="phillips/DishWasher"
            path={`/${brandName}/phillips/DishWasher`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsDishwasher />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="phillips/aircondition"
            path={`/${brandName}/phillips/aircondition`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsAirConditioner />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="Phillips/products"
            path={`/${brandName}/phillips/products`}
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsAllProducts />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
                <PhillipsConsoleBox />
              </>
            }
          />
          {/* PHILLIPS COMPONENTS END HERE -------------------------->  */}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
