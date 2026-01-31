import workspaceImage from "@/assets/workspace.jpg";
import laptopImage from "@/assets/laptop-hands.jpg";
import portraitImage from "@/assets/portrait.jpg";
import lifestyleImage from "@/assets/lifestyle.jpg";

const images = [
  { src: workspaceImage, alt: "Modern workspace setup" },
  { src: laptopImage, alt: "Hands using laptop" },
  { src: portraitImage, alt: "Portrait photography" },
  { src: lifestyleImage, alt: "Abstract lifestyle" },
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full animate-fade-up animation-delay-400">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
