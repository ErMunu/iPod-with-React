import "../assets/css/Themes.css"

function Themes(props) {
    const { active } = props;
    return (
        <div className="music">
            <h2>Theme Select</h2>
            <ul>
                {
                    [
                        "TURQUOISE",
                        "EMERALD",
                        "PETER RIVER",
                        "AMETHYST",
                        "WET ASPHALT"
                    ].map(
                        (element, index) => {
                            return <li
                                key={index}
                                className={
                                    active === index ? "active theme-li" : "theme-li"
                                }
                            >{element}</li>
                        }
                    )
                }
            </ul>
        </div>

    )
}


export default Themes;