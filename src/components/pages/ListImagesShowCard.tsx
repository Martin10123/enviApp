interface ListImagesShowCardProps {
  isImages: boolean;
  images: string[];
  handleOpenLightbox?: (index: number) => void;
}

export const ListImagesShowCard = ({
  isImages,
  images,
  handleOpenLightbox,
}: ListImagesShowCardProps) => {
  const displayImages = images.slice(0, 4);
  const additionalImagesCount = images.length - 4;

  return (
    <div
      className={`grid gap-2 mb-4 ${isImages ? "grid-cols-2" : "grid-cols-1"}`}
    >
      {displayImages.map((image, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
          onClick={handleOpenLightbox && (() => handleOpenLightbox(index))}
        >
          <img src={image} alt={`Image ${index + 1}`} className="rounded-lg" />

          {index === 3 && additionalImagesCount > 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-white text-lg">
                +{additionalImagesCount} imágenes
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
