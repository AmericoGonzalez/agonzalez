import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FooterTwo from "@/components/ui/footer2";
import resumepage1 from "/public/resumepage1.png";
import resumepage2 from "/public/resumepage2.png";
import Image from "next/image";

export default function ResumePage() {
  
  const userId = cookies().get("user_id")?.value;
  

  if (!userId) {
   redirect("/login/log-in");
  }

  return (
    <div> 
      
      <div className="flex justify-center space-x-6 mb-6 mt-2 p-6 md:shadow-md">
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
          <span className="text-xl cursor-pointer">About me</span>
        </Link>
      </div>

      
      

      <div className="overflow-hidden mr-5 ml-5 md-6 mb-10 p-10">
        <Image
          src={resumepage1}
          layout="intrinsic"
          alt="resume page1"
          width={700}
          height={900}
          
         
        /> 
        

      <Image
        src={resumepage2}
        layout="intrinsic"
        alt="resume page1"
        width={700}
        height={900}
        
      /> 
      </div>


          <div> <FooterTwo /> </div>
         
    
     </div>  
     );
}
