import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faHouseChimney, faAngleDown, faChevronLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import color from '../constants/constatnt'
import Router from 'next/router'

const Container = styled.div`
    background-color: ${color.primary};
    height: 7em;
    position: relative;
    width: auto;
`

const Headers = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 1.5em;
    color: ${color.white};
    bottom: 1em;

    .back {
        margin-left: 1em;
        cursor: pointer;
    }
`

const Selection = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = (props) => {
    return (
        <>
            {
                props.hasBack ? (<>
                    <Container>
                        <Headers>
                            <div className='back' onClick={() => Router.push('/report')}> 
                                <FontAwesomeIcon icon={faChevronLeft} style={{ paddingRight: "1em" }}/>
                                <label>Back</label>
                            </div>
                            <Selection>
                                {props.header}
                            </Selection>
                            <FontAwesomeIcon icon={faEllipsis} style={{ paddingRight: "1em" }}/>
                        </Headers>
                    </Container>
                </>) : (
                    <>
                        <Container>
                            <Headers>
                                <FontAwesomeIcon icon={faHouseChimney} style={{ paddingLeft: "1em" }}/>
                                <Selection>
                                    All Report <FontAwesomeIcon icon={faAngleDown} style={{ paddingLeft: "1em", height: "1em", margin: "0 auto", display: "block" }}/>
                                </Selection>
                                <FontAwesomeIcon icon={faSliders} style={{ paddingRight: "1em" }}/>
                            </Headers>
                        </Container>
                    </>
                )
            }
        </>
    )
}

export default Header;
