import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Index() {
    const data = [
        {
            titulo: 'Desenvolvedor Frontend',
            empresa: 'Tech Solutions',
            cep: 'São Paulo/SP',
            descricao: 'Estamos buscando um desenvolvedor frontend para se juntar à nossa equipe inovadora.',
            tempo: 'anunciado a 2 dias',
        },
        {
            titulo: 'Analista de Marketing Digital',
            empresa: 'Digital Marketing Agency',
            cep: 'Rio de Janeiro/RJ',
            descricao: 'Procuramos um profissional de marketing digital com experiência em estratégias online.',
            tempo: 'anunciado a 1 semana',
        },
        {
            titulo: 'Desenvolvedor Frontend',
            empresa: 'Tech Solutions',
            cep: 'São Paulo/SP',
            descricao: 'Estamos buscando um desenvolvedor frontend para se juntar à nossa equipe inovadora.',
            tempo: 'anunciado a 2 dias',
        },
        {
            titulo: 'Analista de Marketing Digital',
            empresa: 'Digital Marketing Agency',
            cep: 'Rio de Janeiro/RJ',
            descricao: 'Procuramos um profissional de marketing digital com experiência em estratégias online.',
            tempo: 'anunciado a 1 semana',
        },
        {
            titulo: 'Desenvolvedor Frontend',
            empresa: 'Tech Solutions',
            cep: 'São Paulo/SP',
            descricao: 'Estamos buscando um desenvolvedor frontend para se juntar à nossa equipe inovadora.',
            tempo: 'anunciado a 2 dias',
        },
        {
            titulo: 'Analista de Marketing Digital',
            empresa: 'Digital Marketing Agency',
            cep: 'Rio de Janeiro/RJ',
            descricao: 'Procuramos um profissional de marketing digital com experiência em estratégias online.',
            tempo: 'anunciado a 1 semana',
        },
        {
            titulo: 'Desenvolvedor Frontend',
            empresa: 'Tech Solutions',
            cep: 'São Paulo/SP',
            descricao: 'Estamos buscando um desenvolvedor frontend para se juntar à nossa equipe inovadora.',
            tempo: 'anunciado a 2 dias',
        },
        {
            titulo: 'Analista de Marketing Digital',
            empresa: 'Digital Marketing Agency',
            cep: 'Rio de Janeiro/RJ',
            descricao: 'Procuramos um profissional de marketing digital com experiência em estratégias online.',
            tempo: 'anunciado a 1 semana',
        },
        // Add more data objects as needed
    ];

    return (
        <div className="container">
            <br />
            <h1>Pagina inicial</h1>
            <hr />
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
            <br/>
        </div>
    );
}
