import {IoPeopleOutline} from 'react-icons/io5'

import './index.css'

const Header = (props) => {
    const {people} = props
    return (
        <>
            <div className='header-container'>
                <div>
                    <p className='header-para-1'>Introductions</p>
                    <p className='header-para-2'>This Channel Is For Company Wide Chatter </p>
                </div>
                <div className='card-2-header'>
                    <p>{people} | 100</p>
                    <IoPeopleOutline className='header-icon' />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header 