
import { Badge } from "@/components/ui/badge";
import type { TicketStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: TicketStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles = {
    open: "bg-green-100 text-green-800 border-green-200 hover:bg-green-100",
    in_progress: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100",
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
