
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { TicketList } from "./TicketList";
import { TicketForm } from "./TicketForm";
import type { Ticket } from '@/lib/types';
import { useTickets } from '@/hooks/useTickets';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TicketActions() {
    const { tickets, addTicket, updateTicket, deleteTicket, loading } = useTickets();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

    const handleAddTicket = () => {
        setSelectedTicket(null);
        setIsFormOpen(true);
    };

    const handleEditTicket = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setIsFormOpen(true);
    };

    const handleFormSubmit = (data: any) => {
        if (selectedTicket) {
            updateTicket(selectedTicket.id, data);
        } else {
            addTicket(data);
        }
        setIsFormOpen(false);
    };

    const openTickets = tickets.filter(t => t.status === 'open');
    const inProgressTickets = tickets.filter(t => t.status === 'in_progress');
    const closedTickets = tickets.filter(t => t.status === 'closed');

    return (
        <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-end mb-4">
                <Button size="sm" className="h-8 gap-1" onClick={handleAddTicket}>
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        New Ticket
                    </span>
                </Button>
            </div>
            
            <Tabs defaultValue="all" className="flex-1 flex flex-col">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="open">Open</TabsTrigger>
                    <TabsTrigger value="in_progress">In Progress</TabsTrigger>
                    <TabsTrigger value="closed">Closed</TabsTrigger>
                </TabsList>
                <div className="flex-1 rounded-lg border border-dashed shadow-sm mt-4 overflow-hidden">
                    <TabsContent value="all" className="m-0 h-full">
                        <TicketList tickets={tickets} onEdit={handleEditTicket} onDelete={deleteTicket} loading={loading} />
                    </TabsContent>
                    <TabsContent value="open" className="m-0 h-full">
                        <TicketList tickets={openTickets} onEdit={handleEditTicket} onDelete={deleteTicket} loading={loading} />
                    </TabsContent>
                    <TabsContent value="in_progress" className="m-0 h-full">
                        <TicketList tickets={inProgressTickets} onEdit={handleEditTicket} onDelete={deleteTicket} loading={loading} />
                    </TabsContent>
                    <TabsContent value="closed" className="m-0 h-full">
                        <TicketList tickets={closedTickets} onEdit={handleEditTicket} onDelete={deleteTicket} loading={loading} />
                    </TabsContent>
                </div>
            </Tabs>

            <TicketForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleFormSubmit}
                ticket={selectedTicket}
            />
        </div>
    );
}
