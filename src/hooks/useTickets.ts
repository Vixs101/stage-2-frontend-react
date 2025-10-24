
"use client";

import { useState, useEffect, useCallback } from 'react';
import type { Ticket, TicketStatus } from '@/lib/types';
import { placeholderTickets } from '@/lib/placeholder-data';

const TICKET_STORAGE_KEY = 'ticketyTickets';

export const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedTickets = localStorage.getItem(TICKET_STORAGE_KEY);
      if (storedTickets) {
        setTickets(JSON.parse(storedTickets));
      } else {
        // Initialize with placeholder data if no tickets are in storage
        setTickets(placeholderTickets);
        localStorage.setItem(TICKET_STORAGE_KEY, JSON.stringify(placeholderTickets));
      }
    } catch (error) {
      console.error('Failed to access or parse tickets from localStorage', error);
      setTickets(placeholderTickets);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStorage = (updatedTickets: Ticket[]) => {
    localStorage.setItem(TICKET_STORAGE_KEY, JSON.stringify(updatedTickets));
  };

  const addTicket = useCallback((ticketData: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => {
    setTickets(prevTickets => {
      const newTicket: Ticket = {
        ...ticketData,
        id: `TICK-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const newTickets = [newTicket, ...prevTickets];
      updateStorage(newTickets);
      return newTickets;
    });
  }, []);

  const updateTicket = useCallback((ticketId: string, updates: Partial<Omit<Ticket, 'id' | 'createdAt'>>) => {
    setTickets(prevTickets => {
      const newTickets = prevTickets.map(ticket =>
        ticket.id === ticketId
          ? { ...ticket, ...updates, updatedAt: new Date().toISOString() }
          : ticket
      );
      updateStorage(newTickets);
      return newTickets;
    });
  }, []);

  const deleteTicket = useCallback((ticketId: string) => {
    setTickets(prevTickets => {
      const newTickets = prevTickets.filter(ticket => ticket.id !== ticketId);
      updateStorage(newTickets);
      return newTickets;
    });
  }, []);
  
  const getTicketsByStatus = (status: TicketStatus) => {
    return tickets.filter(ticket => ticket.status === status);
  }

  return { tickets, addTicket, updateTicket, deleteTicket, loading, getTicketsByStatus };
};
