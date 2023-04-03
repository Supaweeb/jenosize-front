import Button from './button'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faGift, faGem } from '@fortawesome/free-solid-svg-icons'

const ContainerButton = styled.div`
    display: flex;
    padding: 0 1em;
    overflow: scroll;
`

const HeaderButton = (props) => {
    return (
        <>
            <ContainerButton>
                <Button icon={faThumbsUp} text={"Like"} active={props.value==="Like"} onClick={props.onClick}/>
                <Button icon={faComment} text={"Comment"} active={props.value==="Comment"} onClick={props.onClick}/>
                <Button icon={faGift} text={"Point"} active={props.value==="Point"} onClick={props.onClick}/>
                <Button icon={faGem} text={"Diamond"} active={props.value==="Diamond"} onClick={props.onClick}/>
            </ContainerButton>
        </>
    )
}

export default HeaderButton