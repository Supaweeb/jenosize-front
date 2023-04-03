
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'
import color from '../constants/constatnt'

const Line = styled.hr`
    width: 100%;
    flex: 1;
    border: none;
    height: 2px;
    background-color: ${color.secondary};
`

const _ArrowButton = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ArrowButton = () => {
    return (
        <>
            <_ArrowButton>
                <Line/>
                <FontAwesomeIcon icon={faChevronDown} style={{border: `1.5px solid ${color.secondary}`, borderRadius: "1em", padding: "0.15em"}}/>
                <Line/>
            </_ArrowButton>
        </>
    )
}

export default ArrowButton
