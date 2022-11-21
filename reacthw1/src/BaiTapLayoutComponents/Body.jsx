import React, { Component } from 'react'
import Baner from './Baner'
import Item from './Item'

export default class Body extends Component {
    render() {
        return (
            <div>
                <div>
                    <Baner />
                </div>
                <div className='row'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>

            </div>
        )
    }
}
