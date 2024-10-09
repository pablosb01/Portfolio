import Image from "next/image";
import { useState } from "react";

export default function ScreenShotComp({ src, alt, videoSrc }) {
  const [vid, setVid] = useState(false);

  function handleVid() {
    setVid(!vid);
  }

  return (
    <div className="flex justify-center cursor-pointer">
      <div
        className={
          vid
            ? "fixed top-0 left-0 w-full h-full flex items-center justify-center z-30 bg-stone-900 bg-opacity-70"
            : "hidden"
        }
      >
        <div>
          <div className=''>
            <button
              onClick={() => setVid(!vid)}
              className="z-50 self-end btn-effect"
            >
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
          </div>
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
      <div className="flex flex-col transform hover:scale-110  transition duration-300">
        <h1 className="flex justify-center">
          Click en la imagen para ver video demostración
        </h1>
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={400}
          onClick={handleVid}
          className="cursor-pointer rounded-lg shadow2"
        />
      </div>
    </div>
  );
}
