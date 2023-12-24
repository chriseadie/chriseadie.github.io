import React from 'react'
import './nav.styles.css'

export function NavigationBar(){

    return (
        <div className='p-2 fixed_nav' >
            <button className="btn btn-plain" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    )
}