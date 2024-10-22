import Image from "next/image";



// Menu data array
const menu = [
  {
    title: "Blossom facial package 1",
    description: "Unlock radiant skin with Blossom Beauty, your weekly dose of nourishment for a glowing complexion.",
    price:3000,
  
    image: "/porduct1.jpeg",   
  },
  {
    title: "Blossom facial package 2",
    description: "Blossom Beauty package: Controls oiliness, reveals clear skin. Nourishes with natural herbs for a balanced glow.",
    price: 3000,
    image: "/product2.jpeg",
  },
  {
    title: "Hand Cream",
    description: "Blossom Beauty Herbal Hand Cream: Hydrates and softens rough hands for visibly smoother skin.",
    price: 800,
    image: "/product3.jpeg",
  },
  {
    title: "Face Scrub",
    description: "Blossom Beauty Face Scrub: Nature's blend of herbs and gentle exfoliants for polished, glowing skin.",
    price: 800,
    image: "/product4.jpeg",
  },
  {
    title: "Hydrating Mist",
    description: "Blossom Beauty Hydrating Mist: Refresh and rejuvenate your skin with soothing herbal extracts for a radiant glow",
    price: 600,
    image: "/product5.jpeg",
  },
  {
    title: " Night Hand Cream",
    description: "Blossom Beauty Night Hand Cream: Nourish and repair dry hands overnight with intense hydration and soothing herbal extracts",
    price: 800,
    image: "/product6.jpeg",
  },
  {
    title: "Clean Face Wash",
    description: "Blossom Beauty Pure Clean Face Wash: Cleanses and purifies skin for a refreshed, radiant complexion.",
    price: 999,
    image: "/product7.jpeg",
  },
  {
    title: "Radiant Facial Cleanser",
    description: "Blossom Beauty Radiant Facial Cleanser: Illuminates skin with gentle exfoliants and nourishing botanicals.",
    price: 1200,
    image: "/product8.jpeg",
  },
  {
    title: " Oil Control Face Wash",
    description: "Blossom Beauty Oil Control Face Wash: Regulates oil production, reducing shine and minimizing pores",
    price: 1999,
    image: "/product9.jpeg",
  },
  {
    title: "Brightening Facial Cleanser",
    description: "Blossom Beauty Brightening Facial Cleanser: Fades imperfections, revealing brighter, more even-toned skin.",
    price:999,
    image: "/product11.jpeg",
  },
  {
    title: "Anti-Acne Face Wash",
    description: "Blossom Beauty Anti-Acne Face Wash: Combats acne and prevents breakouts with salicylic acid and tea tree oil.",
    price: 1999,
    image: "/product10.jpeg",
  },
  {
    title: "Facial Cleanser",
    description: "Blossom Beauty Brightening Facial Cleanser:  Fades imperfections, revealing brighter, more even-toned skin.",
    price: 1999,
    image: "/image12.jpeg",
  }
];



export default function Body() {
  return (
    <>
    <div className="md:w-[100%] lg:w-[85%] lg:center sm:w-[100%]  sm:border-0 lg:border-2 lg:center  lg:p-2  border-slate-900 ml-28 mr-28 mt-28 hidden md:block p-5 ">
    <h1 className=" text-xl lg:text-5xl text-center font-bold mt-20 font-serif  bg-white">Our Products</h1>
    
    <div id="product" className="flex flex-wrap justify-center mt-8 mb-9 ml-44"></div>
      
      <div className=" lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 sm:w-[95%]  ">
        {menu.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 shadow-2xl hover:shadow-lg transition-shadow duration-300 bg-white "
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="lg:w-full sm:w-screen lg:h-[200px] sm:h-[150px]  object-cover rounded-md"
            />
            <div className="mt-5">
              <p className="text-lg font-bold ">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-md font-semibold mt-2">
                Price: {item.price} PKR
              </p>
              
            </div>
          </div>
        ))}

    
      
      
    </div>
    </div>




    <div
  className="w-full lg:w-[85%] mx-auto mt-12 lg:mt-28 px-4 sm:px-8 lg:hidden border-slate-900 border-2 "
  
>
  <h1 className="text-2xl lg:text-5xl text-center font-bold mt-8 lg:mt-20 font-serif bg-white">
    Our Products
  </h1>

  <div id="product" className="flex flex-wrap justify-center mt-8 mb-12"></div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
    {menu.map((item, index) => (
      <div
        key={index}
        className="border rounded-lg p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
          className="w-full h-[200px] object-cover rounded-md"
        />
        <div className="mt-4">
          <p className="text-lg font-bold">{item.title}</p>
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          <p className="text-md font-semibold mt-3">
            Price: {item.price} PKR
          </p>
        </div>
      </div>
    ))}
  </div>
</div>








   
    </>

  );
}


