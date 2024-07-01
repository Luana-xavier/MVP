import { useState } from "react";

function Gestao() {
  const [disponibilidade, setDisponibilidade] = useState([]);
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [disponivel, setDisponivel] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const novaDisponibilidade = { data, hora, disponivel };
    setDisponibilidade((prevDisponibilidade) => [
      ...prevDisponibilidade,
      novaDisponibilidade,
    ]);

    console.log(
      `Notificação: A disponibilidade para a data ${data} no horário ${hora} foi alterada para ${disponivel ? "Disponível" : "Indisponível"}.`,
    );
  };

  return (
    <div className="App">
      <h1>Gestão de Disponibilidade</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div>
          <label>Horário:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div>
          <label>Disponível:</label>
          <input
            type="checkbox"
            checked={disponivel}
            onChange={(e) => setDisponivel(e.target.checked)}
          />
        </div>
        <button type="submit">Atualizar Disponibilidade</button>
      </form>
      <ul>
        {disponibilidade.map((item, index) => (
          <li key={index}>
            {item.data} - {item.hora} -{" "}
            {item.disponivel ? "Disponível" : "Indisponível"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gestao;
