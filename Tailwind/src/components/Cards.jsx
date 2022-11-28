import React from 'react'
import cardsData from "../api/cards.json"

export default function Cards() {
  /* Using React effect to get data and add inside of data state,did this way to practice effect hook */
  const [data,setData] = React.useState([])
  React.useEffect(() => {
    setData(cardsData)
  },[])

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 px-4 md:p-0 gap-4'>
      {/* mapping over data state to create card components.Every Array Object returns
      An image source,A title and a description below*/}
      {data.length && data.map((card,key) => (
        <div key={key} className='bg-white p-14 rounded-lg shadow-2xl grid items-center justify-center text-center place-items-center'>
          <img src={card.img} className="w-[150px] h-[150px] mb-6" alt="" />
          <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
          <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
