import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import logoZalo from '@/assets/contact/logo-zalo.png';
import Image from 'next/image';

function HotLine() {

  return (
    <div className="hot-line">
      <div className="text-[25px] hover:scale-[1.2] ease-in-out duration-500">

        <Image fill style={{ objectFit: 'contain' }} src={logoZalo} width="50" height="50" />
      </div>
    </div>
  );
}

export default HotLine;
