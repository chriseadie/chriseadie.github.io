import React from 'react'
import { NavigationBar } from './Navigation/navbar.component'
import { Footer } from './Footer/footer.component'
import { SideNavigation } from './Navigation/sidemenu.component'

export function Base({children}:{children:JSX.Element|JSX.Element[]}){
    return (
        <>
            <NavigationBar/>
                <div>
                    {children}
                </div>
            <SideNavigation/>
            <Footer/>
        </>
    )
}