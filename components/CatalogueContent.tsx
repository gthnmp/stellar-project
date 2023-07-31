import CatalogueNavigation from "./CatalogueNavigation"
import CatalogueItem from "./CatalogueItem"
import { getProduct } from "@/api/getProduct";

const CatalogueContent = async () => {
  const itemsArray = Array.from({ length: 60 });
  const product = await getProduct();
  console.log(product)
  return(
    <main className="catalogue-layout">
      <CatalogueNavigation/>
      {itemsArray.map((_, index) => (
        <CatalogueItem key={index} src=""/>
      ))}
    </main>
  )
}

export default CatalogueContent