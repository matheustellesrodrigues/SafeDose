import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedUserData = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = storedUserData.find(user => user.user === data.user && user.password === data.password);

    if (userExists) {
      navigate('/Formulario');
    } else {
      alert('Usuário ou senha inválidos!');
    }
  };

  return (
    <section className="login-section">
      <div id='Login' className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="usuario">Usuário:</label>
          <input type="text" {...register('user', { required: 'preencha' })} autoFocus />

          <label htmlFor="password">Senha:</label>
          <input type="password" {...register('password', { required: 'preencha' })} />

          <input type="submit" value="Login" className="login-button" />
        </form>
        <h1>
          Ainda não tem uma conta? <Link to="/cadastro">Criar conta</Link>
        </h1>
      </div>
    </section>
  );
};

export default Login;