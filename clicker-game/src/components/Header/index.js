import React from "react";


function Header(props) {
    return (
        <nav className={props.nav}>
            <div className="container">
                <div className={props.row}>
                    <div className={props.column} id="navElement"><h1 onClick={props.refreshPage}> <span>Skate Brand Memory Game</span> </h1>
                    </div>
                    <div className={props.column} id="navElement"><h3>Click an image to begin</h3>
                    </div>
                    <div id="navElement"><h3>Score: {props.score} | Top Score: {props.topScore} </h3>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;