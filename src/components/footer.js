import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCircleCheck, faPaperPlane, faClock, faGear } from '@fortawesome/free-solid-svg-icons'
import color from '../constants/constatnt'

const Container = styled.div`
    border: 2px solid;
    border-color: ${color.secondary};
    border-left: none;
    border-right: none;
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
`

const Button = styled.div`
    // width: 50%;
    margin: auto;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: ${props => props.selected ? `${color.primary}` : `${color.secondary}`};
`

const Label = styled.label`
    display: flex;
`

const Footer = () => {
    return (
        <Container>
            <Button>
                <FontAwesomeIcon icon={faPenToSquare}/>
                <Label>Write</Label>
            </Button>
            <Button>
                <FontAwesomeIcon icon={faCircleCheck}/>
                <Label>Approval</Label>
            </Button>
            <Button>
                <FontAwesomeIcon icon={faPaperPlane}/>
                <Label>Repeat</Label>
            </Button>
            <Button selected={true}>
                <FontAwesomeIcon icon={faClock}/>
                <Label>Statistic</Label>
            </Button>
            <Button>
                <FontAwesomeIcon icon={faGear}/>
                <Label>Setting</Label>
            </Button>
        </Container>
    )
}

export default Footer;
