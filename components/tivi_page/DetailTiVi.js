import detail1 from '@/assets/tivipage/detail1.png';
import detail2 from '@/assets/tivipage/detail2.png';
import detail3 from '@/assets/tivipage/detail3.png';
import hinh1Mobi from '@/assets/hero/hinh1.png';
import hinh2Mobi from '@/assets/hero/hinh2.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



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


  return (
    <>
      <div className="overflow-hidden pt-[80px] w-full custom_container ">
        <div className=' hidden lg:block container_detail_tivi'>
          <div className=' flex w-full '>
            <div className='w-[40%]'>
              <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-[100%] "
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
                        width="460"
                        height="350"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='w-[50%] pt-[4%]'>
              <p className='text-[#000000] font-medium text-[23px]' >
                Smart Tivi Woolpad 4K
              </p>
              <p className='text-[16px] pt-[10px] text-[#414040]'>- Màn hình 4K, chất lượng hình ảnh 12k , chống chói sáng </p>
              <p className='text-[16px] pt-[10px] text-[#414040]'>- Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập </p>
            </div>
          </div>
        </div>

        <div className='container-hero lg:hidden block'>

        </div>
      </div>
    </>
  );
};

export default DetailTiVi;
