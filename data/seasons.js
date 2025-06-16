const seasons = [
  {
    key: 0,
    name: "primavera",
    rows: [
      {
        key: 0,
        row: "Plantar bulbos y rizomas, de floración en otoño",
        data: [{ style: 2, length: 1 }, "", ""],
      },
      {
        key: 1,
        row: "Sembrar césped",
        data: [{ style: 2, length: 3 }, "", ""],
      },
      {
        key: 2,
        row: "Abonar todas las plantas",
        data: [{ style: 2, length: 1 }, "", ""],
      },
      {
        key: 3,
        row: "Abonar y cortar césped. Nivelar y tapar huecos",
        data: [{ style: 1, length: 3 }, "", ""],
      },
      {
        key: 4,
        row: "Sembrar plantas anuales de floración estival y otoñal",
        data: ["", { style: 2, length: 1 }, ""],
      },
      {
        key: 5,
        row: "Plantar geranios (bordillos y coberturas)",
        data: ["", { style: 2, length: 1 }, ""],
      },
      {
        key: 6,
        row: "Plantar bulbos y tubérculos",
        data: ["", { style: 2, length: 1 }, ""],
      },
    ],
    columns: [
      {
        key: 0,
        column: "Abril",
      },
      {
        key: 1,
        column: "Mayo",
      },
      {
        key: 2,
        column: "Junio",
      },
    ],
  },
  {
    key: 1,
    name: "verano",
    rows: [
      {
        key: 0,
        row: "Plantar bulbos de floración precoz",
        data: [{ style: 2, length: 1 }, "", ""],
      },
      {
        key: 1,
        row: "Sembrar plantas bienales",
        data: [{ style: 2, length: 1 }, "", ""],
      },
      {
        key: 2,
        row: "Plantar bulbos de floración otoñal",
        data: [{ style: 2, length: 3 }, "", ""],
      },
      {
        key: 3,
        row: "Preparar suelo para nuevas plantaciones",
        data: [{ style: 2, length: 3 }, "", ""],
      },
      {
        key: 4,
        row: "Sembrar plantas anuales",
        data: ["", { style: 2, length: 2 }, ""],
      },
      {
        key: 5,
        row: "Sembrar plantas de floración estival y otoñal",
        data: ["", { style: 2, length: 1 }, ""],
      },
      {
        key: 6,
        row: "Plantar bulbos y tubérculos",
        data: ["", { style: 2, length: 1 }, ""],
      },
      {
        key: 7,
        row: "Plantar geranios (bordillos y cobertura)",
        data: ["", { style: 2, length: 1 }, ""],
      },
      {
        key: 8,
        row: "Repoblar césped, abonar y tapar huecos",
        data: ["", { style: 1, length: 2 }, ""],
      },
      {
        key: 9,
        row: "Abonar geranios",
        data: ["", "", { style: 2, length: 1 }],
      },
      {
        key: 10,
        row: "Abonar plantas tapizantes",
        data: ["", "", { style: 2, length: 1 }],
      },
    ],
    columns: [
      {
        key: 0,
        column: "Julio",
      },
      {
        key: 1,
        column: "Agosto",
      },
      {
        key: 2,
        column: "Septiembre",
      },
    ],
  },
  {
    key: 2,
    name: "otono",
    rows: [
      {
        key: 0,
        row: "Plantar bulbos de floración primaveral",
        data: [{ style: 2, length: 2 }, "", ""],
      },
      {
        key: 1,
        row: "Plantar bulbos de floración temprana",
        data: [{ style: 1, length: 2 }, "", ""],
      },
      {
        key: 2,
        row: "Acondicionar césped, rellenar huecos, zonas bajas",
        data: [{ style: 2, length: 2 }, "", ""],
      },
      {
        key: 3,
        row: "Sembrar plantas perennes",
        data: [{ style: 1, length: 1 }, "", ""],
      },
      {
        key: 4,
        row: "Labrar y abonar suelos para plantaciones nuevas",
        data: ["", { style: 1, length: 2 }, ""],
      },
      {
        key: 5,
        row: "Terminar de sembrar bulbos de floración temprana",
        data: ["", "", { style: 2, length: 1 }],
      },
    ],
    columns: [
      {
        key: 0,
        column: "Octubre",
      },
      {
        key: 1,
        column: "Noviembre",
      },
      {
        key: 2,
        column: "Diciembre",
      },
    ],
  },
  {
    key: 3,
    name: "invierno",
    rows: [
      {
        key: 0,
        row: "Plantar árboles y arbustos caducifolios",
        data: [{ style: 1, length: 3 }, "", ""],
      },
      {
        key: 1,
        row: "Plantar rosales",
        data: [{ style: 1, length: 3 }, "", ""],
      },
      {
        key: 2,
        row: "Acondicionar suelo, labrando para futuras siembras",
        data: [{ style: 1, length: 3 }, "", ""],
      },
      {
        key: 3,
        row: "Sembrar trepadoras anuales en invernadero",
        data: [{ style: 1, length: 2 }, "", ""],
      },
      {
        key: 4,
        row: "Plantar bulbos",
        data: ["", { style: 1, length: 1 }, ""],
      },
      {
        key: 5,
        row: "Dividir y replantar plantas perennes",
        data: ["", "", { style: 2, length: 1 }],
      },
      {
        key: 6,
        row: "Sembrar plantas anuales",
        data: ["", "", { style: 2, length: 1 }],
      },
      {
        key: 7,
        row: "Sembrar césped",
        data: ["", "", { style: 1, length: 1 }],
      },
    ],
    columns: [
      {
        key: 0,
        column: "Enero",
      },
      {
        key: 1,
        column: "Febrero",
      },
      {
        key: 2,
        column: "Marzo",
      },
    ],
  },
];

export default seasons;
