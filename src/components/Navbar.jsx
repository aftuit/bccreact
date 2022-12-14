import React from "react";
// import Link from "next/link";
import style from "../styles/navbar.module.scss";
// import Image from "next/image";
import { LangContext } from "../util/context";
function Navbar() {

    // const [lang, setLang] = React.useState("ru")
    const {languageType, setLanguageType} = React.useContext(LangContext);

    return (
        <div className={style.navbarContent}>

            <div className="container" >
                <div className="navbar d-flex align-items-center justify-content-between w-100 mt-4">
                    {/* <Link href="/" className="navbar-brand"> */}
                        <a className="d-flex align-items-center">
                                <img 
                                    className={style.logo + " " + style.image} 
                                    src={"/assets/img/logo-bcc.png"} alt="logo" 
                                    width={130}
                                    height={50}
                                    />
                        </a>
                    {/* </Link> */}
                    <div className={style.languages + " d-flex align-items-center"}>
                        <div className={`${languageType === "ru" ? style.lang__active + " " : " "}` + style.lang + " mx-2"} onClick={(() => setLanguageType("ru"))}>
                            <img src="/assets/icons/ru.svg" width={25} height={25} alt="ru" />
                        </div>
                        <div className={`${languageType === "uz" ? style.lang__active + " " : " "}` + style.lang + " mx-2"} onClick={(() => setLanguageType("uz"))}>
                            <img src="/assets/icons/uz.svg" width={25} height={25} alt="uz" />
                        </div>
                        {/* <div className={`${languageType === "en" ? style.lang__active + " " : " "}` + style.lang + " mx-2"} onClick={(() => setLanguageType("en"))}>
                            <Image src="/assets/icons/en.svg" width={25} height={25} alt="en" />
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;