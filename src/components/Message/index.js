import { useState } from 'react'

import {SlLike} from 'react-icons/sl'

import './index.css'

const Message = props => {
    const {mess} = props 
    const {message,name,color,time} = mess
    const [isTrue,setIsTrue] = useState(false)

    return (
        <div className='ms-cont'>
            <div className='message-card-1'>
                    <p className={`para-1-mess ${color}`}>{name[0]}</p>
                    <p className='para-2-mess'>{name}</p>
                    <p className='para-3-mess'>{time}</p>
            </div>
            <div className='like-cont'>   
                <p className='l-para-mes-cont'>{message}</p>
                {isTrue ? (
                    <div className='like-cont'>
                        <SlLike className='like-butt-2' onClick={() => setIsTrue(val => !val)}  />
                        <p>1</p>
                    </div>
                    
                ) : (
                    <>
                    <SlLike className='like-butt-1'  onClick={() => setIsTrue(val => !val)} />
                    <p>0</p>
                    </>
                )}
            </div>
            
        </div>
    )
}

export default Message