import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import color from '../constants/constatnt'

const Container = styled.div`
    border: 1px solid ${color.secondary};
    height: 9em;
    width: 8em;
    border-radius: 0.5em;
    text-align: center;
    margin: 0.5em 0;
    display: flex;
    padding: 1em;
    flex-direction: column;
`

const Title = styled.label`
    color: ${color.primary};
    font-size: 1.25em;
`

const Number = styled.label`
    margin-top: 0.5em;
    margin-bottom: 0.1em;
    color: ${color.black};
    font-size: 3em;
    height: 1em;
`

const SubTitle = styled.label`
    color: ${color.secondary};
    font-size: 1em;
`

const Card = (props) => {
    return (
        <Container>
            <Title>
                <FontAwesomeIcon icon={props.icon} style={{ paddingRight: "0.5em" }}/> {props.title}
            </Title>
            <Number>{props.number}</Number>
            {/* <Number>asdasd</Number> */}
            <SubTitle>
                {props.subtitle}
            </SubTitle>
        </Container>
    )
}

export default Card