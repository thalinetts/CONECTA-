import React, { useState } from 'react';
import '../../css/Voluntarios/CentralDoacoes.css';

const CentralDoacoes = () => {
  const [metodoPagamento, setMetodoPagamento] = useState('PIX');

  return (
    <div className="central-body">
      <div className="card-container">
        
        <div className="ong-header">
          <img src="https://placedog.net/100/100" alt="Abrigo" className="ong-logo" />
          <div className="ong-info">
            <h1 className="ong-nome">Ajude o Abrigo Esperança</h1>
            <p className="ong-campanha">Reforma do Canil</p>
            <div className="barra-progresso">
              <div className="progresso-fill" style={{ width: '62.5%' }}></div>
            </div>
            <span className="arrecadacao">R$ 12.500 arrecadados de R$ 20.000</span>
          </div>
        </div>

        <div className="badge-doacao">
          <span className="icon-user">👤</span>
          Você está doando para: <strong>Abrigo Esperança</strong>
        </div>

        <div className="sessao">
          <label className="sessao-titulo">Escolha um valor para doar</label>
          <div className="grid-valores">
            <button className="btn-valor">R$ 20</button>
            <button className="btn-valor">R$ 50</button>
            <button className="btn-valor">R$ 100</button>
            <div className="input-outro-valor">
              <span>Outro Valor R$</span>
              <input type="number" placeholder="0,00" />
            </div>
          </div>
        </div>

        <div className="sessao">
          <label className="sessao-titulo">Seus Dados</label>
          <div className="form-dados">
            <input type="text" placeholder="*Nome Completo" className="campo-texto" />
            <input type="text" placeholder="*CPF" className="campo-texto" />
            <input type="email" placeholder="*E-mail" className="campo-texto" />
            <div className="checkbox-area">
              <input type="checkbox" id="anonimo" />
              <label htmlFor="anonimo">Desejo que minha doação seja anônima</label>
            </div>
            <p className="aviso-dados">(Seus dados não serão enviados pra a ONG)</p>
          </div>
        </div>

        <div className="sessao">
          <label className="sessao-titulo">Escolha a Forma de Pagamento</label>
          <div className="box-pagamento">
            <div className="abas-pagamento">
              {['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Boleto Bancário'].map((tab) => (
                <button 
                  key={tab} 
                  className={`aba-item ${metodoPagamento === tab ? 'ativo' : ''}`}
                  onClick={() => setMetodoPagamento(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="conteudo-pagamento">
              {metodoPagamento === 'PIX' && (
                <div className="area-pix">
                  <div className="qrcode-box">
                    <img src="..." alt="QR" />
                  </div>
                  <div className="pix-instrucoes">
                    <p className="label-chave">Chave PIX (Copia e Cola)</p>
                    <div className="copy-paste">
                      <input type="text" readOnly value="00020101021126580014br.gov.bcb.pix" />
                      <button>📋</button>
                    </div>
                    <p className="timer">Expira em: <span>09:58</span></p>
                    <button className="btn-gerar">Gerar PIX</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="sessao">
          <label className="sessao-titulo">Mensagem de Apoio (Opcional)</label>
          <textarea className="campo-mensagem"></textarea>
        </div>

        <button className="btn-finalizar">Doar Agora</button>
      </div>
    </div>
  );
};

export default CentralDoacoes;