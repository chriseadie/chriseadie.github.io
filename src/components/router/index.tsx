import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { App } from '../../app'
import { CodeSnippetSearch } from '../Pages/CodeSnippets'
import { Base } from '../template.component'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Base><App/></Base>
    },
    {
        path:"/code-snippets",
        element:<Base><CodeSnippetSearch/></Base>
    }
])