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
    ]

    return (
        <div className="container">
            <br />
            <h1>Candidaturas</h1>
            <hr />
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

                                    {item.status === 'Sucesso' && (<h1>Sucesso</h1>)}
                                    
                                    <Card.Text className="card-text">{item.tempo}</Card.Text>
                                    <Button variant="primary" className="card-button">Detalhes</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                ))}
            </div>
            <br />
        </div>
    )
}