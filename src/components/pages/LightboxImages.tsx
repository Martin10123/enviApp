import { avatar1, avatar2, avatar3, coffeeMug, enviAppLogin } from "@/images";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { ListImagesShowCard } from "./ListImagesShowCard";

interface LightboxImagesProps {
  isImages: boolean;
  imagesUser?: string[];
}

export const LightboxImages = ({ isImages }: LightboxImagesProps) => {
  const images = isImages
    ? [avatar1, avatar2, avatar3, coffeeMug, enviAppLogin]
    : [avatar1];

  const [toggler, setToggler] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index + 1);
    setToggler(!toggler);
  };

  return (
    <div className="mb-4">
      <ListImagesShowCard
        images={images}
        isImages={isImages}
        handleOpenLightbox={handleOpenLightbox}
      />

      <FsLightbox toggler={toggler} sources={images} slide={lightboxIndex} />
    </div>
  );
};
