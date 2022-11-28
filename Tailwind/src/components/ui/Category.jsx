import React from 'react'

export default function Category({category:{title,image}}) {
  /* inside of category component we return a link tag with an image and a span children
  image children will have category.image as it is source and span will have category.title as it is children
  */
  return (
    <a href='#' className='flex gap-y-2 group transition hover:bg-purple-50 flex-col items-center text-center p-4'>
        <img src={image} alt={title} className="w-12 h-12 rounded border border-gray-200" />
        <span className='text-sm font-semibold group-hover:text-brand-color tracking-tight text-gray-700'>{title}</span>
    </a>
  )
}
