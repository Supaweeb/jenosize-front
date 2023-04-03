import styled, { css } from 'styled-components'
import color from '../constants/constatnt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Button from './button'

const Container = styled.div`
    padding: 0 1em;
    text-align: start;
    display: grid;
    margin: 1em 0;

    .images {
        margin: 1em 0;
        display: flex;
        * {
            margin-right: 1em;
        }
    }

    .file {
        margin: 1em 0;
    }
    .file > .label {
        color: ${color.primary};
    }
    .footer {
        display: flex;
        padding-top: 1em;
        justify-content: space-between;

        .footer-button {
            display: flex;
            font-size: 15px;
            justify-content: center;
            align-items: center;
            .date {
                color: ${color.secondary};
            }
            .like {
                color: ${color.primary};
            }
        }
    }
`

const Title = styled.label`
    color: ${color.secondary};
`

const Label = styled.label`
    color: ${color.black};
`

const Image = styled.img`
    width: 100px;
    height: 100px;
`

const Profile = styled.div`
    display: flex;
    // justify-content: center;
    padding: 0.5em 0;
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
`

const Content = (props) => {
    return (
        <Container>
            {
                props.profile && <>
                    <Profile>
                        <img className='image' src="https://www.tech101.in/wp-content/uploads/2018/07/blank-profile-picture.png"/>
                        <div className='profile'>
                            <label><b>{props.profile.name}</b><span>, {props.profile.job}</span></label>
                            <label>Daily Request</label>
                        </div>
                    </Profile>
                </>
            }
            {
                props.title && <>
                    <Title>
                        {props.title}
                    </Title>
                </>
            }
            {
                props.content && <>
                    <Label>
                        {props.content}
                    </Label>
                </>
            }
           
            {
                props.images && <>
                    <div className='images'>
                        {
                            props.images.map((image) => {
                                return <>
                                    <Image src={image.src}/>
                                </>
                            })
                        }
                    </div>
                </>
            }
            {
                props.file && <>
                    <div className='file'>
                        <FontAwesomeIcon icon={faPaperclip} style={{paddingRight: "1em"}}/>
                        <label className='label'>{props.file}</label>
                    </div>
                </>
            }
            {
                props.footer && <>
                    <div className='footer'>
                        <div className='footer-button'>
                            <label className='date' style={{ marginRight: "1em" }}>2 day ago</label>
                            <div className='like'>like</div>
                        </div>
                        <div className='footer-button'>
                            <Button icon={faComment} text={"Reply"} onClick={() => console.log("+ point")}/>
                            <Button icon={faThumbsUp} text={"Like"} onClick={() => console.log("+ point")}/>
                        </div>
                    </div>
                </>
            }
        </Container>
    )
}

export default Content
