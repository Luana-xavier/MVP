import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const LoginForm = () => {
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Tipo de Usuário: ${tipoUsuario}, Email: ${email}, Senha: ${senha}`);
  };

  return (
    <section id='login'>
      <div className="form-container">
        <h2 id='formularios'>Login</h2><br/>
        <form onSubmit={handleLogin} className="form">
          <label>
            Escolha o tipo de usuário:
            <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} className="form-select">
              <option value="">Selecione...</option>
              <option value="administrador">Administrador</option>
              <option value="aluno">Aluno</option>
              <option value="professor">Professor</option>
            </select>
          </label>
          <label>
            Email:
            <input type="email" placeholder='exemplo@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" required />
          </label>
          <label className="form-label">
            Senha:
            <input type="password" placeholder='*********' value={senha} onChange={(e) => setSenha(e.target.value)} className="form-input" required />
          </label>
          <br/>
          <button type="submit" className="botao"><a href='/ambiente'><p id="fontBot">Entrar</p></a></button>
        </form>
        < div className='botaoCad'>
          <button type="Click" className="botaoCad"><a href='/cadastro'><p id='fontBot'>Faça seu cadastro</p></a></button>
          </div>
      </div>
    </section>
  );
};

export default LoginForm;
