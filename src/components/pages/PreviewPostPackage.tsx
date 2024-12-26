import { avatar1, avatar2, avatar3, coffeeMug } from "@/images";
import { ListImagesShowCard } from "./ListImagesShowCard";

export const PreviewPostPackage = () => {
  const images = [avatar1, avatar2, avatar3, coffeeMug];

  return (
    <div className="hidden lg:block border-l border-gray-300 py-4 px-16">
      <div>
        <h2 className="text-3xl font-semibold text-gray-700">Vista previa</h2>

        <div className="bg-white rounded-lg mt-4">
          <p className="text-sm text-gray-400 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            explicabo aperiam aliquid maiores iste fuga ipsa, aspernatur quos
            nulla velit distinctio debitis consequuntur atque sed deleniti
            cupiditate nobis, ex eius.
          </p>

          <ListImagesShowCard images={images} isImages={images.length > 1} />

          <ul>
            <li className="flex items-center justify-between border-b border-gray-300 py-3 px-4 text-gray-500 text-sm">
              <img src="/assets/money.svg" alt="money" />
              $1.000.000 pesos
            </li>

            <li className="flex items-center justify-between border-b border-gray-300 py-3 px-4 text-gray-500 text-sm">
              <img src="/assets/date.svg" alt="date" />
              2021-10-10
            </li>

            <li className="flex items-center justify-between border-b border-gray-300 py-3 px-4 text-gray-500 text-sm">
              <img src="/assets/travel.svg" alt="travel" />
              Colombia
            </li>

            <li className="flex items-center justify-between border-b border-gray-300 py-3 px-4 text-gray-500 text-sm">
              <img src="/assets/paperreceive.svg" alt="paperreceive" />
              Estados unidos
            </li>

            <li className="grid grid-cols-2 gap-8 border-b border-gray-300 py-3 px-4">
              <div className="flex items-center gap-4">
                <img src="/assets/height.svg" alt="height" />
                <p className="text-gray-500 text-sm">10</p>
              </div>
              <div className="flex items-center justify-end gap-4">
                <img src="/assets/width.svg" alt="width" />
                <p className="text-gray-500 text-sm">10</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/ruler.svg" alt="ruler" />
                <p className="text-gray-500 text-sm">10</p>
              </div>
              <div className="flex items-center justify-end gap-4">
                <img src="/assets/weight.svg" alt="weight" />
                <p className="text-gray-500 text-sm">10</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
