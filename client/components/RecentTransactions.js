import { ActionIcon } from "@mantine/core";
import {
  HiOutlineScale,
  HiTrendingUp,
  HiOutlineCash,
  HiOutlineChartBar,
} from "react-icons/hi";

export function RecentTransaction() {
  return (
    <div className="space-y-8">
      <div className="px-2">
        <h2 className="font-semibold text-lg text-slate-700">
          Recent Transactions
        </h2>
        <h4 className="font-medium text-sm text-slate-500">
          You made 250 transactions this month
        </h4>
      </div>
      <div className="flex items-center">
        <ActionIcon className="h-9 w-9">
          <HiOutlineCash size="1.125rem" />
        </ActionIcon>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <ActionIcon className="h-9 w-9">
          <HiOutlineChartBar size="1.125rem" />
        </ActionIcon>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <ActionIcon className="h-9 w-9">
          <HiTrendingUp size="1.125rem" />
        </ActionIcon>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <ActionIcon>
          <HiOutlineCash size="1.125rem" />
        </ActionIcon>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <ActionIcon className="h-9 w-9">
          <HiOutlineScale size="1.125rem" />
        </ActionIcon>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
    </div>
  );
}
