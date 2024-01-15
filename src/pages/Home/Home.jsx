import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home() {
  const [medicationInfo, setMedicationInfo] = useState(null);
  const [medicationName, setMedicationName] = useState("");

  const searchMedication = async () => {
    try {
      const response = await axios.get(
        `https://api.fda.gov/drug/label.json?search=${medicationName}&limit=1`
      );

      // Se Deus quiser a api vai funcionar finalmente
      setMedicationInfo(response.data.results[0]);
    } catch (error) {
      console.error("Erro ao buscar informações do medicamento", error);
    }
  };

  return (
    <div className="Home">
      <h1>Seja bem-vindo a Safe Dose</h1>
      
      <img src="/ImagemRemedio.jpg" alt="Imagem de Remédio" />

      <p>A Safe Dose Visa dificultar o acesso aos opioides em hospitais. As tecnologias
de identificação de produtos, pacientes e profissionais que os manuseiam,
possibilitarão a redução de roubos e fraudes. Desta forma, protegeremos
pacientes e não pacientes, melhorando também, a gestão de medicações nos
hospitais.</p>

      <p>
        Se deseja saber quem somos, visite a aba
        <Link to="/sobre" className="link-sobre">
          Sobre
        </Link>
      </p>
      <p>
        Se deseja realizar o login em nosso site, visite a aba
        <Link to="/login" className="link-sobre">
          Login
        </Link>
      </p>

      <div>
        <h2>Buscar Informações de Medicamento</h2>
        <input
          type="text"
          placeholder="Nome do Medicamento"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
        />
        <button onClick={searchMedication}>Buscar</button>

        {medicationInfo && (
          <div>
            <h3>Informações sobre {medicationInfo.openfda.brand_name[0]}</h3>
            <p>Substância Ativa: {medicationInfo.active_ingredient[0]}</p>
            <p>Fabricante: {medicationInfo.openfda.manufacturer_name[0]}</p>
          </div>
        )}
      </div>
    </div>
  );
}