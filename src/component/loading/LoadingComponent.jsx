import React from 'react'
import { useSelector } from 'react-redux'
import styleLoading from './loading.module.css'

export default function LoadingComponent() {

    const { isLoading } = useSelector(state => state.LoadingReducer);
    if (isLoading) {
        return <div className={styleLoading.bgLoading}>
            <img style={{ width: '200px' }} src={require('../../assets/loading/hie-dev.gif')} alt="loading" />
        </div>
    }

    return ""
}
