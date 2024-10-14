import PersonalCard from "@/components/PersonalCard/PersonalCard";
import { Kanit } from "next/font/google";
import { Abel } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

const abel = Abel({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <div>
      <div className="m-12">
        <h1 className={`font-kanit text-4xl`}>Bienvenidos!</h1>
        <p className={`font-abel text-2xl`}>
          Hola a todos! Os doy la bienvenida a mi pagina web personal donde
          podréis ver mi información profesional y los proyectos web que he
          desarrollado.
        </p>
        <p className={`font-kanit text-2xl`}>
          
        </p>
      </div>
      <PersonalCard />
    </div>
  );
}
``;
