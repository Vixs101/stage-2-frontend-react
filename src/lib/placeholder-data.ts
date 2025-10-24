
import type { Ticket } from './types';

export const placeholderTickets: Ticket[] = [
  {
    id: 'TICK-1',
    title: 'Login button not working on mobile',
    description: 'The login button on the homepage is unresponsive on iOS 17. It works on desktop and Android devices.',
    status: 'open',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'TICK-2',
    title: 'API endpoint for user data is slow',
    description: 'The /api/users endpoint is experiencing high latency, sometimes taking over 2 seconds to respond.',
    status: 'in_progress',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'TICK-3',
    title: 'Update documentation for new feature',
    description: 'The documentation for the new "Reporting" module needs to be written and published before the end of the sprint.',
    status: 'in_progress',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'TICK-4',
    title: 'User profile picture upload fails',
    description: 'When a user tries to upload a profile picture larger than 2MB, the upload fails without a proper error message.',
    status: 'closed',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'TICK-5',
    title: 'Dashboard statistics are not updating',
    description: 'The main dashboard stats cards are not reflecting the latest ticket statuses. It seems to be a caching issue.',
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
