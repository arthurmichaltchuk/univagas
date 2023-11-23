import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";


export default function Mentorias() {
  return (
    <div className="container">
      <h1 id="text-mentoria">Escolha seu plano de preços</h1>
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

            <label className="descricao" id="descOne">
              <FaCheck />
              Filtragem de oportunidades de estágio e emprego
            </label>
            <label className="descricao">
              <FaCheck />2 Dicas sobre carreira e processo seletivo.
            </label>
            <label className="descricao">
              <FaCheck />
              Possibilidade de realizar simulados de entrevistas com
              profissionais.
            </label>
            <label className="descricao">
              <IoMdClose />
              Acesso a eventos exclusivos de empresas patrocinadoras.
            </label>
            <label className="descricao">
              <IoMdClose />
              Acesso prioritário a vagas.
            </label>

            <button className="compre-agora" id="compre-agora1">
              Compre agora
            </button>
          </div>
        </div>

        <div className="container-plano">
          <div className="planos">
            <h2>Plano Ouro</h2>
            <h2>R$ 82,90</h2>
            <label>todo mês</label>
            <p>Para entusiastas sérios</p>

            <label className="descricao" id="descOne">
              <FaCheck />
              Filtragem de oportunidades de estágio e emprego.
            </label>
            <label className="descricao">
              <FaCheck />5 Dicas sobre carreira e processo seletivo.
            </label>
            <label className="descricao">
              <FaCheck />
              Possibilidade de realizar simulados de entrevistas com
              profissionais.
            </label>
            <label className="descricao">
              <FaCheck />
              Acesso a eventos exclusivos de empresas patrocinadoras.
            </label>
            <label className="descricao">
              <IoMdClose />
              Acesso prioritário a vagas.
            </label>
            <button className="compre-agora" id="compre-agora2">
              Compre agora
            </button>
          </div>
        </div>

        <div className="container-plano">
          <div className="planos">
            <h2>Plano Platina</h2>
            <h2>R$ 123,40</h2>
            <label>todo mês</label>
            <p>Quando apenas o melhor servirá</p>

            <label className="descricao" id="descOne">
              <FaCheck />
              Relatório personalizado de desempenho em entrevistas.
            </label>
            <label className="descricao">
              <FaCheck />
              10 Dicas sobre carreira e processo seletivo.
            </label>
            <label className="descricao">
              <FaCheck />
              Participação em grupos de discussão exclusivos.
            </label>
            <label className="descricao">
              <FaCheck />
              Possibilidade de realizar simulados de entrevistas com
              profissionais.
            </label>
            <label className="descricao">
              <FaCheck />
              Acesso prioritário a vagas.
            </label>
            <button className="compre-agora">Compre agora</button>
          </div>
        </div>
      </section>
    </div>
  );
}
