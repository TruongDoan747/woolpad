import tivi3 from '@/assets/light/hinh7.png';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';


const Light = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className='custom_container pt-[50px] h-[100vh] pb-10 '>
      <div class="hidden lg:block container_light " >
        <div className=" flex justify-around w-full">

          <div className='pt-[8%] w-[40%] pl-[30px]'>
            <p className='pt-[15px] 2xl:text-[35px] xl:text-[25px] text-[20px] font-semibold text-[#000]'>WOOLPAD Ti Vi OLED </p>
            <p className='pt-[15px] 2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-[#292828fa]'> Màn hình 4K, chất lượng hình ảnh 12k</p>
            <p className='pt-[15px] 2xl:text-[18px] xl:text-[16px] text-[14px] text-[#a19c9cfa]'> Thiết kế Neo Slim. Công nghệ màn hình tivi OLED, Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập </p>
            <button
              type="button"
              class="button_rotate_animation text-center shadow-box w-[125px] h-[40px] mt-[20px] text-[16px] font-bold leading-normal text-white rounded-[40.0783px] hover:bg-success-600 bg-[#000] hover:bg-[#2c2b2b] shadow-md"
            >
              Xem Thêm
            </button>
          </div>

          <div className='pt-[4%]'>
            <Image fill style={{ objectFit: 'contain' }} src={tivi3} className='img-light right-0' />
          </div>

        </div>
      </div>

      <div class="lg:hidden container_light">
        <div className=" flex flex-col justify-center items-center pb-[5%]">

          <div className='pt-[4%]'>
            <Image fill style={{ objectFit: 'contain' }} src={tivi3} className='img-light right-0' />
          </div>

          <div className='  px-[15px] '>
            <p className='pt-[15px] text-[25px] font-semibold text-[#000]'>WOOLPAD Ti Vi OLED </p>
            <p className='pt-[15px] text-[16px] font-semibold text-[#292828fa]'> Màn hình 4K, chất lượng hình ảnh 12k</p>
            <p className='pt-[15px] text-[16px]  text-[#a19c9cfa]'> Thiết kế Neo Slim. Công nghệ màn hình tivi OLED, Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập </p>

          </div>
          <button
            type="button"
            class="  button_rotate_animation text-center shadow-box w-[125px] h-[40px] mt-[20px] text-[16px] font-bold leading-normal text-white rounded-[40.0783px] hover:bg-success-600 bg-[#000] hover:bg-[#2c2b2b] shadow-md"
          >
            Xem Thêm
          </button>


        </div>
      </div>

    </div>
  );
};

export default Light;
