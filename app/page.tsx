import React from "react"
import { SmoothScroll, CatalogueFooter, CatalogueContent } from '@/components'

export default async function Home() {
  return (
    <SmoothScroll>
      <CatalogueContent/>
      <CatalogueFooter/>
    </SmoothScroll>
  );
}