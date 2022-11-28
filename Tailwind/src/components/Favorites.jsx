import React from 'react'
import Title from "../components/ui/Title"
import favoritesData from "../api/favorites.json"
import ProductItem from './ui/ProductItem'
/* Importing Title component so i don't have to create a title over and over again */
/* Importing favoritesdata and productitem components */

export default function Favorites() {
  /*fetching data with effect and setting inside favorites state to practice effect hook */
  const [favorites,setFavorites] = React.useState([])
  React.useEffect(() => {
    setFavorites(favoritesData)
  },[])
  return (
    <div>
      {/* Using Title component here */}
      <Title>Favoriler</Title>
      <div className="grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 gap-0.1 rounded-lg overflow-hidden">
        {/* Mapping the data that comes from favoritesData.json file and calling ProductItem component here
        we destructure everything inside of components product prop and adding index as a key */}
        {favorites.length && favorites.map((product,index) => <ProductItem key={index} product={product}/>)}
      </div>
    </div>
  )
}
