"use client"
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'

export default function BestSeller (){
  const pathname = usePathname()
  const [inProps, setInProps] = useState(true)
  const nodeRef = useRef(null)
  useEffect(() => {
    setInProps(pathname === "/bestseller")
  },[pathname])

  return(
    <main ref={nodeRef} className={`transition-all duration-1000 ease-in-out w-screen h-screen uppercase bg-white grid place-items-center text-4xl font-sans`}>
      Best Seller
      <nav className="text-sm fixed w-screen h-10  bottom-0 grid grid-cols-7 px-4">
        <div className="w-full h-full flex flex-col-reverse">
          <Link href={"/"}>Dobujack Invasion</Link>
        </div>
        <div className="w-full h-full flex flex-col-reverse col-start-3">
          <h1>Best Selling 2023</h1>
        </div>
        <div className="w-full h-full flex flex-col-reverse col-start-5">
          <Link href={"/"}>Category</Link>
        </div>
        <div className="w-full h-full flex flex-col-reverse">
          <Link href={"/"}>New Arrivals</Link>
        </div>
        <div className="w-full h-full flex flex-col-reverse">
          <Link href={"/"}>About Us</Link>
        </div>
      </nav>
    </main>
  )
}