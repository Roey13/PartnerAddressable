import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadItems, setItem } from '../store/actions/itemActions.js'
import loading from '../assets/img/loading.gif'

export const Home = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.itemModule)


    useEffect(() => {
        dispatch(loadItems())
    }, [dispatch])

    const handleClick = (item) => {
        dispatch(setItem(item._id))
    }

    if (!items) return <div className="loading">
        <img className='loading-img' src={loading} alt="" />
    </div>


    return (
        <div className="home">
            <div className="container">
                {items.map(item => {
                    return (
                        <Link to={`/${item.channelId}`} onClick={() => { handleClick(item) }} className="button" key={item.channelId}>
                            <div>{item.channelName}</div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}