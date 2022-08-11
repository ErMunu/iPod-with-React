import "../assets/css/Menu.css"
import game from "../assets/images/icons/game.jpg"
import music from "../assets/images/icons/music.jpg"
import settings from "../assets/images/icons/settings.png"

function Menu(props) {
    const { active, menuItems, songImgUrl } = props;
    return (

        <div className="menu-container">
            <div className="menu">
                <ul>
                    {
                        menuItems.map((element, index) => {
                            return <li
                                key={index}
                                className={active === index ? "active" : ""}
                            >{element}</li>
                        })}
                </ul>
            </div>
            <div className="leaf">
                {active === 0 && <img className="leaf-img" src={songImgUrl} alt=""></img>}
                {active === 1 && <img className="leaf-img" src={music} alt=""></img>}
                {active === 2 && <img className="leaf-img" src={game} alt=""></img>}
                {active === 3 && <img className="leaf-img" src={settings} alt=""></img>}
            </div>
        </div>
    )

}


export default Menu;