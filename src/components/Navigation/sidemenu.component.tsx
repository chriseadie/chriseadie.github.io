import React from 'react'
import { Link } from 'react-router-dom'

export function SideNavigation() {
    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/code-snippets">Code Snippets</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
