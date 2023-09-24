import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Link from "next/link";

export default async function AuthLayout({ children }) {
   const supabase = createServerComponentClient({
      cookies,
   });
   const { data } = await supabase.auth.getSession();

   if (data.session) {
      redirect("/");
   }

   return (
      <>
         <nav className="flex justify-between">
            <h1>Helpdesk</h1>
            <div className="flex gap-5">
               <Link href="/signup">Signup</Link>
               <Link href="/login">Login</Link>
            </div>
         </nav>
         {children}
      </>
   );
}
