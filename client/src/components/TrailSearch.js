// to be implimented
import styled from "styled-components"
import { Link } from "react-router-dom"

const TrailSearch = () => {
    return (
        <>
        <input></input>
        <Div>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Camino del Norte</Link>
        </Li>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Camino Portugués</Link>
        </Li>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Camino Inglés</Link>
        </Li>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Vía de la Plata</Link>
        </Li>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Camino Finisterre-Muxía</Link>
        </Li>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Camino Francés</Link>
        </Li>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Camino Le Puy</Link>
        </Li>
        <Li>
        <Link to="/" style={{ textDecoration: 'none' }}>Camino Invierno</Link>
        </Li>
        </Div>
        </>
    )
}

const Div = styled.div`
display: flex;
flex-direction: column;
`

const Li = styled.div`
padding: 10px;
color: black;
`

export default TrailSearch;