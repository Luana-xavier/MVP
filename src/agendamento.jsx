import { useState } from 'react';
import Calendario from './calendario';

const Agendamento = () => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const handleAgendamento = (e) => {
    e.preventDefault();  // Prevent the default form submission
    console.log(`Data: ${data}, Horário: ${horario}`);
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleAgendamento}>
        <label>
          
          <Calendario />
        </label>
        <br />
        <label>
        </label>
        <br />
        <button type="submit" className="botao"><a href='/feedback'><p id="fontBot">Agendar</p></a></button>
      </form>
    </div>
  );
};

export default Agendamento;
