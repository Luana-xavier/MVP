import { useState } from 'react';

const Agendamento = () => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const handleAgendamento = (e) => {
    e.preventDefault();  // Prevent the default form submission
    console.log(`Data: ${data}, Horário: ${horario}`);
  };

  return (
    <div className="form-container">
      <h2>Agendamento</h2> <br />
      <form className="form" onSubmit={handleAgendamento}>
        <label>
          Data:
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Horário:
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="botao">Agendar</button>
      </form>
    </div>
  );
};

export default Agendamento;
