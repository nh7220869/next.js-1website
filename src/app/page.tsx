
import Mainpara from "./component/mainpara";
import {Video } from "./component/video";
import Body from "./component/product";
import About from "./component/about";
import Contact from "./component/contact";





export default function Home() {
  return(
    <div>
      <h1 className=" text-3xl font-bold mt-16 text-center lg:hidden  p-2 " >Discover the True Essence of Beauty with Blossom</h1>
     <Video/><Mainpara/>
      
    <Body/>
    <About/>
    <Contact/>
     
      
     
    </div>
    
  )
  
}
