"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartData2 } from "@/types/data";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Chart8({ chartData }: { chartData: ChartData2[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>8. Ele(a) usa as redes sociais?</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              width={250}
              dataKey="label"
              hide
              type="category"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <XAxis dataKey="count" type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="count" layout="vertical" radius={5}>
              <LabelList
                dataKey="label"
                position="insideLeft"
                offset={10}
                className="fill-card"
                fontSize={12}
              />
              <LabelList
                dataKey="count"
                position="insideRight"
                offset={10}
                className="fill-card"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
