import Image from "next/image";
import Link from "next/link";
import mypic1 from "/public/mypic01.png";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";


export default async function HomePage() {



  return (
    <div className="text-center">
     
      
      <div className="flex justify-center space-x-6 mb-16 mt-2 p-6 md:shadow-md">
        <Link href="/">
          <span className="text-xl cursor-pointer">Home</span>
        </Link>
        <Link href="/resume/my-resume">
          <span className="text-xl cursor-pointer">Resume</span>
        </Link>
        <Link href="/projects/my-projects">
          <span className="text-xl cursor-pointer">Projects</span>
        </Link>
        <Link href="/aboutme/about-me">
          <span className="text-xl cursor-pointer">About</span>
        </Link>
      </div>

     
      <div className="flex items-center justify-center space-x-6">
        
        <div className="rounded-full overflow-hidden w-48 h-48 mr-5 bg-green-300 shadow-xl outline-solid">
          <Image
            src={mypic1}
            layout="intrinsic"
            alt="my picture 1"
            width={300}
            height={400}
            
          /> 
        </div>
        
          <div className="flex flex-col items-center justify-center bg-green-300 p-8 rounded-xl shadow-xl ">
          <div><p className="text-l">Hello I am</p></div>
          <div><p className="text-xl">A. Gonzalez</p></div>
          <div><p className="text-l">Web Developer</p></div>
        
          </div>  
      
        </div>

        <Link href="/login/log-in">
          <Button className="mt-10">Log in</Button>
        </Link> 
        <br/>
        <Link href="/contact/contact-me">
          <Button className="mt-10 bg-green-300 text-sky-600 shadow-xl">Send me an email</Button>
        </Link> 
      
        <Footer />    

        
        
        
    </div>
     
  );
}




