import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.styles'
import ErrorBoundary from './errorBoundary'
import { App } from './app'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <ErrorBoundary>
        <App/>
    </ErrorBoundary>
)