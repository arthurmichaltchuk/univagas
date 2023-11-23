import React from 'react';

const App = () => {
  const downloadCV = () => {
    // Lógica para gerar e baixar o currículo em PDF
    alert('Download do currículo');
  };

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <div style={styles.leftContent}>
          <h1 style={styles.title}>Criação de Currículo</h1>
          <ul style={styles.list}>
            <li>Destaque suas conquistas e responsabilidades anteriores.</li>
            <li>Mantenha o currículo atualizado com suas habilidades mais recentes.</li>
            <li>Use uma linguagem clara e objetiva.</li>
            <li>Adapte o currículo para a vaga específica que está se candidatando.</li>
          </ul>
          <p style={styles.subTitle}>Segue um modelo ao lado:</p>
        </div>
        <div style={styles.rightContent}>
          <div style={styles.resume}>
            <h2 style={styles.resumeTitle}>Informações Pessoais</h2>
            <p style={styles.resumeText}>Nome: Seu Nome</p>
            <p style={styles.resumeText}>Email: seu@email.com</p>
            <h2 style={styles.resumeTitle}>Experiência Profissional</h2>
            <p style={styles.resumeText}>Cargo: Desenvolvedor Web</p>
            <p style={styles.resumeText}>Empresa: Empresa ABC</p>
            <p style={styles.resumeText}>Período: Janeiro 2020 - Presente</p>
            <h2 style={styles.resumeTitle}>Educação</h2>
            <p style={styles.resumeText}>Curso: Ciência da Computação</p>
            <p style={styles.resumeText}>Instituição: Universidade XYZ</p>
            <p style={styles.resumeText}>Ano de Conclusão: 2019</p>
          </div>
          <button style={styles.button} onClick={downloadCV}>
            Baixar Currículo
          </button>
        </div>
        <div style={styles.leftContent}>
          <h1 style={styles.title}>Dicas para Entrevistas</h1>
          <ul style={styles.list}>
            <li>Esteja preparado para falar sobre suas experiências passadas.</li>
            <li>Pratique respostas para perguntas comuns de entrevista.</li>
            <li>Mostre entusiasmo e interesse pela posição.</li>
            <li>Prepare algumas perguntas para fazer ao entrevistador.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    padding: '40px 20px',
    color: '#000', // Cor do texto preto
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftContent: {
    maxWidth: '300px',
    textAlign: 'left',
    marginRight: '20px',
  },
  rightContent: {
    maxWidth: '600px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#000000',
  },
  subTitle: {
    fontSize: '16px',
    marginTop: '10px',
    color: '#6c757d',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    fontSize: '14px',
    color: '#000', // Cor do texto preto
  },
  resume: {
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontSize: '14px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  resumeTitle: {
    fontSize: '18px',
    marginBottom: '5px',
    color: '#000000',
  },
  resumeText: {
    margin: '5px 0',
    color: '#000', // Cor do texto preto
  },
  button: {
    backgroundColor: '#1d7bc3',
    color: 'white',
    fontSize: '14px',
    padding: '10px 16px',
    marginTop: '20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default App;
