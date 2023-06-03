import detail1 from '@/assets/tivipage/detail1-1.jpg';
import detail2 from '@/assets/tivipage/detail2-2.jpg';
import detail3 from '@/assets/tivipage/detail3-3.jpg';
import hinh1Mobi from '@/assets/hero/hinh1.png';
import hinh2Mobi from '@/assets/hero/hinh2.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';



const DetailTiVi = () => {
  const { i18n, t } = useTranslation();
  const pagination = {
    clickable: true,
  };

  const slideData = [
    {
      src: detail1,
    },
    {
      src: detail2,
    },
    {
      src: detail3,
    },


  ];
  const prices = [
    {
      id: 1,
      title: "50",
      price: 1000000,
      currentPrice: 2000000,
    },
    {
      id: 2,
      title: "55",
      price: 1500000,
      currentPrice: 2500000
    },
    {
      id: 3,
      title: "65",
      price: 2000000,
      currentPrice: 3000000
    },
    {
      id: 4,
      title: "75",
      price: 3000000,
      currentPrice: 4000000
    },
    {
      id: 5,
      title: "85",
      price: 4000000,
      currentPrice: 5000000
    },
    {
      id: 6,
      title: "100",
      price: 5000000,
      currentPrice: 6000000
    },

  ];

  const [priceId, setPriceId] = useState(1)

  const handleClickPrice = (id) => {
    setPriceId(id)
  }
  //hidden lg:block
  return (
    <>
      <div className="overflow-hidden pt-[80px] w-full custom_container ">
        <div className='  container_detail_tivi'>
          <div className=' flex w-full justify-center items-center lg:flex-row flex-col '>
            <div className='lg:w-[50%] md:w-full w-[80%] md:pl-[10%] pl-0'>
              <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-[100%]  "
                spaceBetween={1}
                effect={"fade"}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
              >
                {slideData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div >
                      <Image
                        alt="content img"
                        src={item.src}
                        fill
                        style={{ objectFit: "contain" }}
                        width="560"
                        height="450"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='lg:w-[50%] w-full pt-[4%] px-[5%]'>
              <p className='text-[#000000] font-medium md:text-[23px] text-[20px]' > Smart Tivi Woolpad 4K </p>
              <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Trải nghiệm màn hình 4K, chất lượng hình ảnh 12k </p>
              <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Thiết kế mỏng tinh tế, chống chói sáng </p>
              <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập </p>
              <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Âm thanh vòm chuẩn điện ảnh ngay tại nhà </p>
              <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Công nghệ màn hình LED Không làm tivi bị nóng khi hoạt động thời gian dài </p>
              <div className=' flex pt-[20px] '>
                {prices.map((item) => (
                  <div className={`box-price md:ml-5 ml-1 ${item.id === priceId
                    ? "bg-[#c9c6c69d]"
                    : "bg-none"}`}
                    key={item.id} onClick={() => { handleClickPrice(item.id) }}>
                    <label className="font-semibold cursor-pointer ">{item.title}</label>
                  </div>
                ))}

              </div>
              <div className=' pt-5 ml-5'>
                {prices.map((item) => (
                  item.id === priceId && (
                    <div>
                      <span className='text-[14px] font-semibold text-[#868686] line-through '>{item.currentPrice.toLocaleString()} <span className='underline'>đ</span></span>
                      <span className='pl-5 text-[20px] font-semibold text-[#000000]'>{item.price.toLocaleString()} <span className='underline text-[18px] text-[#5f5e5e]'>đ</span></span>
                    </div>)
                ))}
              </div>
              <button
                type="button"
                class=" button_rotate_animation text-center shadow-box w-[110px] h-[40px] mt-[20px] mb-[20px] text-[16px] font-semibold leading-normal text-[#ffffff] rounded-[40.0783px] hover:bg-success-600 border-gray-950 bg-black-400  shadow-md"
              >
                Mua Ngay
              </button>
            </div>
          </div>
        </div>

        {/* <div className='container-hero lg:hidden block'>

        </div> */}
      </div>
    </>
  );
};

export default DetailTiVi;
