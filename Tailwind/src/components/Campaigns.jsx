import React from 'react'
import Slider from "react-slick";
import bannersData from "../api/banners.json"
import Title from './ui/Title';
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import { useWindowWidth,} from '@react-hook/window-size'
/* Importing slider,windowWidth and title components */

/* Creating arrow functions that will return a button for slider.Onclick comes from slider here
You can console it to see what it shows
*/
function NextBtn({onClick}) {
  return (
    <button className={`absolute top-1/2 -right-6 -translate-y-1/2 !text-brand-color`} onClick={onClick}><IoIosArrowForward size={22}/></button>
  );
}

function PrevBtn({onClick}) {
  return (
    <button className={`absolute top-1/2 -left-6 -translate-y-1/2 !text-brand-color`} onClick={onClick}><IoIosArrowBack size={22}/></button>
  );
}

export default function Campaigns() {
  const windowsWidth = useWindowWidth()

  const [banners,setBanners] = React.useState([])
  React.useEffect(() => {
    setBanners(bannersData)
  },[])
  /* setting slider settings with breakpoints so it can be responsive */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false
        }
      },
    ]
  };
  return (
    <div className='container mx-auto md:pt-8'>
      <div className='hidden md:block'>
        <Title>Kampanyalar</Title>
      </div>
      {/* Slider starts here slider data comes from banner.json file when we have banners.length true it maps
      over banner state and creates a div.Inside of div we have a picture and inside of picture we have image
      that will have banner.image as it is source */}
  <Slider className='md:mx-2' {...settings}>
    {banners.length && banners.map((banner) =>(
      <div key={banner.id}>
        <picture className='md:px-2 block'>
          <img className='rounded w-full' src={banner.image} alt="" />
        </picture>
      </div>
    ))}
  </Slider>
  </div>
  )
}
