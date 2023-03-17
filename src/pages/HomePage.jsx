import "../styles/style.css"
import NavBar from "../components/NavBar"

function HomePage() {
    return (
        <>
            <NavBar />
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://t2.tudocdn.net/633314?w=1920" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/05/ricky-and-morty-adult-swim.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/rick_and_morty_capa__ysc3rw-1210x544.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="text">
                    <h4 className="titulo">Sobre o seriado</h4>
                    <p className="text-justify">
                        Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de
                        programação noturno Adult Swim, exibido no canal Cartoon Network.
                    </p>

                    <p className="text-justify">
                        A série estreou em 2 de dezembro de 2013 e acompanha as perigosas aventuras do cientista alcoólatra Rick e seu neto Morty, que divide seu tempo entre a vida familiar e viagens interdimensionais. Em 2016, suas duas primeiras temporadas foram lançadas na Netflix com a dublagem brasileira realizada pelo estúdio Dubbing Company, de Campinas, com tradução de Carlos Freires, e também foi transmitida nos canais pagos TBS, I.Sat e TNT Séries, atualmente é exibida no Brasil pelo canal Warner Channel desde 4 de maio de 2020 com a estreia do bloco do Adult Swim no canal. Em agosto de 2015, o Adult Swim renovou a série para uma terceira temporada de 10 episódios,
                        que estreou no dia 1 de abril de 2017 com o resto da temporada programada para ir ao ar durante o verão do mesmo ano.
                    </p>

                    <p className="text-justify">
                        O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. De acordo com Justin Roiland, a família mora fora da cidade de Seattle, no estado norte-americano de Washington.[2] No entanto, as aventuras de Rick e Morty ocorrem em um número infinito de realidades,
                        com os personagens viajando para outros planetas e dimensões através de portais usando o veículo voador de Rick.
                    </p>

                    <p className="text-justify">
                        Rick é um cientista louco excêntrico e alcoólatra, que evita muitas convenções costumeiras como escola, casamento, amor e família. Ele frequentemente vai em aventuras com seu neto de 14 anos de idade, Morty, um menino de bom coração, mas que também fica facilmente angustiado, cuja bússola moral ingênua mas fundamentada funciona em contraponto ao ego maquiavélico de Rick. A irmã de Morty, Summer, de 17 anos, é uma adolescente mais convencional, que se preocupa em melhorar seu status social entre seus colegas e às vezes acompanha Rick e Morty em suas aventuras. A mãe das crianças, Beth, é uma pessoa geralmente equilibrada e uma força assertiva no lar, embora consciente de seu papel profissional como médica cirurgiã especializada em cavalos. Ela está insatisfeita com seu
                        casamento com Jerry, uma pessoa insensata e de mente simples, que constantemente desaprova a influência de Rick sobre sua família.
                    </p>
                </div>
            </div>

        </>
    )
}

export default HomePage