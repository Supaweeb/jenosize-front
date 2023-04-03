import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import color from '../constants/constatnt'

const _Button = styled.div`
    background-color: ${props => props.active ? `${color.primary}` : `${color.white}`};
    color: ${props => props.active === true ? `${color.white}` : `${color.primary}`};
    border: ${props => props.active === false ? "1px solid": "none"};
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: 3em;
    width: fit-content;
    min-width: fit-content;
    margin: 0 0.1em;
`

const Button = (props) => {
    return (
        <_Button active={props.active} onClick={() => props.onClick(props.text)} value={props.text} style={props.styled}>
            <FontAwesomeIcon icon={props.icon} /> {props.text}
        </_Button>
    )
}

export default Button
