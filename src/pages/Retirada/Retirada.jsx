import { useState } from 'react';
import './Retirada.css';

function Retirada() {
  const [medicamentos, setMedicamentos] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [possuiReceita, setPossuiReceita] = useState(false);
  const [pedidos, setPedidos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (parseInt(quantidade) < 0) {
      alert('Quantidade não pode ser negativa');
      return;
    }

    const novoPedido = {
      medicamentos: medicamentos.split('\n').join(', '),
      quantidade: quantidade,
      possuiReceita: possuiReceita ? 'Sim' : 'Não',
    };

    setPedidos([...pedidos, novoPedido]);

    setMedicamentos('');
    setQuantidade('');
    setPossuiReceita(false);
  };

  return (
    <div className="retirada-container">
      <h2>Formulário de Retirada</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Quais medicamentos gostaria de retirar?
          <textarea
            value={medicamentos}
            onChange={(e) => setMedicamentos(e.target.value)}
            required
          />
        </label>

        <label>
          Quantidade do medicamento:
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
            min="0" 
          />
        </label>

        <label>
          Se possui receita:
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value="sim"
                checked={possuiReceita === true}
                onChange={() => setPossuiReceita(true)}
              />
              Sim
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="nao"
                checked={possuiReceita === false}
                onChange={() => setPossuiReceita(false)}
              />
              Não
            </label>
          </div>
        </label>

        <button type="submit">Enviar</button>

        {pedidos.length > 0 && (
          <div className="historico-pedidos">
            <h3>Histórico de Pedidos:</h3>
            {pedidos.map((pedido, index) => (
              <div key={index}>
                <p>{`Pedido ${index + 1}: Medicamentos: ${pedido.medicamentos}, Quantidade: ${pedido.quantidade}, Possui Receita: ${pedido.possuiReceita}`}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default Retirada;