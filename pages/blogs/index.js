// import BlogSection from "@/components/blogs/BlogSection";
// import ScrollTop from "@/components/ScrollTop";
// import dynamic from "next/dynamic";
// import Head from "next/head";
// import React from "react";

// import Image1 from "@/assets/friendifyAI/image1.png";
// import Image2 from "@/assets/friendifyAI/image2.png";
// import Image3 from "@/assets/friendifyAI/image3.png";
// import Image4 from "@/assets/friendifyAI/image4.png";
// import Image5 from "@/assets/friendifyAI/image5.png";
// import Image6 from "@/assets/friendifyAI/image6.png";
// import Image7 from "@/assets/friendifyAI/image7.png";
// import Image8 from "@/assets/friendifyAI/image8.png";
// import Image9 from "@/assets/friendifyAI/image9.png";

// import blog1 from "@/assets/blogs/blogsDetail/thumb1.png";
// import blog2 from "@/assets/blogs/blogsDetail/thumb2.png";
// import blog3 from "@/assets/blogs/blogsDetail/thumb3.png";
// import blog4 from "@/assets/blogs/blogsDetail/blog4.png";
// import blog5 from "@/assets/blogs/blogsDetail/blog5.png";
// import blog6 from "@/assets/blogs/blogsDetail/blog6.png";
// import blog7 from "@/assets/blogs/blogsDetail/blog7.png";
// import blog8 from "@/assets/blogs/blogsDetail/blog8.png";
// import blog9 from "@/assets/blogs/blogsDetail/blog9.png";

// import Recently from "@/components/blogs/Recently";
// import BringThePower from "pages/blogs/[id]/BringThePower";
// import { useTranslation } from "react-i18next";

// const LayoutWrapper = dynamic(() => import("@/components/Layout/Layout"), {
//   ssr: false,
// });

// const Blog = () => {
//   const { t } = useTranslation();

//   const FriendifySlideData = [
//     {
//       id: 1,
//       src: blog1,
//       title: "Playground reveals to launch Friendify GPT Chatbot",
//       des: "Friendify GPT, an intelligent interactive chatbot powered by artificial intelligence (AI), will be released by Playground. This is the first step in Playground's path to develop and bring AI technology closer to everyone in order to bridge the technological divide.",
//       by: "By Friendify GPT",
//       date: "",
//     },
//     {
//       id: 2,
//       src: blog2,
//       title: "Introducing Friendify - Your best personal companion ever",
//       des: "Friendify GPT - an innovative, cutting-edge artificial intelligence service that harnesses the power of advanced language processing and machine learning to offer a wide range of functions and capabilities that can transform the way we interact with technology and each other.",
//       by: "By Friendify GPT",
//       date: "",
//     },
//     {
//       id: 3,
//       src: blog3,
//       title:
//         "Maximizing Your Productivity with Friendify: The Revolutionary AI Assistant",
//       des: "Do you ever feel like there simply aren't enough hours in the day to accomplish everything on your to-do list? Do you find yourself struggling to solve complex problems or communicate effectively with others? If so, it's time to discover the power of Friendify - the revolutionary AI assistant that can help you maximize your productivity and unlock your full potential.",
//       by: "By Friendify GPT",
//       date: "",
//     },
//   ];
//   const FriendifyDailySlideData = [
//     {
//       id: 4,
//       src: blog4,
//       title: "The role of AI chatbot in Marketing",
//       des: "Chatbots have emerged as a popular tool in the tech industry in recent years, with applications in various industries, including marketing and advertising. Chatbots are software programs that are designed to have real-time conversations with customers, and they can perform a range of tasks, such as answering customer inquiries and making product recommendations. In this article, we'll explore the role of chatbots in marketing and advertising, and how businesses can leverage their potential benefits.",
//       by: "",
//       date: "",
//     },
//     {
//       id: 5,
//       src: blog5,
//       title: "Understanding GPT & Its benefits",
//       des: "GPT or Generative Pre-trained Transformer is an artificial intelligence model developed by OpenAI, with the aim of generating human-like natural language. It was first introduced in 2018 and has since become one of the most widely used models in various fields, such as natural language processing, machine learning, and data analytics.",
//       by: "",
//       date: "",
//     },
//     {
//       id: 6,
//       src: blog6,
//       title: "Six of the best future uses for artificial intelligence",
//       des: "Artificial intelligence (AI) is poised to revolutionize numerous areas of business in the next decade. One of the areas that AI is transforming is predictions and forecasting. As AI model explainability continues to improve, complex models have become more reliable, leading to more feasible and creative applications. Additionally, AI enables companies to migrate from predicting existing trends to spotting future shifts in everything from leisure spending and travel patterns to company creditworthiness.",
//       by: "",
//       date: "",
//     },
//   ];

//   const FriendifyChatBotSlideData = [
//     {
//       id: 7,
//       src: blog7,
//       title: "How AI is driving the future of technology",
//       des: "With the rapid advances in artificial intelligence (AI) technology, it’s clear that AI is driving the future of technology. AI has the ability to make our world more efficient, productive, and innovative. From healthcare to transportation, AI is being used to improve our lives and the world around us.",
//       by: "",
//       date: "",
//     },
//     {
//       id: 8,
//       src: blog8,
//       title:
//         "VisitDenmark brings iconic tourist attractions to life in AI-produced campaign",
//       des: "A new activation campaign from tourism organization VisitDenmark wants to put the land of “hygge” on the map as the antidote to bucket list tourism.",
//       by: "",
//       date: "",
//     },
//     {
//       id: 9,
//       src: blog9,
//       title: "AI and data privacy: protecting information in a new era",
//       des: "With the growth of artificial intelligence (AI), the possibility of using personal data in ways that may infringe on privacy is increasing. As AI becomes more prominent in various industries, it is crucial that privacy is handled with special care.",
//       by: "",
//       date: "",
//     },
//   ];
//   return (
//     <React.Suspense>
//       <Head>
//         <title>Friendify GPT - Blogs</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <LayoutWrapper>
//         <div className="" style={{ paddingTop: "80px" }}>
//           <div className="flex lg:hidden bg-[#ffffff2e] backdrop-blur-md text-[32px] leading-[60px] text-white font-bold justify-center items-center ">
//             Blogs
//           </div>
//           <BlogSection
//             title={t(`titleSection.title_1`)}
//             slideData={FriendifySlideData}
//           />
//           <BlogSection
//             title={t(`titleSection.title_2`)}
//             slideData={FriendifyDailySlideData}
//           />
//           <BlogSection
//             title={t(`titleSection.title_3`)}
//             slideData={FriendifyChatBotSlideData}
//           />
//           <Recently />
//         </div>
//         {/* <BringThePower /> */}
//         <ScrollTop />
//       </LayoutWrapper>
//     </React.Suspense>
//   );
// };

// export default Blog;
