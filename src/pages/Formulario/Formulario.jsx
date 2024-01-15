import { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    profissao: '', 
    dataNasc: '',
    cpf: '',
    ondeTrabalha: '', 
    telefone: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cpf') {
      // Formatando CPF
      const formattedCPF = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      setFormData({
        ...formData,
        [name]: formattedCPF,
      });
    } else if (name === 'dataNasc') {
      
      const formattedDate = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Conclua o Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Profissão: {/* Alterado de "Idade" para "Profissão" */}
          <input type="text" name="profissao" value={formData.profissao} onChange={handleChange} />
        </label>
        <br />
        <label>
          Data de Nascimento:
          <input
            type="text"
            name="dataNasc"
            value={formData.dataNasc}
            onChange={handleChange}
            placeholder="DD/MM/AAAA"
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            maxLength="14"
          />
        </label>
        <br />
        <label>
          Onde Trabalha: {}
          <input
            type="text"
            name="ondeTrabalha"
            value={formData.ondeTrabalha}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Número de Telefone:
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {formSubmitted && <p className="form-concluido">Formulário concluído</p>}
    </div>
  );
}

export default Formulario;