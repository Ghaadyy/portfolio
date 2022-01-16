/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState, useEffect } from "react";
import GridItem from "../components/GridItem";
import { myData } from "../util/Data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faCampground,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Cloud from "../components/Cloud";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    let prevScrollPos = window.scrollY;
    window.onscroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos < currentScrollPos && prevScrollPos > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      prevScrollPos = currentScrollPos;
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  return (
    <div className="transition-all duration-200 overflow-x-hidden">
      <Head>
        <title>Accueil // Ghady Youssef</title>
        <meta name="description" content="Ghady Youssef's Portfolio." />
        <meta property="og:title" content="Accueil // Ghady Youssef" />
        <meta property="og:description" content="Ghady Youssef's Portfolio." />
        <meta property="og:image" itemProp="image" content="/og.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        id="navbar"
        className={`grid grid-cols-1 md:grid-cols-2 items-center h-20 px-28 fixed z-50 headerStyle left-0 right-0 ${
          scrollPosition > 200 ? "shadow-lg" : ""
        } ${
          isHidden
            ? "-top-24 transition-top duration-700 ease-in-out"
            : "top-0 transition-top duration-700 ease-in-out"
        }`}
      >
        <div className="mx-auto md:m-0">
          <h1 className="text-[#FFD945] font-black text-4xl">G</h1>
        </div>
        <nav
          className="hidden justify-end items-center space-x-6 md:flex"
          style={{ fontFamily: "Fira Code, monospace" }}
        >
          <a
            href="#experience"
            className="text-white cursor-pointer transition-all duration-200 hover:text-[#FFD945] hover:-translate-x-1"
          >
            /Expérience
          </a>
          <a
            href="#photo"
            className="text-white cursor-pointer transition-all duration-200 hover:text-[#FFD945] hover:-translate-x-1"
          >
            /Intérêts
          </a>
          <a
            href="#benevolat"
            className="text-white cursor-pointer transition-all duration-200 hover:text-[#FFD945] hover:-translate-x-1"
          >
            /Bénévolats
          </a>
        </nav>
      </header>

      <section id="hero">
        <div className="max-w-7xl h-[100vh] mx-auto flex flex-col justify-center md:flex-row">
          <div className="flex flex-col justify-center space-y-3 md:flex-1 px-3 text-center md:text-left">
            <h1
              className="text-white text-base sm:text-xl"
              style={{ fontFamily: "Fira Code, monospace" }}
            >
              <span style={{ color: "#61AFEF" }}>console</span>.
              <span style={{ color: "#81F900" }}>log</span>
              <span style={{ color: "#DA70D6" }}>(</span>
              <span style={{ color: "#FFD945" }}>
                &quot;Bonjour, je m&apos;appelle&quot;
              </span>
              <span style={{ color: "#DA70D6" }}>)</span>;
            </h1>
            <h1 className="text-white font-bold text-4xl sm:text-6xl">
              Ghady Youssef.
            </h1>
            <p className="text-white text-base">
              Je suis un étudiant au Collège des Frères Mont La Salle, Aïn
              Saadé, âgé de 17 ans. J&apos;adore construire et créer des sites
              avec de nouvelles technologies.
            </p>
            <div className="flex justify-start items-center">
              <button className="bg-[#FFD945] py-4 px-6 rounded-lg font-semibold mx-auto md:mx-0">
                Mon résumé
              </button>
            </div>
          </div>
          <div
            className="hidden lg:flex items-center justify-center flex-1"
            style={{ fontFamily: "Fira Code, monospace" }}
          >
            <Cloud
              radius={300}
              maxSpeed={10}
              className="text-white font-bold text-2xl transition-all duration-200 hover:text-[#FFD945]"
              texts={[
                "HTML",
                "CSS",
                "JavaScript",
                "ReactJS",
                "React Native",
                "Flutter",
                "Python",
                "MongoDB",
                "NodeJS",
                "ExpressJS",
                "Git",
                "VS Code",
                "Adobe XD",
                "Tailwind CSS",
                "Firebase",
                "NextJS",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center my-28">
          <h1 className="text-white font-bold text-center text-3xl">
            Mon expérience dans le numérique
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {myData.map((item, idx) => {
              return <GridItem data={item} key={idx} />;
            })}
          </div>
        </div>
      </section>

      <section id="photo" className="px-3 my-28">
        <h1 className="text-white font-bold text-center text-3xl">
          La photographie 📷
        </h1>
        <div className="relative max-h-[300px] sm:max-h-[400px] md:max-h-[none] h-[600px] max-w-5xl mx-auto my-6 shadow-xl transition-transform duration-[250ms] ease-in-out hover:scale-105">
          <Image
            src="/IMG_0368.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <p className="max-w-5xl mx-auto text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section id="benevolat" className="flex flex-col my-28">
        <h1 className="text-white font-bold text-center text-3xl mb-6">
          Mon bénévolat
        </h1>
        <div className="flex flex-col lg:flex-row mx-auto lg:space-x-10 space-y-10 lg:space-y-0 items-center justify-center">
          <div className="text-center text-white w-full lg:w-[400px]">
            <div className="px-16 lg:px-10 text-[#292B31]">
              <FontAwesomeIcon icon={faAmbulance} />
            </div>
            <br />
            <h1>Technicien médical des services d&apos;urgence</h1>
            <p className="text-sm text-gray-500">
              Croix Rouge Libanaise – Secteur Beit Mery
            </p>
          </div>
          <div className="text-center text-white w-full lg:w-[400px]">
            <div className="px-16 lg:px-10 text-[#292B31]">
              <FontAwesomeIcon icon={faCampground} />
            </div>
            <br />
            <h1>Scout du Liban</h1>
            <p className="text-sm text-gray-500">Groupe Mont La Salle</p>
          </div>
        </div>
      </section>

      <footer className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 py-6 px-5">
        <div></div>
        <div>
          <h1
            className="text-white text-center text-sm"
            style={{ fontFamily: "Fira Code, monospace" }}
          >
            Construit avec ❤️ par Ghady Youssef <br />
            <span
              className="text-gray-600"
              style={{ fontFamily: "Fira Code, monospace" }}
            >
              &copy; 2022
            </span>
          </h1>
        </div>
        <div className="flex justify-center md:justify-end items-center text-gray-500 space-x-4">
          <div
            style={{ fontFamily: "Fira Code, monospace" }}
            className="transition-all duration-200 hover:text-[#FFD945] hover:-translate-x-1 flex space-x-4"
          >
            <p>ghadyyi@gmail.com</p>
          </div>
          <FontAwesomeIcon icon={faEnvelope} className="w-[26px]" />
          <a href="https://www.instagram.com/ghaadyy/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[26px] transition-all duration-200 hover:text-[#FFD945]"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
