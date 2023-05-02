import React, {useEffect, useState} from "react";
import BotsCollection from "./BotsCollection";
import MyBotsArmy from "./MyBotsArmy";


function Fetch() {
    
    const [bots, setBots] = useState([])
    const [myBotsArmy, setMyBotsArmy] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(res => res.json())
        .then(data => {setBots(data)})
    },[])
    
    const botsElement = bots.map(bot => {
        return <BotsCollection 
        key={bot.id} 
        bot={bot}
        AddMyBot={AddMyBot}
        deleteBot={deleteBot}/>
    })
    
    function AddMyBot(item) {
        if (!myBotsArmy.includes(item)) {
            setMyBotsArmy(prevState => {
            return [...prevState, item]
          })
       }
    }

    const myBotElement = myBotsArmy.map((bot, index) => {
        return <MyBotsArmy 
        key={index}
        mybot={bot}
        removeMyBot={removeMyBot} />
    })

    function removeMyBot(element) {

        setMyBotsArmy(prevState => {
            return prevState.filter(bot => bot !== element);
        });
        
    }

    function deleteBot(id) {
        fetch(`http://localhost:3000/bots/${id}`, {
            method: "DELETE",
        })
        //.then((res)=>res.json())
        .then(() =>{
            const updatedBots = bots.filter(bot => bot.id !== id)
            setBots(updatedBots)
        })
        console.log('clicked');
    }




    return (
        <div className="bots-containers">
            
            <div className='bots-collection'>
            {botsElement}
            </div>
            <div className="bots-collection">
            {myBotElement}
            </div>
            
        </div>
    )
}

export default Fetch;