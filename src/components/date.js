import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import color from '../constants/constatnt'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 1em;
    color: ${color.primary};

    > label {
        color: ${color.black};
    }
`

const Date = () => {
    return (
        <Container>
            <label>18 December 2019</label>
            <FontAwesomeIcon icon={faArrowUpFromBracket}/>
        </Container>
    )
}

export default Date