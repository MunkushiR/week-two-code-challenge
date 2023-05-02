import React from 'react';

function BotsCollection({bot, AddMyBot, deleteBot}) {
    return (
        <div className='each-bot'>
            <img src={bot.avatar_url} alt="Avatar Loading..." onClick={()=> AddMyBot(bot)}/>
            <h5>{bot.name}</h5>
            <p>{bot.catchphrase}</p>
            <span>
                <p><i className="fa fa-heartbeat" aria-hidden="true"></i>{bot.health}</p>
                <p><i className="fa fa-bolt" aria-hidden="true"></i>{bot.damage}</p>
                <p><i className="fa fa-shield" aria-hidden="true"></i>{bot.armor}</p>
            </span>
            <button onClick={()=>deleteBot(bot.id)} >X</button>
        </div>
    )
}

export default BotsCollection;