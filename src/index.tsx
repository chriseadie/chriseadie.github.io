import React from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import "./app.css"

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <div id="site-wrap">
        <div className="banner">
            <div className="banner__text">
                <h1>Hello</h1>
                <h1>I am</h1>
                <h1>Chris Eadie</h1>
                <h2>Front End Web Developer</h2>
            </div>
        </div>
    </div>
)