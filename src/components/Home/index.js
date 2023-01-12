import {useState} from 'react'

import InputEmoji from 'react-input-emoji'

import {v4} from 'uuid'

import {AiOutlineCloseCircle} from 'react-icons/ai'

import Popup from 'reactjs-popup'

import Header from '../Header'

import Message from '../Message'

import './index.css'

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]

const color_list = ['red','blue','green','skyblue','violet']

const Home = () => {

    const [text,setText] = useState('')
    const [messages_list,setMessages_list] = useState([])
    const [isShow,setIsShow] = useState(false)
    const date = new Date()

    const handleOnEnter = event => {
        const random = Math.ceil(Math.random()*5)
        const minutes = date.getMinutes()
        const hours = date.getHours()
        //console.log(hours,minutes)
        const newItem = {
            id : v4(),
            message : event,
            name : user_list[random-1],
            time : hours+":"+minutes,
            color: color_list[random-1]
        }
        setMessages_list((prev) => ([...prev,newItem]))
    }
    
    const h = e => {
        if (e.key === "@") {
            console.log("You have to Implement it")
            setIsShow(true)
        } else {
            text.replace("@","")
            setText(text)
            setIsShow(false)
            
        }
    }
    
    const res = messages_list.length > 0
        return (
            <div className='bg-container'>
                <Header people={messages_list.length} />
                <div className='card-1'>
                    {res ? (
                        <ul className='list-container'>
                            {messages_list.map(e => (
                                <Message key={e.id} mess={e} />
                            ))}
                        </ul>
                    ) : ""}
                </div>
                <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Type Message"
                    className="emoji-input"
                    onKeyDown={h}
                />
                {isShow && (
                    <Popup modal open={isShow}>
                        {close => (
                            <div className='container-popup'>
                                <ul className='popup-list'>
                                    {user_list.map(e => (
                                        <li className='li-pp'>{e}</li>
                                    ))}
                                </ul>
                                <AiOutlineCloseCircle onClick={() => close()} />
                            </div>
                        )}
                    </Popup>
                )}
            </div>
    )
    
}


export default Home
