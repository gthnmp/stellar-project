import React from "react"
import { CatalogueItem, SmoothScroll, CatalogueNavigation, CatalogueFooter } from '@/components'

export default function Home() {
  const itemsArray = Array.from({ length: 60 });
  return (
    <SmoothScroll>
      <main className="catalogue-layout">
        <CatalogueNavigation/>
        {itemsArray.map((_, index) => (
          <CatalogueItem key={index} src=""/>
        ))}
      </main>
      <CatalogueFooter/>
    </SmoothScroll>
  );
}