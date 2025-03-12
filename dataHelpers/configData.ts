"use server";

import { Shifts, StudentData, Year } from "@/types/data";
import json from "../data/csvjson.json";

export const getData = async () => {
  const data: StudentData[] = await json.map((item) => {
    return {
      date: item["Carimbo de data/hora"],
      name: item["Nome do aluno:"],
      year: item["Ano:"] === "1º" ? Year["1º"] : Year["2º"],
      shifts: item.Turno === "Matutino" ? Shifts.Matutino : Shifts.Vespertino,
      one: item[
        "1. Quais materiais escritos os(as) estudantes têm acesso em casa?"
      ]
        .trim()
        .split(",")
        .map((item) => item.trim()),
      two:
        item[
          "2. É realizada algum tipo de leitura em casa com os(as) estudantes?"
        ] === "Sim"
          ? true
          : false,
      three: item["3. Na resposta anterior caso tenha marcado sim, qual/(is)?"],
      four: item[
        "4. Com quem o(a) estudante passa a maior parte do tempo e que poderia auxiliar nas atividades para casa?"
      ].split(","),
      five: item["5. Com quem a criança prefere brincar?"].split(","),
      six: item["6. Quais são os brinquedos preferidos da criança?"].split(","),
      seven: item["7. Quais espaços/eventos ele(a) frequenta?"].split(","),
      eight: item["8. Ele(a) usa as redes sociais?"] === "Sim" ? true : false,
      eight_one: item["Se sim, por quanto tempo diariamente?"],
      nine: item["9.  O que ele(a) gosta de fazer em casa?"].split(","),
      ten: item[
        "10. Do que ele(a) gosta de conversar (assuntos que demonstram interesse e curiosidade?"
      ],
    };
  });

  return data;
};
