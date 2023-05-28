import hinh1 from '@/assets/hero/hinh1.jpg';
import hinh2 from '@/assets/hero/hinh2.jpg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



const HeroHompage = () => {
  const { i18n, t } = useTranslation();
  const pagination = {
    clickable: true,
  };

  const slideData = [
    {
      src: hinh1,
    },
    {
      src: hinh2,
    },

  ];


  return (
    <>
      <div className="overflow-hidden pt-[80px] w-full custom_container ">
        <div className='container-hero'>
          <Swiper
            //spaceBetween={3}
            effect={"fade"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}

            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination, EffectFade, Autoplay]}
            className="w-full "
          >
            {slideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex">
                  <div>
                    <Image
                      alt="content img"
                      src={item.src}
                      fill
                      style={{ objectFit: "contain" }}
                      width="500px"
                      height="500px"
                    />
                  </div>
                  <div>
                    sadasdasdasd
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroHompage;
