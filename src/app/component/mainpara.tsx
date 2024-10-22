const styles = {
    p: {
      marginLeft: '3cm', 
      marginTop:'1cm',
    
      
    },
    h1: {
        marginLeft: '3cm', 
        marginTop:'-16cm',
        fontSize:"1cm",
      
        
      },
      
  };
  
export default function Mainpara(){
    return(
        <> 

  

         <div className=" sm:text-9xl  mx-0 px-1  lg:text-2xl md:text-base ml-96 mt-0 text-center   font-serif mr-32 p-7 hidden  md:block"> 
            <h1  style={styles.h1} className="font-bold text-black dark:text-slate-400 mt-2 text-2xl ">Discover the True Essence of Beauty with Blossom</h1>
            <p  className="text-slate-500 dark:text-slate-400 mt-2 text-2xl
            " style={styles.p}>Blossom Beauty is all about embracing your natural glow with the help of nature’s finest ingredients. We create herbal beauty products that are gentle, effective, and designed to bring out the best in your skin and hair. Whether you're looking for skincare, haircare, or a little everyday luxury, we’ve got you covered. Our mission is simple: to help you feel confident, beautiful, and truly yourself. At Blossom Beauty, we believe in the magic of nature, and we’re here to share it with you—so you can let your beauty blossom naturally.</p>
        </div>


{/* for mobile */}
        <div className="lg:hidden mb-28 mt-8 text-xl p-3 text-center "> 
        
            <p  className="" >Blossom Beauty is all about embracing your natural glow with the help of nature’s finest ingredients. We create herbal beauty products that are gentle, effective, and designed to bring out the best in your skin and hair. Whether you're looking for skincare, haircare, or a little everyday luxury, we’ve got you covered. Our mission is simple: to help you feel confident, beautiful, and truly yourself. At Blossom Beauty, we believe in the magic of nature, and we’re here to share it with you—so you can let your beauty blossom naturally.</p>
        </div>
         </>
       

        
    )
}
