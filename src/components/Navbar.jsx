import React from "react";
import style from "../styles/navbar.module.scss";
import { LangContext } from "../util/context";
import { Link } from "react-router-dom";
function Navbar() {

    const {languageType, setLanguageType} = React.useContext(LangContext);

    return (
        <div className={style.navbarContent}>

            <div className="container" >
                <div className="navbar d-flex align-items-center justify-content-between w-100 mt-4">
                        <Link to={"/"} className="d-flex align-items-center">
                                <img 
                                    className={style.logo + " " + style.image} 
                                    src={"/assets/img/logo-bcc.png"} alt="logo" 
                                    width={130}
                                    height={50}
                                    />
                        </Link>
                    <div className={style.languages + " d-flex align-items-center"}>
                        <div className={`${languageType === "ru" ? style.lang__active + " " : " "}` + style.lang + " mx-2"} onClick={(() => setLanguageType("ru"))}>
                            <img src="/assets/icons/ru.svg" width={25} height={25} alt="ru" />
                        </div>
                        <div className={`${languageType === "uz" ? style.lang__active + " " : " "}` + style.lang + " mx-2"} onClick={(() => setLanguageType("uz"))}>
                            <img src="/assets/icons/uz.svg" width={25} height={25} alt="uz" />
                        </div>
                        <div className={`${languageType === "en" ? style.lang__active + " " : " "}` + style.lang + " mx-2"} onClick={(() => setLanguageType("en"))}>
                            <img src="/assets/icons/en.svg" width={25} height={25} alt="en" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;