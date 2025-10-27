
"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTickets } from "@/hooks/useTickets";
import { Ticket, TicketStatus } from "@/lib/types";

interface TicketDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: Ticket | null;
}

export function TicketDetailsModal({ isOpen, onClose, ticket }: TicketDetailsModalProps) {
  const { updateTicket } = useTickets();

  if (!ticket) {
    return null;
  }

  const handleStatusChange = (status: TicketStatus) => {
    if (ticket) {
      updateTicket(ticket.id, { status });
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{ticket.title}</AlertDialogTitle>
          <AlertDialogDescription className="text-black">
            {ticket.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4">
          <Select value={ticket.status} onValueChange={handleStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Set status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
