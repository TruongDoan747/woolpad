// import Image from "next/image";
// import CustomSection from "@/components/common/Section";

// import { blogDetailsData } from "mockData/blogDetails";
// import { useRouter } from "next/router";
// import { useEffect, useMemo, useState } from "react";
// import { useTranslation } from "react-i18next";

// const BringThePower = () => {
//   const router = useRouter();
//   const { i18n, t } = useTranslation();

//   const [details, setDetails] = useState(null);

//   const renderContent2 = useMemo(() => {
//     const content = [];

//     if (details) {
//       content.push(
//         <div className="relative w-full md:w-[80%] aspect-[16/9] m-auto">
//           <Image
//             src={details.mainImage}
//             fill
//             layout="fill"
//             style={{ objectFit: "contain" }}
//           />
//         </div>
//       );
//       for (let value of details.content) {
//         const keys = Object.keys(value);
//         for (let key of keys) {
//           if (value[key]) {
//             if (key === "text") {
//               for (let text of value[key].split("BREAKLINE"))
//                 content.push(
//                   <p className="w-[90%] md:w-[70%] mx-auto my-[20px] text-[20px]">
//                     {text}
//                   </p>
//                 );
//             } else if (key === "title") {
//               content.push(
//                 <div className="w-[90%] md:w-[70%] m-auto">
//                   <h1 className="text-[24px] font-bold my-[20px] w-[100] text-left ml-auto">
//                     {value[key]}
//                   </h1>
//                 </div>
//               );
//             } else if (key === "image") {
//               content.push(
//                 <div className="relative w-[90%] md:w-[70%] m-auto">
//                   <div className="relative w-full aspect-[16/9] m-auto">
//                     <Image
//                       src={value[key].url}
//                       fill
//                       layout="fill"
//                       style={{ objectFit: "contain" }}
//                       alt="image"
//                     />
//                   </div>
//                   <p className="text-[16px]">{value[key].des}</p>
//                 </div>
//               );
//             } else {
//               content.push(
//                 <hr className="my-[50px] w-[90%] md:w-[70%] m-auto" />
//               );
//             }
//           }
//         }
//       }
//     }
//     return content;
//   }, [details]);

//   const [data, setData] = useState([]);

//   const renderContent1 = useMemo(() => {
//     return (
//       <>
//         {data?.map((item) => (
//           <div key={item.id}>
//             <div className="relative w-full md:w-[80%] aspect-[16/9] m-auto">
//               <Image
//                 src={item.mainImage}
//                 fill
//                 layout="fill"
//                 style={{ objectFit: "contain" }}
//               />
//             </div>
//             {item?.content.map((item2) => {
//               return (
//                 <div key={item2.id}>
//                   <p className="w-[90%] md:w-[70%] mx-auto my-[20px] text-[20px]">
//                     {/* {item2.text} */}
//                     {t(`blogDetails.blog_${item.id}.content.text_${item2.id}`)}
//                   </p>
//                   {item2.title != null && (
//                     <div className="w-[90%] md:w-[70%] mx-auto my-[20px] text-[20px] font-bold italic">
//                       {t(
//                         `blogDetails.blog_${item.id}.content.title_text_${item2.id}`
//                       )}
//                     </div>
//                   )}
//                   {item2?.isBreak === true && (
//                     <hr className="my-[50px] w-[90%] md:w-[70%] m-auto" />
//                   )}
//                   {item2?.image != null && (
//                     <div className="relative w-[90%] md:w-[70%] m-auto">
//                       <div className="relative w-full aspect-[16/9] m-auto">
//                         <Image
//                           src={item2?.image?.url}
//                           fill
//                           layout="fill"
//                           style={{ objectFit: "contain" }}
//                           alt="image"
//                         />
//                       </div>
//                       <p className="text-[16px]">{item2?.image?.des}</p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//             <div className="w-[90%] md:w-[70%] mx-auto my-[20px] text-[22px] font-bold italic">
//               {t(`blogDetails.blog_${item.id}.source_${item.id}`)}
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   }, [data, i18n.language]);

//   // const query = router.query?.id;
//   // const nameRep = query?.replaceAll("-", " ");
//   // const cacTu = nameRep.split(" ");
//   // const tuCuoiCung = cacTu[cacTu.length - 1];

//   const idBlogDetail =
//     typeof window !== "undefined" && localStorage.getItem("idBlog");
//   useEffect(() => {
//     const data = blogDetailsData.find((el) => el.id === +idBlogDetail);
//     setDetails(data);
//     setData([data]);
//   }, [router.query]);

//   return (
//     <div className="pt-[80px]">
//       <CustomSection
//         title={t(`blogDetails.blog_${+idBlogDetail}.title_${+idBlogDetail}`)}
//         // title={details?.title}
//         classTitle="text-[30px] md:text-[44px] font-bold text-white mb-[40px] w-full md:w-[60%] text-center"
//       >
//         <div className="text-white w-full">{renderContent1}</div>
//       </CustomSection>
//     </div>
//   );
// };

// export default BringThePower;
