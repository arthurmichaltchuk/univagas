import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Select from 'react-select'

export default function Index() {
    const data = [
        {
            titulo: 'Desenvolvedor Backend',
            empresa: 'Code Wizards',
            cep: 'Curitiba/PR',
            descricao: 'Procuramos um desenvolvedor backend para fortalecer nossa equipe de tecnologia.',
            tempo: 'anunciado a 3 dias',
        },
        {
            titulo: 'Designer de UI/UX',
            empresa: 'Creative Studios',
            cep: 'Belo Horizonte/MG',
            descricao: 'Estamos em busca de um designer talentoso para criar experiências de usuário incríveis.',
            tempo: 'anunciado a 2 semanas',
        },
        {
            titulo: 'Analista de Redes',
            empresa: 'Network Solutions',
            cep: 'Porto Alegre/RS',
            descricao: 'Procuramos um analista de redes para otimizar e manter nossa infraestrutura de rede.',
            tempo: 'anunciado a 5 dias',
        },
        {
            titulo: 'Desenvolvedor Mobile',
            empresa: 'Mobile Innovations',
            cep: 'Recife/PE',
            descricao: 'Estamos expandindo nossa equipe de desenvolvimento mobile e buscamos talentos.',
            tempo: 'anunciado a 1 semana',
        },
        {
            titulo: 'Especialista em Segurança da Informação',
            empresa: 'SecureTech',
            cep: 'Fortaleza/CE',
            descricao: 'Procuramos um especialista em segurança da informação para proteger nossos sistemas.',
            tempo: 'anunciado a 4 dias',
        },
        {
            titulo: 'Analista de Suporte Técnico',
            empresa: 'Tech Support Services',
            cep: 'Manaus/AM',
            descricao: 'Estamos contratando um analista de suporte técnico para ajudar nossos clientes.',
            tempo: 'anunciado a 6 dias',
        },
        {
            titulo: 'Engenheiro Civil',
            empresa: 'Civil Engineering Co.',
            cep: 'Brasília/DF',
            descricao: 'Buscamos um engenheiro civil para liderar projetos de construção e infraestrutura.',
            tempo: 'anunciado a 2 semanas',
        },
        {
            titulo: 'Analista de Qualidade',
            empresa: 'Quality Assurance Ltd.',
            cep: 'Salvador/BA',
            descricao: 'Procuramos um analista de qualidade para garantir a excelência em nossos produtos.',
            tempo: 'anunciado a 8 dias',
        },
        {
            titulo: 'Analista de Recursos Humanos',
            empresa: 'HR Solutions',
            cep: 'Natal/RN',
            descricao: 'Estamos em busca de um analista de RH para gerenciar processos de recrutamento.',
            tempo: 'anunciado a 4 dias',
        },
        {
            titulo: 'Desenvolvedor Full Stack',
            empresa: 'FullStack Tech',
            cep: 'Cuiabá/MT',
            descricao: 'Procuramos um desenvolvedor full stack para trabalhar em projetos desafiadores.',
            tempo: 'anunciado a 7 dias',
        },
        {
            titulo: 'Analista Financeiro',
            empresa: 'Financial Services Ltd.',
            cep: 'Belém/PA',
            descricao: 'Buscamos um analista financeiro para gerenciar nossas operações financeiras.',
            tempo: 'anunciado a 9 dias',
        },
        {
            titulo: 'Assistente de Marketing',
            empresa: 'Marketing Solutions',
            cep: 'São Luís/MA',
            descricao: 'Estamos contratando um assistente de marketing para apoiar nossas iniciativas.',
            tempo: 'anunciado a 3 dias',
        },
        {
            titulo: 'Gerente de Vendas',
            empresa: 'Sales Management Co.',
            cep: 'João Pessoa/PB',
            descricao: 'Procuramos um gerente de vendas para liderar nossa equipe de vendas.',
            tempo: 'anunciado a 6 dias',
        },
        {
            titulo: 'Analista de BI',
            empresa: 'Business Intelligence Solutions',
            cep: 'Campo Grande/MS',
            descricao: 'Buscamos um analista de BI para analisar dados e fornecer insights estratégicos.',
            tempo: 'anunciado a 5 dias',
        },
        {
            titulo: 'Engenheiro Mecânico',
            empresa: 'Mechanical Engineering Innovations',
            cep: 'São Bernardo do Campo/SP',
            descricao: 'Procuramos um engenheiro mecânico para projetar e desenvolver máquinas e equipamentos.',
            tempo: 'anunciado a 10 dias',
        },
    ];

    const opcoesCursos = [
        { value: 'ciencia-da-computacao', label: 'Ciência da Computação' },
        { value: 'engenharia-mecanica', label: 'Engenharia Mecânica' },
        { value: 'biologia', label: 'Biologia' },
        { value: 'administracao-de-empresas', label: 'Administração de Empresas' },
        { value: 'psicologia', label: 'Psicologia' },
        { value: 'engenharia-eletrica', label: 'Engenharia Elétrica' },
        { value: 'medicina', label: 'Medicina' },
        { value: 'ciencias-ambientais', label: 'Ciências Ambientais' },
        { value: 'linguistica', label: 'Linguística' },
        { value: 'arquitetura', label: 'Arquitetura' },
        { value: 'financas', label: 'Finanças' },
        { value: 'fisica', label: 'Física' },
        { value: 'ciencia-politica', label: 'Ciência Política' },
        { value: 'quimica', label: 'Química' },
        { value: 'sociologia', label: 'Sociologia' },
      ];

    return (
        <div>
            <div className='search-box'>
                <div className="container">
                    <div className='row pt-4'>
                        <div className='col-md-6'><h1>Vagas</h1></div>
                        <div className='col-md-6 d-flex'>
                            <Select options={opcoesCursos} className='optionCurso'/>
                            <Button variant="primary" className="search-button">Pesquisar</Button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className="row row-cols-2">
                    {data.map((item, index) => (
                        <div className="col-6" key={index}>
                            <br />
                            <div className="card" key={index}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="card-title">{item.titulo}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-subtitle">{item.empresa}</Card.Subtitle>
                                        <Card.Text className="card-text">{item.cep}</Card.Text>
                                        <Card.Text className="card-text">{item.descricao}</Card.Text>
                                        <Button variant="primary" className="card-button">Saiba mais</Button>
                                        <Card.Text className="card-text">{item.tempo}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <br />
        </div>
    );
}
