import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      user: data.user,
      password: data.password,
    };

    
    const existingData = JSON.parse(localStorage.getItem('users')) || [];

    
    const userExists = existingData.find((user) => user.user === data.user);

    if (userExists) {
      alert('Usuário já existe! Escolha outro nome de usuário.');
    } else {
      
      const updatedData = [...existingData, userData];

      
      localStorage.setItem('users', JSON.stringify(updatedData));

      alert('Você se cadastrou com sucesso');
      navigate('/login');
    }
  };

  return (
    <section className="cadastro-section">
      <div id="Cadastro" className="cadastro-container">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input type="text" {...register('email', { required: 'Preencha' })} autoFocus className={errors.email && 'error'} />

          <label htmlFor="usuario">Usuário:</label>
          <input type="text" {...register('user', { required: 'Preencha' })} className={errors.user && 'error'} />

          <label htmlFor="password">Senha:</label>
          <input type="password" {...register('password', { required: 'Preencha' })} className={errors.password && 'error'} />

          <input type="submit" value="Cadastrar-se" className="cadastro-button" />
        </form>
      </div>
    </section>
  );
};

export default Cadastro;