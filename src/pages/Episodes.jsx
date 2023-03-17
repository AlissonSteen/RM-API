import axios from "axios"
import { useEffect, useState } from "react"

import NavBar from "../components/NavBar";

function Episodes() {

    const [page, setPage] = useState(1);
    const [episodio, setEpisodio] = useState([]);

    const next = () => {
        setPage(page => page + 1)
    }

    const prev = () => {
        setPage(page => page - 1);
    }

    useEffect(() => {
        axios
            .get(
                `https://rickandmortyapi.com/api/episode/?page=${page}`
            )
            .then((response) => {
                setEpisodio(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page]);


    const list = episodio?.map((e) =>
        <>
            <ul className="list-unstyled">
                <li className="media">
                    <img src="" className="mr-3" alt=""></img>
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">{e.episode}: {e?.name}</h5>
                        Lançamento: {e.air_date}
                    </div>
                </li>
            </ul>
        </>
    )

    return (
        <>
            <NavBar />

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={prev} className="btn btn-primary" id="prev">Anterior</button>
                <button onClick={next} className="btn btn-primary me-md-2">Próximo</button>
            </div>
            
            <div className="list">
                {list}
            </div>

        </>
    )
}

export default Episodes