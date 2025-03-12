"use client";

import { Shifts, Year } from "@/types/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const HandleSelects = () => {
  const searchParams = useSearchParams();

  const [year, setYear] = useState<Year | null>(null);
  const [shifts, setShifts] = useState<Shifts | null>(null);

  const handleChangeSelect = (value: string) => {
    if (value === "1º") {
      setYear(Year["1º"]);
    }
    if (value === "2º") {
      setYear(Year["2º"]);
    }
    if (value === "0") {
      setShifts(Shifts.Matutino);
    }
    if (value === "1") {
      setShifts(Shifts.Vespertino);
    }
  };

  useEffect(() => {
    const yearParam = searchParams.get("year");
    const shiftsParam = searchParams.get("shifts");
    if (yearParam && shiftsParam) {
      if (yearParam === "0") {
        setYear(Year["1º"]);
      }
      if (yearParam === "1") {
        setYear(Year["2º"]);
      }
      if (shiftsParam === "0") {
        setShifts(Shifts.Matutino);
      }
      if (shiftsParam === "1") {
        setShifts(Shifts.Vespertino);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex gap-2 p-2">
      <Select
        value={year === Year["1º"] ? "1º" : year === Year["2º"] ? "2º" : ""}
        onValueChange={handleChangeSelect}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione o ano" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ano</SelectLabel>
            <SelectItem value="1º">1º ano</SelectItem>
            <SelectItem value="2º">2º ano</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={
          shifts === Shifts.Matutino
            ? "0"
            : shifts === Shifts.Vespertino
            ? "1"
            : ""
        }
        onValueChange={handleChangeSelect}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione o turno" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Turno</SelectLabel>
            <SelectItem value="0">Matutino</SelectItem>
            <SelectItem value="1">Vespertino</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button asChild className="print:hidden">
        <Link href={`/dashboard?year=${year}&shifts=${shifts}`}>Atualizar</Link>
      </Button>
    </div>
  );
};

export default HandleSelects;
