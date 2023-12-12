import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.styles'
import ErrorBoundary from './errorBoundary'
import { WeatherApi } from './apis/weatherapi/weatherapi'

var result = new WeatherApi();

(async () => {
    console.log(await result.getCurrentForcast())
})()

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <ErrorBoundary>
    <div id="site-wrap">
        <div className="banner">
            <div className="banner__text">
                <h1>Hello</h1>
                <h1>I am</h1>
                <h1>Chris Eadie</h1>
                <h2>Software Engineer</h2>
            </div>
        </div>
    </div>
    </ErrorBoundary>
)