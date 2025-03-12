"use server";

import { ChartData2, DataForChart1 } from "@/types/data";

export const getDataForChart7 = async ({
  data,
  year,
  shifts,
}: DataForChart1) => {
  const confirmTypes: string[] = [];
  const confirmData: string[] = [];

  data.forEach((item) => {
    if (item.year == year && item.shifts == shifts) {
      item.seven.forEach((e) => {
        if (e.trim().length > 0) {
          confirmTypes.push(e.trim());
        }
      });
    }
  });

  confirmTypes.sort();

  data.forEach((item) => {
    if (item.year == year && item.shifts == shifts) {
      item.seven.forEach((e) => {
        confirmData.push(e.trim());
      });
    }
  });

  const color = [
    "var(--color-chrome)",
    "var(--color-safari)",
    "var(--color-firefox)",
    "var(--color-edge)",
    "var(--color-other)",
    "var(--color-chrome)",
    "var(--color-safari)",
    "var(--color-firefox)",
    "var(--color-edge)",
    "var(--color-other)",
  ];

  const chartData: ChartData2[] = await Array.from(new Set(confirmTypes)).map(
    (item, index) => {
      const indexColor = index % color.length;
      let count = 0;
      confirmData.forEach((e) => {
        if (e === item) {
          count++;
        }
      });

      return { count, label: item, fill: color[indexColor] };
    }
  );

  chartData.sort((a, b) => b.count - a.count);

  return chartData;
};
