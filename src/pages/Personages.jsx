import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";

import "../styles/style.css"
import NavBar from "../components/NavBar";

function Personages() {

    const [page, setPage] = useState(1);
    const [personagem, setPersonagem] = useState([]);

    const next = () => {
        setPage(page => page + 1)
    }

    const prev = () => {
        setPage(page => page - 1);
    }

    useEffect(() => {
        axios
            .get(
                `https://rickandmortyapi.com/api/character/?page=${page}`
            )
            .then((response) => {
                setPersonagem(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page]);


    const list = personagem?.map((p) =>

        <>
            <div className="card mb-0 border-bottom" style={{ maxWidth: "600px" }}>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img src={`${p.image}`} className="card-img rounded-circle" alt={`${p.name}`} ></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                           <h5 className="card-title">{p.name}</h5>
                            <p className="card-text">Status: {p.status}</p>
                            <p className="card-text">Sexo: {p?.gender}</p>
                            <p className="card-text">Origem: {p?.origin?.name}</p>
                            <p className="card-text">Espécie: {p?.species}</p>
                            <p className="card-text">Última localização: {p?.location?.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
    return (
        <>
            <NavBar />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={prev} className="btn btn-primary" id="prev">Anterior</button>
                <button onClick={next} className="btn btn-primary me-md-2">Próximo</button>
            </div>

            <div className="cards">
                {list}
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Personages