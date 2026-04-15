import React, { useState } from 'react';
import '../css/CadastroDeVaga.css';

const CadastroDeVaga = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: 'Presencial',
    cargaHoraria: '',
    periodos: [],
    experiencia: 'Iniciante',
    vagasDisponiveis: '',
    descricao: ''
  });

  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  const togglePeriodo = (periodo) => {
    const novos = formData.periodos.includes(periodo)
      ? formData.periodos.filter(p => p !== periodo)
      : [...formData.periodos, periodo];
    setFormData({ ...formData, periodos: novos });
  };

  const validarFormulario = () => {
    if (
      !formData.titulo.trim() ||
      !formData.cargaHoraria ||
      !formData.vagasDisponiveis ||
      !formData.descricao.trim() ||
      formData.periodos.length === 0
    ) {
      return false;
    }
    return true;
  };

  const handlePublicar = () => {
    if (validarFormulario()) {
      setMensagem({ texto: '✅ Vaga publicada com sucesso!', tipo: 'sucesso' });
    } else {
      setMensagem({ texto: '❌ Por favor, preencha todos os campos obrigatórios.', tipo: 'erro' });
    }

    setTimeout(() => setMensagem({ texto: '', tipo: '' }), 3000);
  };

  return (
    <div className="container-publicar">
      <main className="main-content">
        <h1 className="titulo-pagina">CRIAR NOVA OPORTUNIDADE DE VOLUNTÁRIO</h1>

        <section className="secao-formulario">
          <h2 className="secao-titulo">INFORMAÇÕES BÁSICAS</h2>
          <div className="campo-grupo">
            <label className="label-obrigatorio">* Título da Vaga</label>
            <input 
              type="text" 
              className="input-padrao" 
              value={formData.titulo}
              onChange={(e) => setFormData({...formData, titulo: e.target.value})}
              placeholder="Ex: Designer Gráfico"
            />
          </div>
        </section>
        <section className="secao-formulario">
          <h2 className="secao-titulo">ONDE E QUANDO</h2>
          <div className="grid-duas-colunas">
            <div className="campo-grupo">
              <label className="label-obrigatorio">* Tipo</label>
              <div className="container-chips">
                {['Presencial', 'Remoto', 'Híbrido'].map(t => (
                  <button 
                    key={t} 
                    className={`chip ${formData.tipo === t ? 'ativo' : ''}`}
                    onClick={() => setFormData({...formData, tipo: t})}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="campo-grupo">
              <label className="label-obrigatorio">* Carga Horária Semanal (h)</label>
              <input 
                type="number" 
                className="input-padrao" 
                value={formData.cargaHoraria}
                onChange={(e) => setFormData({...formData, cargaHoraria: e.target.value})}
              />
            </div>
          </div>

          <div className="campo-grupo">
            <label className="label-obrigatorio">* Período (Selecione ao menos um)</label>
            <div className="container-checkbox">
              {['Manhã', 'Tarde', 'Noite', 'Finais de Semana'].map(p => (
                <label key={p} className="checkbox-item">
                  <input 
                    type="checkbox" 
                    checked={formData.periodos.includes(p)}
                    onChange={() => togglePeriodo(p)}
                  /> {p}
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className="secao-formulario">
          <h2 className="secao-titulo">O QUE PRECISAMOS</h2>
          <div className="campo-grupo">
            <label className="label-obrigatorio">* Nível de Experiência</label>
            <div className="container-chips">
              {['Iniciante', 'Intermediário', 'Especialista'].map(exp => (
                <button 
                  key={exp} 
                  className={`chip ${formData.experiencia === exp ? 'ativo' : ''}`}
                  onClick={() => setFormData({...formData, experiencia: exp})}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="secao-formulario">
          <h2 className="secao-titulo">DETALHES DA VAGA</h2>
          <div className="campo-grupo">
            <label className="label-obrigatorio">* Vagas Disponíveis</label>
            <input 
              type="number" 
              className="input-padrao" 
              value={formData.vagasDisponiveis}
              onChange={(e) => setFormData({...formData, vagasDisponiveis: e.target.value})}
            />
          </div>
          <div className="campo-grupo">
            <label className="label-obrigatorio">Descrição (opcional)</label>
            <textarea 
              className="textarea-padrao" 
              rows="5"
              value={formData.descricao}
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
            ></textarea>
          </div>
        </section>

        <div className="container-acoes">
          <button className="btn-acao gray">Salvar Rascunho</button>
          <button className="btn-acao" onClick={handlePublicar}>Publicar Vaga</button>
        </div>

        {mensagem.texto && (
          <div className={`alerta ${mensagem.tipo}`}>
            {mensagem.texto}
          </div>
        )}
      </main>
    </div>
  );
};

export default CadastroDeVaga;