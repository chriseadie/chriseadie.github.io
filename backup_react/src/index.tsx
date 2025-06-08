import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.styles'
import ErrorBoundary from './errorBoundary'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/router'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <ErrorBoundary>
        <RouterProvider router={router} />
    </ErrorBoundary>
)