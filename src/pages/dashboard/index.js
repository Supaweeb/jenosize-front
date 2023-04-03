import styled, { css } from 'styled-components'
import Header from '../../components/header'
import TopBar from '../../components/topbar'
import Footer from '../../components/footer'
import HeaderButton from '../../components/headerButton'
import Card from '../../components/card'
import Chart from '../../components/chart'
import { Container, Row, Col } from 'react-grid-system'
import axios from 'axios';
import { useEffect } from 'react'
import { faThumbsUp, faComment, faGift, faGem } from '@fortawesome/free-solid-svg-icons'

const data = [
    {name: '10', point: 100},
    {name: '11', point: 150},
    {name: '12', point: 700},
    {name: '13', point: 180},
    {name: '14', point: 300},
    {name: '15', point: 150},
    {name: '16', point: 200}
];

const FetchPlace = () => {
    const url = 'https://serious-bearing-382407.as.r.appspot.com'
    const id = 'ChIJCfMIUqpLHTER1CLBYOCii-8'
    axios.get(`${url}/place/${id}`, {
        headers: {
            'api-key': 'AIzaSyAhU-bD9IcC1vusN_mdmcCEOUch3li26xM'
        }
    }).then((data) => {
        console.log(data)
    }).catch((error) => console.log( error ) );
}

const Report = () => {
    useEffect(() => {
        FetchPlace()
    }, [])

    return (
        <>
            <Header/>
            <TopBar/>
            {/* <HeaderButton/> */}
            {/* <Chart select="point" data={data}/> */}
            <Container>
                <Row>
                    <Col xs={ 6 } md={ 3 }>
                        <Card icon={faThumbsUp} title={"Like"} number={"43"} subtitle={"Likes"}/>
                    </Col>
                    <Col xs={ 6 } md={ 3 }>
                        <Card icon={faComment} title={"Comment"} number={"56"} subtitle={"Comments"}/>
                    </Col>
                    <Col xs={ 6 } md={ 3 }>
                        <Card icon={faGift} title={"Point"} number={"450"} subtitle={"Point"}/>
                    </Col>
                    <Col xs={ 6 } md={ 3 }>
                        <Card icon={faGem} title={"Diamond"} number={"40"} subtitle={"Diamond"}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Report