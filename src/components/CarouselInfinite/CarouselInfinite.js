export default function CarouselInfinite({ icons }) {
    
  return (
    <div className="relative overflow-hidden w-[80%] h-30 justify-self-center dark:bg-opacity-0 p-4 rounded-lg z-0">
      <div className="flex w-max animate-scroll">
        {icons.map((icon, index) => (
            
          <div
            key={index}
            className="flex-shrink-0 w-20 h-20 mx-4 flex items-center justify-center"
          >
            <img
              src={icon.src}
              alt={icon.title}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
        {icons.map((icon, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-20 h-20 mx-4 flex items-center dark:fill-white justify-center"
          >
            <img
              src={icon.src}
              alt={icon.title}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
