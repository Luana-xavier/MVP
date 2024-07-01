import { useState } from 'react';

const Login = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [profissao, setProfissao] = useState('');

  const Cadastro = (e) => {
    e.preventDefault();
    console.log(`Nome Completo: ${nomeCompleto}, Login: ${login}, Senha: ${senha}, Data de Nascimento: ${dataNascimento}, CPF: ${cpf}, Profissão: ${profissao}`);
  };

  return (
    <div className="form-container">
      <section id="Cadastro">
        <h2>Cadastrar novo Perfil</h2><br />
      </section>
      <form onSubmit={Cadastro} className="form">
        <label>
          Nome Completo:
          <input type="text" placeholder='Nome completo' value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} className="form-input"  required/>
        </label>
        <br />
        <label>
          Login:
          <input type="email" placeholder="exemplo@gmail.com" value={login} onChange={(e) => setLogin(e.target.value)} className="form-input" required/>
        </label>
        <br />
        <label>
          Senha:
          <input placeholder='*********' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-input" required />
        </label>
        <br />
        <label>
          Data de Nascimento:
          <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="form-input" required/>
        </label>
        <br />
        <label>
          CPF:
          <input type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} className="form-input" />
        </label>
        <br />
        <label>
          Profissão:
          <select value={profissao} onChange={(e) => setProfissao(e.target.value)} className="form-select" required>
            <option value="">Selecione...</option>
            <option value="Professor">Professor</option>
            <option value="Aluno">Aluno</option>
          </select>
        </label>
        <label>
          Aceita receber notificações no seu e-mail ?
          </label>
          <div class="checkbox-wrapper-22">
            <label class="switch" for="checkbox">
              <input type="checkbox" id="checkbox" />
              <div class="slider round"></div>
            </label>
          </div>
        <br />
        <button type="submit" className="botao"><a href='/login'><p id="fontBot">Cadastrar</p> </a></button>
      </form>
    </div>
  );
};

export default Login;
