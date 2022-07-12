import React from "react"
export default function Header() {
    return(
        <header>
            <nav className="nav">
                <img src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <span className="head-name">ReactFacts</span>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>                
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}