import { useState } from 'react';

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
        <h2>Login</h2>
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
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" required />
          </label>
          <label className="form-label">
            Senha:
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-input" required />
          </label>
          <button type="submit" className="botao">Entrar</button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
