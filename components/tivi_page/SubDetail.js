import detailAnhSang from '@/assets/tivipage/detail-anhsang.png';
import detailPhongKhach from '@/assets/tivipage/detail-phongkhach.png';
import detailSatNet from '@/assets/tivipage/detail-satnet.png';
import detailHinh8 from '@/assets/tivipage/hinh8.png';
import detailXemPhim from '@/assets/tivipage/detail-xemphim.png';

import Image from 'next/image';


const dataDetail = [
  {
    src: detailPhongKhach,
    title: "Trải nghiệm màn hình 4K, chất lượng hình ảnh 12k",
    subTitle: "Độ phân giải hình ảnh cao cho hình ảnh chất lượng",
  },
  {
    src: detailSatNet,
    title: "Thiết kế mỏng tinh tế",
    subTitle: "Chống chói sáng, góc nhìn rộng",
  },
  {
    src: detailXemPhim,
    title: "Trải nghiệm âm thanh vòm chuẩn điện ảnh ngay tại nhà",
    subTitle: "chất lượng âm thanh mạnh mẽ khi TV hòa âm cùng soundbar.",
  },

  {
    src: detailHinh8,
    title: "Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập, màn hình 4K",
    subTitle: "",
  },
  {
    src: detailAnhSang,
    title: "Công nghệ màn hình LED Không làm tivi bị nóng khi hoạt động thời gian dài",
    subTitle: "Hỗ trợ tản nhiệt tốt để góp phần giúp tivi bền hơn, tuổi thọ trung bình khoảng 60 - 80.000 giờ",
  }
]





const SubDetail = () => {

  return (
    <>
      <div className="overflow-hidden pt-[80px] w-full custom_container ">
        <div className=' hidden lg:block container_detail_tivi'>
          <div className=' flex flex-col justify-center items-center'>
            {dataDetail.map((item, index) => (
              <div key={index} className=' relative '>
                <div className=''>
                  <Image alt="content img" src={item.src} fill style={{ objectFit: "contain" }} />
                </div>
                <div className=' absolute flex justify-center items-center flex-col text-white z-999  top-[70px] w-full' >
                  <p className='text-[50px]'>{item.title}</p>
                  <p className='text-[30px]'>{item.subTitle}</p>
                </div>
              </div>

            ))}


          </div>

        </div>

        <div className='container-hero lg:hidden block'>

        </div>
      </div>
    </>
  );
};

export default SubDetail;
