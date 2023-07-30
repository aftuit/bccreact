import React from "react";
import Header from "../components/Header";
import Missions from "../components/Missions";
import Preview from "../components/Preview";
import Apartment from "../components/Apartments";
import Video from "../components/Video";
// import axios from "axios";
// import { API_URL } from "../util/util";
import { LangContext } from "../util/context";

import Footer from "../components/Footer";
const HomePage = () => {
  const { lang, languageType } = React.useContext(LangContext);

  return (
    <div>
      <Header lang={lang} languageType={languageType} />
      <Missions lang={lang} languageType={languageType} />
      <Preview lang={lang} languageType={languageType} />
      <Apartment
        lang={lang}
        languageType={languageType}
      />
      <Video lang={lang} languageType={languageType} />
      <Footer lang={lang} languageType={languageType} />
    </div>
  );
};

export default HomePage;
