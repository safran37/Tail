import React from 'react'

export default function MobileApp() {
  return (
    <>
    {/*Left side of Mobile App components*/}
    <div className='bg-primary-brand-color flex flex-col md:flex-row items-center justify-between bg-mobile-app md:rounded-lg text-white'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='font-bold text-2xl tracking-tight'>Getiri İndirin!</h3>
        <p className='font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</p>
        <nav className='mt-5 flex flex-wrap lg:flex-nowrap justify-center md:text-left text-center gap-2'>
          <a href="#" className='transition-all hover:scale-105'>
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" className='md:h-8 lg:h-auto'/>
          </a>
          <a href="#" className='transition-all hover:scale-105'>
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" className='md:h-8 lg:h-auto' />
          </a>
          <a href="#" className='transition-all hover:scale-105'>
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" className='md:h-8 lg:h-auto' />
          </a>
        </nav>
      </div>
      {/* image on the right side */}
      <picture className='pt-6 md:block md:self-end'>
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"/>
      </picture>
    </div>
    </>
  )
}
