import ImageRight from '@/assets/mobi/specs-app.png';


import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CustomSection from '../common/Section';
import { AnimationOnScroll } from 'react-animation-on-scroll';


//import ImageRight from '@/assets/home/imageRight3.png';

const Mobi = () => {
  const { i18n, t } = useTranslation();
  return (

    <CustomSection>
      <div class="hidden md:block " >

        <div className=" flex justify-between  items-center flex-row w-full  h-[100vh] ">
          <div className=' flex flex-col w-[45%]'>
            <p className=' text-[#02b6ff] lg:text-[27px] text-[25px] uppercase font-bold '>THE MODMO APP</p>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <p className='text-[#161515] lg:text-[16px]text-[14px] '>Tap lock and our software will set up a five-meter perimeter around your bike. If it moves outside of this, we’ll send you a notification and you can track your bike's GPS location in-App. Join the MODMO community feature on our leaderboard plus more.</p>
            </AnimationOnScroll>
          </div>
          <div className=' lg:scale-[1.1] scale-[1] '>
            <Image fill style={{ objectFit: 'contain' }} src={ImageRight} />
          </div>


        </div>
      </div>

      <div class="md:hidden ">

        <div >
          <Image fill style={{ objectFit: 'contain' }} src={ImageRight} />
        </div>
        <div className=' flex flex-col px-5'>
          <p className=' text-[#02b6ff] text-[22px] uppercase font-bold '>THE MODMO APP</p>
          <p className='text-[#161515] text-[14px] '>Tap lock and our software will set up a five-meter perimeter around your bike. If it moves outside of this, we’ll send you a notification and you can track your bike's GPS location in-App. Join the MODMO community feature on our leaderboard plus more.</p>
        </div>

      </div>
    </CustomSection>

  );
};

export default Mobi;
