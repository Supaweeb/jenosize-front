import Header from '../../components/header'
import TopBar from '../../components/topbar'
import Footer from '../../components/footer'
import HeaderButton from '../../components/headerButton'
import Chart from '../../components/chart'
import axios from 'axios';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faGift, faGem } from '@fortawesome/free-solid-svg-icons'
import color from '../../constants/constatnt'
import Router from 'next/router'

const Container = styled.div`
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Line = styled.hr`
    border: 1px solid ${color.secondary};
    height: 1.5em;
    // margin: auto;
    margin-right: 1em;
`

const Card = styled.div`
    font-size: 12px;
    width: 80%;
    margin: 0.5em;
    padding: 0.5em;
    border: 2px solid ${color.secondary};
    display: flex;
    align-items: center;

    .image {
        padding: 0.1em;
        margin-right: 0.75em;
        width: 2.5em;
        height: 2.5em;
        background-color: ${color.secondary};
        border-radius: 50%;
    }

    .profile {
        display: flex;
        flex-direction: column;
    }

    .number {
        text-align: end;
        min-width: 100px;
        width: fit-content;

        display: flex;
        justify-content: space-between;
    }
`

const Index = styled.div`
    border: 1px solid ${color.black};
    border-radius: 50%;
    height: 1em;
    width: 1em;
    padding: 0.25em;
    text-align: center;
    color: ${color.white};
    background-color: ${color.black};
`

const Content = styled.div`
    height: 360px;
    overflow: auto;
`

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
    const [selected, setSelected] = useState("Like")
    const array = [
        {id: 1, name: "Supawee", job: "Full stack", number: 12},
        {id: 2, name: "Borrisut", job: "Developer", number: 4},
        {id: 3, name: "Supawee", job: "Full stack", number: 12},
        {id: 4, name: "Supawee", job: "Full stack", number: 9},
        {id: 5, name: "Supawee", job: "Full stack", number: 0},
        {id: 6, name: "Supawee", job: "Full stack", number: 9},
        {id: 7, name: "Supawee", job: "Full stack", number: 19},
        {id: 8, name: "Supawee", job: "Full stack", number: 51},
    ]
    useEffect(() => {
        // FetchPlace()
    }, [selected])
    

    const _Card = (index, id, name, job, number) => {
        return (
            <Container onClick={() => Router.push(`/report/${id}`)}>  
                <Index>
                    {index}
                </Index>
                <Card>
                    <img className='image' src="https://www.tech101.in/wp-content/uploads/2018/07/blank-profile-picture.png"/>
                    <div className='profile'>
                        <label><b>{name}</b><span>, {job}</span></label>
                        <label>Daily Request</label>
                    </div>
                    <Line/>
                    <div className='number'>
                        {
                            selected === "Like" ? (
                                <>
                                    <FontAwesomeIcon icon={faThumbsUp} style={{color:`${color.primary}`, marginRight: "0.5em", fontSize: "1.25em"}}/>
                                    <label className='label'>{`${number} People likes`}</label>
                                </>
                            ) : null
                        }
                        {
                            selected === "Comment" ? (
                                <>
                                    <FontAwesomeIcon icon={faComment} style={{color:`${color.primary}`, marginRight: "0.5em", fontSize: "1.25em"}}/>
                                    <label className='label'>{`${number} Comment`}</label>
                                </>
                            ) : null
                        }
                        {
                            selected === "Point" ? (
                                <>
                                    <FontAwesomeIcon icon={faGift} style={{color:`${color.primary}`, marginRight: "0.5em", fontSize: "1.25em"}}/>
                                    <label className='label'>{`${number} Point`}</label>
                                </>
                            ) : null
                        }
                        {
                            selected === "Diamond" ? (
                                <>
                                    <FontAwesomeIcon icon={faGem} style={{color:`${color.primary}`, marginRight: "0.5em", fontSize: "1.25em"}}/>
                                    <label className='label'>{`${number} Diamond`}</label>
                                </>
                            ) : null
                        }
                    </div>
                </Card>
            </Container>
        )
    }

    return (
        <>
            <Header/>
            <TopBar/>
            <HeaderButton onClick={ (value) => setSelected(value)} value={selected}/>
            {/* <Chart select="point" data={data}/> */}
            <Content>
                {
                    array.map((element, index) => {
                        return _Card(index+1, element.id, element.name, element.job, element.number)
                    })
                }
            </Content>
            <Footer/>
        </>
    )
}

export default Report