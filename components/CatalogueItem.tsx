import Image, { StaticImageData } from "next/image";

interface CatalogueItemProps {
  name: string;
  thumbnail: string;
  sold: number;
  stock: number;
  rating: number;
  discount: boolean;
  default_price: number;
  new_price: number;
  description: string;
  category: string;
  alt?: string;
  href?: string;
}

const CatalogueItem: React.FC<CatalogueItemProps> = ({
  thumbnail,
  name,
  new_price,
  sold,
  alt = "",
}) => {
  return (
    <div className="w-full h-full shadow-2xl flex gap-1 flex-col p-3">
      {thumbnail && (
        <Image src={thumbnail} alt={alt} width={300} height={400} />
      )}
      <div className="text-xs w-full flex flex-col justify-between gap-1">
        <h1>{name}</h1>
        <div className="flex w-full font-semibold justify-between text-xl">
          <p>${new_price}</p>
        </div>
        <div className="text-xs text-neutral-600">
          <p>Sold {sold}</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogueItem;
