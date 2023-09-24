import Link from "next/link";
import Logo from "./dojo-logo.png";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
   return (
      <nav className="flex justify-between">
         <div className="flex items-center">
            <div>
               <Image
                  src={Logo}
                  width={70}
                  quality={100}
                  alt="Logo"
               />
               <h1>Helpdesk</h1>
            </div>
            <div className="flex gap-5 ml-10">
               <Link href="/">Dashboard</Link>
               <Link href="/tickets">Tickets</Link>
            </div>
         </div>

         {user && (
            <div className="flex items-center gap-5">
               <span>Hello, {user.email}!</span>
               <LogoutButton />
            </div>
         )}
      </nav>
   );
}
