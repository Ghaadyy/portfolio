import { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useIntersectionObserver } from "../hooks/IntersectionObserver";

function GridItem({ data }) {
  // const triggerRef = useRef();
  // const dataRef = useIntersectionObserver(triggerRef, {
  //   freezeOnceVisible: true,
  // });
  // const config = useSpring({
  //   to: {
  //     y: dataRef?.isIntersecting ? 0 : 20,
  //   },
  //   from: { y: 20 },
  //   delay: 10,
  // });

  return (
    <>
      {/* <animated.div style={config}> */}
      <div className="flex flex-col justify-between bg-[#1B1D29] rounded-md m-2 px-4 py-3 shadow-lg transition-all duration-[250ms] ease-in-out hover:-translate-y-1 text-white hover:text-[#FFD945]">
        <div>
          <div className="mb-4">
            <svg
              id="Iconly_Light-Outline_Folder"
              data-name="Iconly/Light-Outline/Folder"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#FFD945"
            >
              <g id="Folder" transform="translate(2 2)">
                <path
                  id="Combined_Shape"
                  data-name="Combined Shape"
                  d="M6.45,20.669C2.471,20.669,0,18.2,0,14.232v-7.8C0,2.164,1.9,0,5.643,0h2a3.047,3.047,0,0,1,2.425,1.214l.911,1.212a1.549,1.549,0,0,0,1.228.614h2.83C18.9,3.04,20.7,5.019,20.7,9.268l-.028,4.967c0,3.969-2.469,6.434-6.438,6.434ZM1.5,6.433v7.8c0,3.184,1.758,4.937,4.95,4.937h7.781c3.184,0,4.937-1.753,4.937-4.937L19.2,9.264c0-3.4-1.166-4.724-4.161-4.724H12.206A3.052,3.052,0,0,1,9.781,3.328L8.868,2.114A1.539,1.539,0,0,0,7.642,1.5h-2C2.74,1.5,1.5,2.975,1.5,6.433Zm4.481,7.279a.75.75,0,1,1,0-1.5h8.735a.75.75,0,1,1,0,1.5Z"
                  transform="translate(0 0)"
                />
              </g>
            </svg>
          </div>
          <h1 className="font-semibold mb-1">{data.title}</h1>
          <p className="mb-4 text-white text-sm">{data.description}</p>
        </div>
        <div className="flex space-x-3">
          {data.tech.map((item, i) => (
            <p
              style={{ fontFamily: "Fira Code, monospace" }}
              key={i}
              className="text-xs text-gray-500"
            >
              {data.tech[i]}
            </p>
          ))}
        </div>
      </div>
      {/* </animated.div> */}
    </>
  );
}

export default GridItem;
