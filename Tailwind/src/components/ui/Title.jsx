import React from 'react'

export default function Title({children}) {
  /*Getting children(text) of Title props and putting it as a JSX object so everytime we call it and type something
  it will render the Title component with classes set*/
  return (
    <h3 className='text-sm font-semibold mb-3 px-6 md:px-0'>{children}</h3>
    )
}
