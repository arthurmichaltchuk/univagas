import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";


export default function Mentorias() {
  return (
    <div className="container">
      <h1 id="text-mentoria">Escolha seu plano de preços<IoMdClose /><FaCheck /></h1>
      <div className="header-mentoria">
        <div id="subtitle-mentoria">
          <p>Melhor preço</p>
        </div>
      </div>

      <section className="conteudo-mentoria">
        <div className="container-plano">
          <div className="planos">
            <h2>Plano Prata</h2>
            <h2>R$ 25,00</h2>
            <label>todo mês</label>
            <p>Perfeito para iniciantes</p>

            <button className="compre-agora">Compre agora</button>

            <label className="descricao" id="descOne">
              Filtragem de oportunidades de estágio e emprego
            </label>
            <label className="descricao">
              Dicas sobre carreira e processo seletivo.
            </label>
          </div>
        </div>

        <div className="container-plano">
          <div className="planos">
            <h2>Plano Ouro</h2>
            <h2>R$ 82,90</h2>
            <label>todo mês</label>
            <p>Para entusiastas sérios</p>

            <button className="compre-agora" id="compre-agora2">
              Compre agora
            </button>

            <label className="descricao" id="descOne">
              Mentoria com um profissional experiente.
            </label>
            <label className="descricao">
              Feedbacks detalhados de empresas pós-entrevistas.
            </label>
            <label className="descricao">
              Participação em eventos presenciais de networking.
            </label>
            <label className="descricao">
              Possibilidade de realizar simulados de entrevistas com
              profissionais.
            </label>
          </div>
        </div>

        <div className="container-plano">
          <div className="planos">
            <h2>Plano Platina</h2>
            <h2>R$ 123,40</h2>
            <label>todo mês</label>
            <p>Quando apenas o melhor servirá</p>

            <button className="compre-agora">Compre agora</button>

            <label className="descricao" id="descOne">
              Relatório personalizado de desempenho em entrevistas.
            </label>
            <label className="descricao">
              Workshops exclusivos de desenvolvimento profissional.
            </label>
            <label className="descricao">
              Acesso a conteúdo premium de parceiros educacionais.
            </label>
            <label className="descricao">
              Participação em grupos de discussão exclusivos.
            </label>
            <label className="descricao">
              Suporte dedicado para dúvidas e questões urgentes.
            </label>
            <label className="descricao">
              Acesso a eventos exclusivos de empresas patrocinadoras.
            </label>
          </div>
        </div>
        
      </section>
    </div>
  );
}
