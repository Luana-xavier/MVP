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
          <button type="submit" className="botao"><a href='/ambiente'>Entrar</a></button>
          <footer>
          <a id='novoCadastro'  href='/cadastro'>Faça seu cadastro !</a>
          </footer>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
