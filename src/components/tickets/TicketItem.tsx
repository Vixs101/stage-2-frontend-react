
"use client";

import { useState } from 'react';
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import type { Ticket } from "@/lib/types";
import { DeleteTicketDialog } from './DeleteTicketDialog';
import { formatDistanceToNow } from 'date-fns';

interface TicketItemProps {
    ticket: Ticket;
    onEdit: (ticket: Ticket) => void;
    onDelete: (ticketId: string) => void;
}

export function TicketItem({ ticket, onEdit, onDelete }: TicketItemProps) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleDelete = () => {
        onDelete(ticket.id);
        setIsDeleteDialogOpen(false);
    }
    
    return (
        <>
            <TableRow className='cursor-pointer' onClick={() => onEdit(ticket)}>
                <TableCell >
                    <StatusBadge status={ticket.status} />
                </TableCell>
                <TableCell className="font-medium max-w-36 md:max-w-full">
                    <div className="font-medium truncate">{ticket.title}</div>
                    <div className="text-xs text-muted-foreground truncate max-w-xs">{ticket.description}</div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {formatDistanceToNow(new Date(ticket.updatedAt), { addSuffix: true })}
                </TableCell>
                <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div onClick={(e) => e.stopPropagation()}>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onSelect={(e) => {e.stopPropagation(); onEdit(ticket)}}>
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={(e) => {e.stopPropagation(); setIsDeleteDialogOpen(true)}} className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>
            <DeleteTicketDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={handleDelete}
            />
        </>
    );
}
