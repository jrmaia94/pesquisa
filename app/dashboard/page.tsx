import { Chart1 } from "@/components/chart1";
import { Chart10 } from "@/components/chart10";
import { Chart2 } from "@/components/chart2";
import { Chart3 } from "@/components/chart3";
import { Chart4 } from "@/components/chart4";
import { Chart5 } from "@/components/chart5";
import { Chart6 } from "@/components/chart6";
import { Chart7 } from "@/components/chart7";
import { Chart8 } from "@/components/chart8";
import { Chart8_1 } from "@/components/chart8_1";
import { Chart9 } from "@/components/chart9";
import { getDataForChart10 } from "@/dataHelpers/configChart10Data";
import { getDataForChart1 } from "@/dataHelpers/configChart1Data";
import { getDataForChart2 } from "@/dataHelpers/configChart2Data";
import { getDataForChart3 } from "@/dataHelpers/configChart3Data";
import { getDataForChart4 } from "@/dataHelpers/configChart4Data";
import { getDataForChart5 } from "@/dataHelpers/configChart5Data";
import { getDataForChart6 } from "@/dataHelpers/configChart6Data";
import { getDataForChart7 } from "@/dataHelpers/configChart7Data";
import { getDataForChart8_1 } from "@/dataHelpers/configChart8_1Data";
import { getDataForChart8 } from "@/dataHelpers/configChart8Data";
import { getDataForChart9 } from "@/dataHelpers/configChart9Data";
import { getData } from "@/dataHelpers/configData";
import { ChartData2, Shifts, Year } from "@/types/data";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ year: Year; shifts: Shifts }>;
}) {
  const { year, shifts } = await searchParams;
  const data = await getData();
  const dataForChart1: { material: string; count: number }[] =
    await getDataForChart1({ data, year, shifts });

  const dataForChart2: ChartData2[] = await getDataForChart2({
    data,
    year,
    shifts,
  });

  const dataForChart3: ChartData2[] = await getDataForChart3({
    data,
    year,
    shifts,
  });

  const dataForChart4: ChartData2[] = await getDataForChart4({
    data,
    year,
    shifts,
  });

  const dataForChart5: ChartData2[] = await getDataForChart5({
    data,
    year,
    shifts,
  });

  const dataForChart6: ChartData2[] = await getDataForChart6({
    data,
    year,
    shifts,
  });

  const dataForChart7: ChartData2[] = await getDataForChart7({
    data,
    year,
    shifts,
  });

  const dataForChart8: ChartData2[] = await getDataForChart8({
    data,
    year,
    shifts,
  });

  const dataForChart8_1: ChartData2[] = await getDataForChart8_1({
    data,
    year,
    shifts,
  });

  const dataForChart9: ChartData2[] = await getDataForChart9({
    data,
    year,
    shifts,
  });

  const dataForChart10: ChartData2[] = await getDataForChart10({
    data,
    year,
    shifts,
  });

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-2 p-2 w-[70%]">
        <Chart1 chartData={dataForChart1} />
        <div className="flex gap-2">
          <div className="w-80">
            <Chart2 chartData={dataForChart2} />
          </div>
          <div className="w-full">
            <Chart3 chartData={dataForChart3} />
          </div>
        </div>
        <Chart4 chartData={dataForChart4} />
        <Chart5 chartData={dataForChart5} />
        <Chart6 chartData={dataForChart6} />
        <Chart7 chartData={dataForChart7} />
        <div className="flex gap-2">
          <div className="w-80">
            <Chart8 chartData={dataForChart8} />
          </div>
          <div className="w-full">
            <Chart8_1 chartData={dataForChart8_1} />
          </div>
        </div>
        <Chart9 chartData={dataForChart9} />
        <Chart10 chartData={dataForChart10} />
      </div>
    </div>
  );
}
