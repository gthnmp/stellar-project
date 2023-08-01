import React from "react"
import { SmoothScroll, CatalogueFooter, CatalogueContent } from '@/components'

export default function Home() {
  return (
    <SmoothScroll>
      <CatalogueContent/>
      <CatalogueFooter/>
    </SmoothScroll>
  );
}