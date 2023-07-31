import Image, {StaticImageData} from "next/image"

interface CatalgueItemProps {
  src : string | StaticImageData,
  alt? : string,
  href? : string
}

const CatalogueItem: React.FC<CatalgueItemProps> = ({ src, alt = "", href}) => {
  return(
    <div className="w-full h-full shadow-lg flex gap-1 flex-col p-3">
      {src && 
        <Image
          src={src}
          alt={alt}
          width={300} 
          height={400}
        />
      }
      <div className="w-full h-auto aspect-square bg-neutral-30f0 bg-gradient-to-br from-neutral-300 to-neutral-400"/>
      <div className="text-sm w-full flex flex-col justify-between gap-1">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div className="flex w-full font-semibold justify-between text-xl">
          <p>$6</p>
        </div>
        <div className="text-xs text-neutral-600">
          <p>Sold 2</p>
        </div>
      </div>
    </div>
  )
}

export default CatalogueItem