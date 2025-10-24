
import { TicketActions } from "@/components/tickets/TicketActions";

export default function TicketsPage() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl font-headline">Tickets</h1>
            </div>
            <TicketActions />
        </>
    );
}
