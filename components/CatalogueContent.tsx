import CatalogueNavigation from "./CatalogueNavigation"
import CatalogueItem from "./CatalogueItem"

const CatalogueContent = async () => {
  const itemsArray = Array.from({ length: 60 });
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