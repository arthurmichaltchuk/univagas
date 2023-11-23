import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/curriculo.jpg'
import Button from 'react-bootstrap/Button';

const App = () => {
  const downloadCV = () => {
    
    alert('Download do currículo');
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

        <hr />

        <div className='downloadcv'>
          <h4>Exemplo de currículo</h4>
        </div>
        
      </div>
      <div className="d-flex justify-content-center mt-4">
      <Button variant="primary" className="btn-dicas" onClick={downloadCV}>
            Baixar Currículo
          </Button>
          </div>

          <br /><br />

          <div className='dicascv'>
          <h4>Dicas para currículo</h4>
          <br />
          <h5>Dica 1</h5>
          <p>Destacar Conquistas: Descreva realizações de forma clara.</p>
          <h5>Dica 2</h5>
          <p>Atualizar Regularmente: Mantenha o currículo sempre atualizado.</p>
          <h5>Dica 3</h5>
          <p>Linguagem Clara: Use frases curtas e diretas.</p>
          <h5>Dica 4</h5>
          <p>Experiência Profissional: Destaque cargos anteriores.</p>
        </div>
        <br />
        <br />

        <div className='dicasent'>
          <h4>Dicas para entrevista</h4>
          <br />
          <h5>Dica 1</h5>
          <p>Conheça a empresa e o papel para o qual está se candidatando.</p>
          <h5>Dica 2</h5>
          <p>Entenda a cultura organizacional e os valores da empresa.</p>
          <h5>Dica 3</h5>
          <p>Antecipe perguntas comuns e prepare respostas claras e concisas.</p>
          <h5>Dica 4</h5>
          <p>Destaque experiências passadas e conquistas relevantes.</p>
        </div>
        <br />

        <div>
      <Button variant="primary" className="btn-topo" onClick={downloadCV}>
            Voltar ao topo
          </Button>
          </div>

          
    </div>
  );
};



export default App;
