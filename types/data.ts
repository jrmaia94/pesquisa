export interface ChartData1 {
  material: string;
  count: number;
  fill: string;
}

export interface ChartData2 {
  label: string;
  count: number;
  fill: string;
}

export interface MaterialType {
  value: string;
}

export interface StudentData {
  date: string;
  name: string;
  year: Year;
  shifts: Shifts;
  one: string[];
  two: boolean;
  three: string;
  four: string[];
  five: string[];
  six: string[];
  seven: string[];
  eight: boolean;
  eight_one: string;
  nine: string[];
  ten: string;
}

export interface DataForChart1 {
  data: StudentData[];
  year: Year;
  shifts: Shifts;
}

export enum Year {
  "1º",
  "2º",
}

export enum Shifts {
  "Matutino",
  "Vespertino",
}
