import Accordion from "@/components/Accordion";

const jardinText = {
  title: "Haz Tu Jardín",
  subTitle:
    "Sigue nuestro calendario de preparaciones, sembrado, abonado y mantenimiento para sacarle el mejor partido a tu jardín durante todo el año.",
  selectLabel: "Selecciona una estación:",
  selectOptions: [
    {
      key: 0,
      value: "primavera",
      text: "Primavera",
    },
    {
      key: 1,
      value: "verano",
      text: "Verano",
    },
    {
      key: 2,
      value: "otono",
      text: "Otoño",
    },
    {
      key: 3,
      value: "invierno",
      text: "Invierno",
    },
  ],
  legendValues: ["Huerto & Jardin", "Sustrato"],
  accordions: [
    {
      title: "Consideraciones",
      content: [
        "Cuando planifiques tu jardín ten en cuenta la compatibilidad de las plantas, para evitar la competecia por nutrientes entre las ellas.",
        "Así obtendrás un crecimiento armónico de todas ellas y crear un jardín más sostenible.",
      ],
    },
    {
      title: "Cultivo en maceta",
      content: [
        "Elige una maceta acorde al tamaño de la planta, ya que tendrá una altura y grosor considerables. De lo contrario, sus frutos serán más pequeños que los de cultivo en suelo.",
        "Para la siembra te recomendamos colocar:",
      ],
      list: [
        "Grava o piedras para el drenaje.",
        "Rellenar la maceta con Sustrato Universal",
        "Colocar el cepellón de la planta y terminar de llenar con abono Huerto & Jardín.",
      ],
    },
    {
      title: "Trasplantar en maceta",
      content: [
        "Para trasplantar elije una maceta más grande que la actual.",
        "Coloca una capa de drenaje de 1 a 2 cm en el fondo seguido de otra capa de sustrato.",
        "Saca la planta cuidadosamente de la maceta y colócala el cepellón en el centro de la nueva maceta, rellena alrededor del cepellón con sustrato, presionando ligeramente.",
      ],
    },
  ],
};

export default jardinText;
