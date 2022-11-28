import React from 'react'
import categoryData from '.././api/categories.json'
import Category from './ui/Category'
import Title from './ui/Title'
/* importing categorydata.json file and title component */


export default function Categories() {
  /* setting effect and putting the data that comes from category.json inside of categories state */
  const [Categories,setCategories] = React.useState([])
  React.useEffect(() => {
        setCategories(categoryData)
  },[])
  return (
    <div className='bg-white py-4'>
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 2xl:grid-cols-12">
            {/* mapping over categories state to Call Category component 
            destructuring everything inside of category prop */}
          {Categories && Categories.map((category,index) => <Category key={index} category={category}></Category>)}
        </div>
      </div>
    </div>
  )
}
