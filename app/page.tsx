import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"
import Wrapper from "./SmoothScroll"

interface CatalgueItemProps {
  src : string | StaticImageData,
  alt? : string,
  href? : string
}

const CatalogueItem: React.FC<CatalgueItemProps> = ({ src, alt = "", href}) => {
  return(
    <div className="w-full h-full">
      {src && 
        <Image
          src={src}
          alt={alt}
          width={300} 
          height={400}
        />
      }
      <div className="w-full h-full bg-neutral-700"/>
      <div className="text-xs w-full flex flex-col gap-1">
        <h1>{`Kontol "Biadap" Ngentot`}</h1>
        <div className="flex w-full justify-between">
          <p>Rp. 75.000</p>
          <p>42069</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const itemsArray = Array.from({ length: 100 });
  return (
    <Wrapper className="">
      <main className="catalogue-layout">
        <Link href="/" className="text-sm tracking-tight font-semibold w-full h-full flex flex-col uppercase col-span-2 gap-1">
          <h1>Dobujack Invasion</h1>
          <h2>Catalogue</h2>
        </Link>
        <div className="text-sm font-semibold tracking-tight w-full h-full col-start-3 flex flex-col gap-1 uppercase">
          <h1>2005 ━</h1>
          <h2>Ongoing</h2>
        </div>
        <div className="text-sm w-full h-full flex flex-col gap-1 uppercase">
          <Link href = "/bestseller">Best Seller</Link>
        </div>
        <div className="text-sm w-full h-full flex flex-col gap-1 uppercase">
          <Link href = "/">Category</Link>
        </div>
        <div className="text-sm w-full h-full flex flex-col gap-1 uppercase">
          <Link href = "/">New Arrivals</Link>
        </div>
        <div className="text-sm w-full h-full flex flex-col gap-1 uppercase">
          <Link href = "/">About Us</Link>
        </div>
        {itemsArray.map((_, index) => (
          <CatalogueItem key={index} src=""/>
        ))}
      </main>
    </Wrapper>
  );
}