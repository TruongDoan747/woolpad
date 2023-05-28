import ImageRight from '@/assets/light/image_right1.jpg';


import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CustomSection from '../common/Section';
import { AnimationOnScroll } from 'react-animation-on-scroll';


//import ImageRight from '@/assets/home/imageRight3.png';

const Light = () => {
  const { i18n, t } = useTranslation();
  return (
    <CustomSection>
      <div class="hidden md:block " >

        <div className=" flex justify-between items-center flex-row w-full  h-[100vh] ">
          <div className=' '>
            <Image fill style={{ objectFit: 'contain' }} src={ImageRight} />
          </div>
          <div className=' flex flex-col w-[45%]'>
            <p className=' text-[#02b6ff] lg:text-[27px] text-[25px] uppercase font-bold '>See the night in a different light</p>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <p className='text-[#161515] lg:text-[16px]text-[14px] '>The Saigon is the safest bike out of the box. Integrated lights to the front, rear and in the handlebar ends are always there when you need them. You’re safer when you’re seen.</p>
            </AnimationOnScroll>
          </div>

        </div>
      </div>

      <div class="md:hidden ">

        <div >
          <Image fill style={{ objectFit: 'contain' }} src={ImageRight} />
        </div>
        <div className=' flex flex-col px-5'>
          <p className=' text-[#02b6ff] text-[22px] uppercase font-bold '>See the night in a different light</p>
          <p className='text-[#161515] text-[14px] '>The Saigon is the safest bike out of the box. Integrated lights to the front, rear and in the handlebar ends are always there when you need them. You’re safer when you’re seen.</p>
        </div>

      </div>

    </CustomSection>
  );
};

export default Light;
