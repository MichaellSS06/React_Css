import { useState } from "react"

export function TwitterFollowCard({children, username="unknown"}){
    const [isFollowing, setIsFollowing] = useState(false)
    

    const text = isFollowing? "Siguiendo":"Seguir"
    const buttonClassName = isFollowing? "button is-following" : "button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="card" >
            <header className="header">
                <img className="avatar" src="https://saveitfrom.com/wp-content/uploads/2024/09/icon_192-150x150.png" alt="test" />
                <div className="info">
                    <strong>{children}</strong>
                    <span className="inforusername">@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="button-text">{text}</span>
                    <span className="button-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
                       
            
        </article> 
    )
}