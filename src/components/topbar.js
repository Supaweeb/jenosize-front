import styled, { css } from 'styled-components'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Date from './date'
import ArrowButton from './arrowButton'
import { faList, faSignalPerfect, faChevronLeft, faChevronRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import color from '../constants/constatnt'

const Container = styled.div`
    border: 2px solid;
    border-color: ${color.secondary};
    border-top: none;
    border-left: none;
    border-right: none;
    border: ${props => !!props.borderless ? "none" : null};
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: space-evenly;
    margin: auto;

    .icon {
        padding-top: 1em;
        color: ${color.secondary};
        display: flex;
        width: 100%;
        justify-content: end;
        > * {
            margin: 0.5em;
        }

        .active {
            color: ${color.primary};
        }
    }

    .perior {
        padding-top: 1em;
        color: ${color.secondary};
        display: flex;
        width: 100%;
        margin: 0 1.5em;
        
        .active {
            color: ${color.black};
            border-bottom: 2px solid ${color.primary};
        }

        .date {
            text-align: center;
            display: flex;
            flex-direction: column;
            // margin: 0 0.25em;
            padding: 5px 5px;
            border-radius: 50%;

            * {
                padding: 3.5px 4px;
                display: inline-block;
                border-radius: 50%;
                display: inline-block;
            }

            .date-selected {
                border: 1px solid ${color.primary};
                background-color: ${color.primary};
                color: ${color.white};
                // border-radius: 50%;
                // display: inline-block;
            }

            .date-select {
                border: 1px solid ${color.primary};
                color: ${color.black};
                // border-radius: 50%;
                // display: inline-block;
            }

            .day {
                font-size: 10px;
                color: ${color.black};
            }
        }
    }
    .nopadding {
        padding: 0;
    }

    .navigate {
        display: flex;
        position: relative;
        color: ${color.secondary};

        > span {
            font-size: 12px;
            color: ${color.primary};
        }
        
        .active {
            color: ${color.primary};
        }
    }

    .left {
        top: 28px;
        left: 10px;
    }
    .right {
        top: 28px;
        right: 10px
    }
`

const Button = styled.div`
    width: 50%;
    text-align: center;
    position: relative;
    margin: auto;
    cursor: pointer;
    color: ${props => props.selected ? `${color.primary}` : `${color.secondary}`};
`

const Line = styled.hr`
    border: 1px solid ${color.secondary};
    height: 1.5em;
    margin: auto;
`

const Label = styled.label`
    color: ${color.primary};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    cursor: pointer;
    width: 3em;
    border-bottom: 2px solid ${color.secondary};

    .active {
        color: ${color.black};
        border-bottom: 2px solid ${color.primary};
    }
`

const Spacer = styled.label`
    color: ${color.secondary};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    width: 3em;
    border-bottom: 2px solid ${color.secondary};
`

const TopBar = () => {
    return (
        <>
            <Container>
                <Button selected={false}>Submission</Button>
                <Line/>
                <Button selected={true}>Engagement</Button>
            </Container>
            <Container borderless={true}>
                <div className='perior'>
                    <Label className={"active"}>Daily</Label>
                    <Spacer/>
                    <Label>Weekly</Label>
                    <Spacer/>
                    <Label>Monthly</Label>
                </div>
                <div className='icon'>
                    <FontAwesomeIcon icon={faSignalPerfect} className={`${typeof window !== "undefined" && window.location.pathname === "/report/statistic" ? "active" : null}`} onClick={() => Router.push("/report/statistic")}/>
                    <FontAwesomeIcon icon={faList} className={`${typeof window !== "undefined" && window.location.pathname === "/report" ? "active" : null}`} onClick={() => Router.push("/report")}/>
                </div>
            </Container>
            <Container borderless={true} >
                <div className='navigate left'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className='perior nopadding'>
                    <div className='date'>
                        <span className='day'>M</span>
                        <span className='date-selected'>17</span>
                    </div>
                    <div className='date'>
                        <span className='day'>T</span>
                        <span className='date-select'>18</span>
                    </div>
                    <div className='date'>
                        <span className='day'>W</span>
                        <span>19</span>
                    </div>
                    <div className='date'>
                        <span className='day'>TH</span>
                        <span>20</span>
                    </div>
                    <div className='date'>
                        <span className='day'>F</span>
                        <span>21</span>
                    </div>
                    <div className='date'>
                        <span className='day'>S</span>
                        <span>22</span>
                    </div>
                    <div className='date'>
                        <span className='day'>S</span>
                        <span>23</span>
                    </div>
                </div>
                <div className='navigate right'>
                    <FontAwesomeIcon icon={faChevronRight} style={{marginRight:"35px"}}/>
                    <FontAwesomeIcon icon={faArrowDown} className={"active"}/>
                    <span>Today</span>
                </div>
            </Container>
            <ArrowButton/>
            <Date/>
        </>
    )
}

export default TopBar;
