"use client";

import Checkbox from "@/components/Checkbox";
import Radio from "@/components/Radio";
import Select from "@/components/Select";
import { useState } from "react";

export default function Home() {
  const [linguagem, setLinguagem] = useState<string[]>([]);
  const [termos, setTermos] = useState<string[]>([]);
  const [opcoes, setOpcoes] = useState("");
  const [radio, setRadio] = useState("");

  if (termos.length > 0) {
    console.log("Termos Enviados");
  }

  return (
    <main>
      <article className="inputs">
        <h2>Checkbxo</h2>
        <Checkbox
          options={["JavaScript", "Rust", "Ruby"]}
          value={linguagem}
          setValue={setLinguagem}
          required
        />
      </article>

      <article className="inputs">
        <h2>Termos check</h2>
        <Checkbox
          options={["JavaScript", "Rust", "Ruby"]}
          value={termos}
          setValue={setTermos}
          required
        />
      </article>

      <article className="inputs">
        <h2>Select</h2>
        <Select
          options={["Hoje", "Amanhã", "Depois"]}
          value={opcoes}
          setValue={setOpcoes}
        />
      </article>

      <article className="inputs">
        <h2>Radio</h2>
        <Radio
          options={["Beijo", "Amor", "Carinho"]}
          value={radio}
          setValue={setRadio}
          required
        />
      </article>
    </main>
  );
}
