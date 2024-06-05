import { format } from "date-fns";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import CustomTooltip from "./custom-tooltip";

export interface ILineVariantProps {
  data: {
    date: string;
    income: number;
    expense: number;
  }[];
}

export default function LineVariant({ data }: ILineVariantProps) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={"date"}
          tickFormatter={(value) => format(value, "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          dot={false}
          dataKey={"income"}
          strokeWidth={2}
          stroke="#3b82f6"
          className="drop-shadow-sm"
        />
        <Line
          dot={false}
          dataKey={"expense"}
          strokeWidth={2}
          stroke="#f43f5e"
          className="drop-shadow-sm"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
