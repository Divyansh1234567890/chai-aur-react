import React from 'react'
import ReactDOM  from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}
 const anotherUser = 'chai aur code'
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
