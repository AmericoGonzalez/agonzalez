import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";



    const Footer = () => {
        return (
          <footer className="fixed bottom-0 left-0 w-full bg-gray-100 py-8 mt-6">
            <div className="flex justify-center space-x-4 p-3 mb-2">
              <p>This website:</p>
              <FaReact size={24} title="React" />
              <TbBrandNextjs size={24} title="Nextjs" />
              <SiTypescript size={23} />
              <SiTailwindcss size={24} title="Tailwind CSS" />
              <SiPrisma size={24} title="Prisma" />
              <SiSqlite size={23} />
              <SiVercel size={24} title="Vercel" />
            </div>
          </footer>
        );
      };
      

export default Footer;