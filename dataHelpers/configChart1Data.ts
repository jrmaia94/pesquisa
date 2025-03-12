"use server";

import { ChartData1, DataForChart1 } from "@/types/data";

export const getDataForChart1 = async ({
  data,
  year,
  shifts,
}: DataForChart1) => {
  const materialTypes: string[] = [];
  const materialData: string[][] = [];

  data.forEach((e) => {
    if (e.year == year && e.shifts == shifts) {
      materialData.push(e.one);
    }
  });

  data.forEach((item) => {
    if (item.year == year && item.shifts == shifts) {
      item.one.forEach((i) => {
        if (i.trim().length > 0) {
          materialTypes.push(i.trim());
        }
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

  const chartData: ChartData1[] = await Array.from(new Set(materialTypes)).map(
    (item, index) => {
      const indexColor = index % color.length;
      let count = 0;
      materialData.forEach((e) => {
        e.forEach((material) => {
          if (material.trim().toUpperCase() === item.trim().toUpperCase())
            count++;
        });
      });

      return {
        material: item,
        count,
        fill: color[indexColor],
      };
    }
  );

  chartData.sort((a, b) => b.count - a.count);

  return chartData;
};
