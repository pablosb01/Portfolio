import Image from "next/image";
import { useState } from "react";

export default function ScreenShotComp({ src, alt, videoSrc }) {
  const [vid, setVid] = useState(false);

  function handleVid() {
    setVid(!vid);
  }

  return (
    <div className="flex justify-center">
      {vid && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-stone-900 bg-opacity-70 z-50">
          {" "}
          {/* Aquí asegúrate de que el z-index sea menor que el navbar */}
          <div>
            <button onClick={handleVid} className="self-end btn-effect">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <video
              className="w-full max-w-4xl h-auto rounded-lg shadow2"
              controls
              autoPlay
              muted={true}
              loop
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <div className="flex flex-col w-full h-fit items-center">
        <h1 className="flex justify-center">
          Click en la imagen para ver video demostración
        </h1>
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={400}
          onClick={handleVid}
          className="cursor-pointer rounded-lg object-contain transition duration-300"
          style={{ transition: "box-shadow 0.3s ease" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(255, 255, 255, 0.8)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        />
      </div>
    </div>
  );
}
