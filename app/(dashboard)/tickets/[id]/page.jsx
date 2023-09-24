import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

export async function generateMetadata({ params }) {
   const supabase = createServerComponentClient({
      cookies,
   });

   const { data: ticket } = await supabase
      .from("tickets")
      .select()
      .eq("id", params.id)
      .single();

   return {
      title: `Ticket Helpdesk | ${
         ticket?.title || "Ticket not found"
      }`,
   };
}

async function getTicket(id) {
   const supabase = createServerComponentClient({
      cookies,
   });

   const { data } = await supabase
      .from("tickets")
      .select()
      .eq("id", id)
      .single();

   if (!data) {
      notFound();
   }

   return data;
}

export default async function TicketDetails({ params }) {
   const ticket = await getTicket(params.id);

   const supabase = createServerComponentClient({
      cookies,
   });

   const { data } = await supabase.auth.getSession();

   return (
      <main>
         <nav>
            <h2>Ticket Details</h2>
            <div className="ml-auto">
               {data.session.user.email ===
                  ticket.user_email && (
                  <DeleteButton id={ticket.id} />
               )}
            </div>
         </nav>
         <div className="card">
            <h3>{ticket.title}</h3>
            <small>
               Created by:{" "}
               <span className="font-semibold">
                  {ticket.user_email}
               </span>
            </small>
            <p>{ticket.body}</p>

            <div className={`pill ${ticket.priority}`}>
               {ticket.priority} priority
            </div>
         </div>
      </main>
   );
}