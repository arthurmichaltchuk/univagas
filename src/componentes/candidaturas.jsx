import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Candidaturas() {
    const data = [
        {
            titulo: 'Desenvolvedor Frontend',
            empresa: 'Tech Solutions',
            status: 'Sucesso',
            descricao: 'Estamos buscando um desenvolvedor frontend para se juntar à nossa equipe inovadora.',
            tempo: 'anunciado a 2 dias',
        },
        {
            titulo: 'Analista de Marketing Digital',
            empresa: 'Digital Marketing Agency',
            status: 'Em andamento',
            descricao: 'Procuramos um profissional de marketing digital com experiência em estratégias online.',
            tempo: 'anunciado a 1 semana',
        },
        {
            titulo: 'Analista de Marketing Digital',
            empresa: 'Digital Marketing Agency',
            status: 'Sem resposta',
            descricao: 'Procuramos um profissional de marketing digital com experiência em estratégias online.',
            tempo: 'anunciado a 1 semana',
        },
        {
            titulo: 'Engenheiro de Software',
            empresa: 'InovaTech',
            status: 'Sucesso',
            descricao: 'Buscamos um engenheiro de software talentoso para liderar nosso projeto inovador.',
            tempo: 'anunciado a 3 dias',
        },
        {
            titulo: 'Designer Gráfico',
            empresa: 'Creative Designs',
            status: 'Em andamento',
            descricao: 'Estamos à procura de um designer gráfico para criar designs incríveis para nossos clientes.',
            tempo: 'anunciado a 2 semanas',
        },
        {
            titulo: 'Analista de Dados',
            empresa: 'Data Analytics Co.',
            status: 'Sucesso',
            descricao: 'Procuramos um analista de dados experiente para analisar e interpretar nossos conjuntos de dados.',
            tempo: 'anunciado a 5 dias',
        },
        {
            titulo: 'Gerente de Projetos',
            empresa: 'Project Management Inc.',
            status: 'Sem resposta',
            descricao: 'Estamos em busca de um gerente de projetos para liderar nossas iniciativas de grande escala.',
            tempo: 'anunciado a 1 semana',
        },
        {
            titulo: 'Analista de Sistemas',
            empresa: 'Tech Innovations',
            status: 'Em andamento',
            descricao: 'Procuramos um analista de sistemas para avaliar e aprimorar nossa infraestrutura de TI.',
            tempo: 'anunciado a 4 dias',
        },
        {
            titulo: 'Assistente Administrativo',
            empresa: 'Office Solutions',
            status: 'Sem resposta',
            descricao: 'Buscamos um assistente administrativo para oferecer suporte nas operações diárias da empresa.',
            tempo: 'anunciado a 2 semanas',
        },
        {
            titulo: 'Desenvolvedor Full Stack',
            empresa: 'Code Masters',
            status: 'Sucesso',
            descricao: 'Estamos expandindo nossa equipe e precisamos de um desenvolvedor full stack versátil.',
            tempo: 'anunciado a 6 dias',
        },
        {
            titulo: 'Especialista em SEO',
            empresa: 'SEO Experts',
            status: 'Em andamento',
            descricao: 'Procuramos um especialista em SEO para otimizar nossa presença online e aumentar a visibilidade.',
            tempo: 'anunciado a 3 semanas',
        },
        {
            titulo: 'Analista Financeiro',
            empresa: 'Financial Services Ltd.',
            status: 'Sucesso',
            descricao: 'Estamos contratando um analista financeiro para gerenciar nossas operações financeiras.',
            tempo: 'anunciado a 7 dias',
        },
        {
            titulo: 'Assistente de Recursos Humanos',
            empresa: 'HR Solutions',
            status: 'Sem resposta',
            descricao: 'Procuramos um assistente de RH para ajudar nas atividades de recrutamento e seleção.',
            tempo: 'anunciado a 2 semanas',
        },
        {
            titulo: 'Engenheiro Eletricista',
            empresa: 'Electric Innovations',
            status: 'Em andamento',
            descricao: 'Buscamos um engenheiro eletricista para contribuir para projetos inovadores na área de eletricidade.',
            tempo: 'anunciado a 5 dias',
        },
        {
            titulo: 'Consultor de Negócios',
            empresa: 'Business Consulting Co.',
            status: 'Sucesso',
            descricao: 'Procuramos um consultor de negócios para fornecer orientação estratégica aos nossos clientes.',
            tempo: 'anunciado a 8 dias',
        },
    ];

    return (
        <div>
            <div className='search-box'>
                <div className="container">
                    <div className='row pt-4'>
                        <div className='col-md-6'><h1>Candidaturas</h1></div>
                        <div className='col-md-6'>
                            <input placeholder='Titulo ou empresa' className='search-input' />
                            <Button variant="primary" className="search-button">Pesquisar</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>

                <div className="row row-cols-2">


                    {data.map((item, index) => (
                        <div className="col-12" key={index}>
                            <br />
                            <div className="cardCanditaturas" key={index}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="card-title">{item.titulo}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-subtitle">{item.empresa}</Card.Subtitle>
                                        <Card.Text className="card-text">{item.descricao}</Card.Text>

                                        {item.status === 'Sucesso' && (<div className='statusBoxSucesso'><h5 className='statusBoxText'>Sucesso</h5></div>)}
                                        {item.status === 'Sem resposta' && (<div className='statusBoxAguardando'><h5 className='statusBoxText'>Sem resposta</h5></div>)}
                                        {item.status === 'Em andamento' && (<div className='statusBoxAndamento'><h5 className='statusBoxText'>Em Andamento</h5></div>)}

                                        <Card.Text className="card-text">{item.tempo}</Card.Text>
                                        <Button variant="primary" className="card-button">Detalhes</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
            <br />
        </div>
    )
}