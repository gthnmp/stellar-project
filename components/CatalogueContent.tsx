import CatalogueNavigation from "./CatalogueNavigation"
import CatalogueItem from "./CatalogueItem"
import { getProduct } from "@/api/getProduct";
import { Product } from "@/types";
import { supabase } from "@/api/supabaseClient";

type ProductResponse = Product[] | any[] | undefined

const CatalogueContent = async () => {
  const products: ProductResponse = await getProduct();
  return(
    <main className="catalogue-layout">
      <CatalogueNavigation/>
      {products?.map((product:Product, index) => (
        <CatalogueItem 
          key={index} 
          {...product}
        />
      ))}
    </main>
  )
}

export default CatalogueContent
