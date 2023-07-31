import React from "react"
import Link from "next/link"

const CatalogueNavigation = () => (
  <nav className="navigation-layout col-span-2 md:col-span-7">
    <Link href="/" className="text-sm tracking-tight font-semibold w-full h-full flex flex-col uppercase col-span-2">
      <h1>Dobujack Invasion</h1>
      <h2>Catalogue</h2>
    </Link>
    <div className="text-sm font-semibold tracking-tight w-full h-full col-start-3 flex flex-col uppercase">
      <h1>2005 ━</h1>
      <h2>Ongoing</h2>
    </div>
    <div className="text-sm w-full h-full hidden md:flex flex-col gap-1 uppercase">
      <Link href = "/bestseller">Best Seller</Link>
    </div>
    <div className="text-sm w-full h-full hidden md:flex flex-col gap-1 uppercase">
      <Link href = "/">Category</Link>
    </div>
    <div className="text-sm w-full h-full hidden md:flex flex-col gap-1 uppercase">
      <Link href = "/">New Arrivals</Link>
    </div>
    <div className="text-sm w-full h-full hidden md:flex flex-col gap-1 uppercase">
      <Link href = "/">About Us</Link>
    </div>
  </nav>
)

export default CatalogueNavigation