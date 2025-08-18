import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";


export function App () {
    const [name,setName] = useState("michaell")

    return (
        <div className="App">   
            <TwitterFollowCard username={name}>Miguel Angel</TwitterFollowCard>
            <TwitterFollowCard >Miguel Angel</TwitterFollowCard>
            <TwitterFollowCard  username={name}>Miguel Angel</TwitterFollowCard>
            <TwitterFollowCard  username={name}>Miguel Angel</TwitterFollowCard>

            <button onClick={()=> setName("pedromichel")}>
                Cambio Nombre
            </button>
        </div>
    )
}