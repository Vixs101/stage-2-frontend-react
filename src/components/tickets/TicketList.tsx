
import { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { TicketItem } from "./TicketItem";
import type { Ticket } from "@/lib/types";
import { Skeleton } from "../ui/skeleton";
import { ScrollArea } from "../ui/scroll-area";

interface TicketListProps {
    tickets: Ticket[];
    onEdit: (ticket: Ticket) => void;
    onDelete: (ticketId: string) => void;
    loading: boolean;
}

export function TicketList({ tickets, onEdit, onDelete, loading }: TicketListProps) {

    if (loading) {
        return (
            <div className="p-4 space-y-2">
                {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
            </div>
        )
    }

    if (tickets.length === 0) {
        return (
            <div className="flex items-center justify-center h-full text-center text-muted-foreground p-8">
                <div>
                    <h3 className="text-xl font-semibold">No tickets found</h3>
                    <p>There are no tickets in this category.</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <ScrollArea className="h-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Status</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden md:table-cell">Created</TableHead>
                            <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tickets.map((ticket) => (
                            <TicketItem key={ticket.id} ticket={ticket} onEdit={onEdit} onDelete={onDelete} />
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </>
    );
}
