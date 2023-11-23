import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/curriculo.jpg'
import Button from 'react-bootstrap/Button';

const App = () => {
  const downloadCV = () => {
    const fileContent = 'curriculo.txt';

    const blob = new Blob([fileContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'curriculo.txt';
    link.click();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 pt-5">
          <h1 className='introdicas'>Introdução</h1>
          <div className='introducao'>
            <h4 className='textintr'>Um currículo bem elaborado e saber se comportar em uma entrevista é uma ferramenta essencial para impulsionar sua carreira, destacar suas qualificações e garantir que você seja considerado em processos seletivos.
            </h4>
          </div>
          <p></p>
        </div>
        <div className="col-md-4">
          <div className='dicasimg'>
            <img src={logo} alt="Logo" />
          </div>
        </div>



        <div className='downloadcv'>
          <h4>Exemplo de currículo</h4>
        </div>

      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" className="btn-dicas" onClick={downloadCV}>
          Baixar Currículo
        </Button>
      </div>

      <br /><hr /><br />

      <div className='dicascv'>
        <h4>Dicas para currículo</h4>
        <br />
        <h5>1 - Destacar Conquistas: Descreva realizações de forma clara.</h5>
        <h5>2 - Atualizar Regularmente: Mantenha o currículo sempre atualizado.</h5>
        <h5>3 - Linguagem Clara: Use frases curtas e diretas.</h5>
        <h5>4 - Experiência Profissional: Destaque cargos anteriores.</h5>
      </div>
      <br />
      <hr />
      <br />

      <div className='dicasent'>
        <h4>Dicas para entrevista</h4>
        <br />
        <h5>1 - Conheça a empresa e o papel para o qual está se candidatando.</h5>
        <h5>2 - Entenda a cultura organizacional e os valores da empresa.</h5>
        <h5>3 - Antecipe perguntas comuns e prepare respostas claras e concisas.</h5>
        <h5>4 - Destaque experiências passadas e conquistas relevantes.</h5>
      </div>
      <br />

    </div>
  );
};



export default App;

