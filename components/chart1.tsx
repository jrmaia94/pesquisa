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

export function Chart1({
  chartData,
}: {
  chartData: { material: string; count: number }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          1. Quais materiais escritos os(as) estudantes têm acesso em casa?
        </CardTitle>
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
              width={200}
              dataKey="material"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-red-500"
              tickFormatter={(value) => value}
            />
            <XAxis dataKey="count" type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="vertical" radius={5}>
              <LabelList
                dataKey="count"
                position="insideRight"
                offset={5}
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
