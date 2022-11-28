import React from 'react'
import {Collapse} from 'react-collapse';
import { useWindowWidth,} from '@react-hook/window-size'
import {IoIosArrowDown} from "react-icons/io"
/* Importing react collapse library for accordion menu */
export default function Menu({title,items}) {

const windowsWidth = useWindowWidth()
const [isOpen,setIsOpen] = React.useState(true)
{/* onClick if window width is lower than 768px switch isOpen state's boolean value */}
const toggleCollapse = () => {
    if(windowsWidth <= 768){
        setIsOpen(!isOpen)
    }
}
{/* Every time windowwidth changes control the state and window width if it is lower than 768px and isOpen
true then open the accordion else do not open and wait for it to switch states */}
React.useEffect(() => {
    if(isOpen && windowsWidth <= 768){
        setIsOpen(false)
    }
    if(!isOpen && windowsWidth > 768){
        setIsOpen(true)
    }
},[windowsWidth])

  return (
    <section>
        <nav className='grid gap-y-1 md:gap-y-4'>
            <h6 onClick={toggleCollapse} className='flex items-center justify-between text-lg text-primary-brand-color'>{title}
            <button className='grid md:hidden w-6 gridplace-items-center h-6 rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color'>
                {/* adding conditional className so accordion arrows can change */}
                <span className={`transition-all transform ${isOpen ? "-rotate-180" : ""}`}>
                    <IoIosArrowDown size={15}/>
                </span>
            </button>
            </h6>
            {/* setting up react collapse library */}
            <Collapse isOpened={isOpen}>            
            <nav>
                <ul className='grid gap-y-1 md:gap-y-2'>
                    {/* Reaching out items key from Footer.jsx component and mapping it {...menu} sends all title and menus
                    and we map again items arrays.We create li's with returned items */}
                    {items.map((item,key) => (
                        <li key={key}>
                            <a href="#" className='text-sm hover:text-brand-color'>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            </Collapse>
        </nav>
    </section>
  )
}
