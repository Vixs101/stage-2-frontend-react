
import { Badge } from "@/components/ui/badge";
import type { TicketStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: TicketStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles = {
    open: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100",
    in_progress: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100",
    closed: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-100",
  };

  const statusText = {
    open: "Open",
    in_progress: "In Progress",
    closed: "Closed",
  };

  return (
    <Badge variant="outline" className={cn("capitalize", statusStyles[status])}>
      {statusText[status]}
    </Badge>
  );
}
