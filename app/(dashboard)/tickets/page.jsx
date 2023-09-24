import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
   title: "Ticket Helpdesk | Tickets",
   description: "Ticketing system for customer support.",
};

export default function Tickets() {
   return (
      <main>
         <nav>
            <div>
               <h2>Tickets</h2>
               <p>
                  <small className="font-semibold">
                     Currently open tickets.
                  </small>
               </p>
            </div>
            <Link
               href="/tickets/create"
               className="ml-auto"
            >
               <button className="btn-primary">
                  New ticket
               </button>
            </Link>
         </nav>

         <Suspense fallback={<Loading />}>
            <TicketList />
         </Suspense>
      </main>
   );
}
