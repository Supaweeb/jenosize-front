import styled, { css } from 'styled-components'
import Header from '../../components/header'
import Content from '../../components/content'
import Line from '../../components/line'
import Button from '../../components/button'
import color from '../../constants/constatnt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faChevronRight, faGift, faImages, faPaperclip, faAt } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1em;
`

const CotainerView = styled.div`
    background-color: ${color.blue_light};
    color: ${color.secondary};
    height: 2.5em;
    margin-bottom: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5em;

    .view {
        display: flex;
    }
    .view-button {
        color: ${color.primary};
    }
`

const LineVertical = styled.hr`
    text-align: center;
    border: 1px solid ${color.secondary};
    height: 1em;
    margin: 0 0.5em;
`

const View = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 0 0.5em;
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;

    .profile {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .date {
        width: 100%;
        display: flex;
        flex-direction: column;
        color: ${color.secondary};
        text-align: end;
        font-size: 12px;
    }

    
    .image {
        padding: 0.1em;
        margin-right: 0.75em;
        width: 2.5em;
        height: 2.5em;
        background-color: ${color.secondary};
        border-radius: 50%;
    }
`

const Comment = styled.div`
    height: 2em;
    color: ${color.secondary};
    font-size: 25px;
    margin: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;

    * {
        padding: 0 0.25em;
    }
`

const Input = styled.input`
    color: ${color.secondary};
    height: 2.5em;
    padding: 0 1em;
    border: 1px solid ${color.secondary};
    border-radius: 10px;
`

const Report = (props) => {
    const data = [
        {title: 'Content 1', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
        {title: 'Content 2', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {title: 'Content 3', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
    ]
    const images = [
        { src: "https://www.touchtaiwan.com/images/default.jpg" },
        { src: "https://www.touchtaiwan.com/images/default.jpg" },
        { src: "https://www.touchtaiwan.com/images/default.jpg" }
    ]
    const profile = {
        name: "Supawee",
        job: "Tester"
    }
    return (
        <>
            <Header hasBack={true} header={"OKRs Report"}/>
            <Card>
                <img className='image' src="https://www.tech101.in/wp-content/uploads/2018/07/blank-profile-picture.png"/>
                <div className='profile'>
                    <b>Ekarach Sripen</b>
                    <label>Design direction</label>
                </div>
                <div className='date'>
                    <label>14/01/2020</label>
                    <label>12:45</label>
                </div>
            </Card>
            {
                data.map((content, index) => {
                    return <Content title={content.title} content={content.content} key={index}/>
                })
            }
            <Content title={'Image'} images={images}/>
            <Content title={'Attach file'} file={"Update Design OKRs.pdf"}/>
            <CotainerView>
                <div className='view'>
                    <View>Read (12)</View>
                    <LineVertical/>
                    <View>Unread (25)</View>
                    <LineVertical/>
                    <View>Likes (2)</View>
                </div>
                <div className='view-button'>
                    View
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </CotainerView>
            <Container>
                <Button icon={faGift} active={props.value==="Point"}  text={"Give point"} onClick={() => console.log("+ point")} styled={{ width: "30%", textAlign: "center"}}/>
                <Button icon={faThumbsUp} active={props.value==="Like"}  text={"Like"} onClick={() => console.log("+ like")} styled={{ width: "30%", textAlign: "center"}}/>
            </Container>
            <Line/>
            {
                data.map((content, index) => {
                    return <>
                        <Content profile={profile} content={content.content} key={index} footer={true}/>
                        {
                            index !== data.length - 1 && <Line style={{ margin: "1em"}}/>
                        }
                    </>
                })
            }
            <Line style={{ margin: "0.5em 0" }}/>
            <Comment>
                <FontAwesomeIcon icon={faImages}/>
                <FontAwesomeIcon icon={faPaperclip}/>
                <FontAwesomeIcon icon={faAt}/>
                <Input placeholder='Comment'/>
            </Comment>
        </>
    )
}

export default Report
