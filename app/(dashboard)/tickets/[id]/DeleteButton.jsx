"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(false);

   const handleClick = async () => {
      setIsLoading(true);

      const response = await fetch(
         "http://localhost:3000/api/tickets/" + id,
         {
            method: "DELETE",
         }
      );

      const json = await response.json();

      if (json.error) {
         console.log(error);
         setIsLoading(false);
      }

      if (!json.error) {
         router.refresh();
         router.push("/tickets");
      }
   };

   return (
      <button
         className="btn-primary"
         onClick={handleClick}
         disabled={isLoading}
      >
         {isLoading && (
            <>
               <TiDelete className="text-lg animate-spin" />{" "}
               Deleting...
            </>
         )}

         {!isLoading && (
            <>
               <TiDelete className="text-lg" /> Delete
               Ticket
            </>
         )}
      </button>
   );
}
