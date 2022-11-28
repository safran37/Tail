import React from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa"
import { useWindowWidth,} from '@react-hook/window-size'
// importing windowwidth hook,facebook icon and a flagselect library //

export default function Hero() {
  const [selected, setSelected] = React.useState('TR')
  /* setting up windowwidth hook */
  const windowsWidth = useWindowWidth()
  /* setting up some random phones object */
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
  }
  /* settings for slider */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };
  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:h-full before:z-10 before:absolute before:inset-0">
      {/* Slider appears only if window width is greater than 768px */}
      {windowsWidth >= 768 && <Slider {...settings}>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt="guy phone slider image"
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[500px]"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt=""
          />
        </div>
      </Slider>}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 translate-x-0  md:left-1/2 md:-translate-x-1/2 h-full z-20">
        {/* Left side of hero section that disappears on mobile */}
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="mt-8 text-2xl font-semibold text-white">
            Dakikalar İçinde <br /> Kapınızda
          </h3>
        </div>
        {/* End of left side */}
        {/* Setting up login section,section will be wide at mobile phones */}
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color mb-4 font-semibold text-center">
            Giriş Yap veya kayıt ol
          </h4>
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              {/* setting up reactFlag library.Turning phones object keys to arrays with object.keys and setting
              up as a countries prop.Labels will be the values of said keys and onSelect it will set
              setSelected's value as chosen value */}
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language"
                selected={selected}
                onSelect={code => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 group relative cursor-pointer">
                <input required type="text" className="text-sm pt-2 font-semibold peer transition-colors outline-none focus:border-primary-brand-color group-hover:border-primary-brand-color h-14 px-4 border-2 border-gray-200 rounded w-full" />
                <span className="peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs absolute inset-0 h-full px-4 flex items-center text-sm text-gray-500">Telefon Numarası</span>
              </label>
            </div>
            <button className="transition-colors hover:bg-primary-brand-color hover:text-brand-yellow bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="bg-gray-200 px-4 hover:bg-blue-700 hover:text-white text-blue-700 transition-colors h-12 flex items-center rounded-md w-full text-sm font-semibold">
              <FaFacebook size={24} />
              <span className="mx-auto"> Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
