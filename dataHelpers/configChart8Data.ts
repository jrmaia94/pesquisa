"use server";

import { ChartData2, DataForChart1 } from "@/types/data";

export const getDataForChart8 = async ({
  data,
  year,
  shifts,
}: DataForChart1) => {
  const confirmTypes: string[] = ["Sim", "Não"];
  const confirmData: string[] = [];

  data.forEach((item) => {
    if (item.year == year && item.shifts == shifts) {
      if (item.eight) {
        confirmData.push("Sim");
      } else {
        confirmData.push("Não");
      }
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

  return chartData;
};
