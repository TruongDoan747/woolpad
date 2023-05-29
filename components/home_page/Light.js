import tivi3 from '@/assets/light/tivi3.jpg';


import Image from 'next/image';
import { useTranslation } from 'react-i18next';


const Light = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className='custom_container pt-[50px] h-[100vh] pb-10 '>
      <div class="hidden lg:block container_light" >
        <div className=" flex justify-around p-[20px]">

          <div className='mt-[10%]'>
            <p className='2xl:text-[45px] xl:text-[38px] text-[27px] font-bold text-[#000]'>WOOLPAD
              <span className='ml-[15px] 2xl:text-[40px] xl:text-[30px] text-[25px] font-normal text-[#000]'>Ti Vi OLED</span>
            </p>
            <p className='2xl:text-[35px] xl:text-[28px] text-[18px] font-semibold'>Công nghệ màn hình tivi OLED</p>
            <button
              type="button"
              class="button_rotate_animation text-center shadow-box w-[110px] h-[30px] mt-[20px] text-[16px] font-bold leading-normal text-white rounded-[40.0783px] hover:bg-success-600 bg-[#000] hover:bg-[#2c2b2b] shadow-md"
            >
              Mua Ngay
            </button>
          </div>

          <div className=''>
            <Image fill style={{ objectFit: 'contain' }} src={tivi3} width="650px" height="450px" className='img-light' />
          </div>

        </div>
      </div>

      <div class="lg:hidden ">

      </div>

    </div>
  );
};

export default Light;
