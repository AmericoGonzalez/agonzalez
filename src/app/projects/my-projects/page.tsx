import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Footer from "@/components/ui/footer";


export default function ProyectsPage() {

  const userId = cookies().get("user_id")?.value;
  

  if (!userId) {
   redirect("/login/log-in");
  }

  return (
    <div> 
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
          <span className="text-xl cursor-pointer">About me</span>
        </Link>
        </div>

      <h3>These are my Projects</h3>

      <Footer /> 
   </div>
   
  );
}