import "../assets/css/Themes.css"

function WheelColor(props) {
    const { active } = props;
    return (
        <div className="music">
            <h2>Wheel Color Select</h2>
            <ul>
                {
                    [
                        "CLOUDS",
                        "SUN FLOWER",
                        "ALIZARIN",
                        "ASBESTOS"
                    ].map(
                        (element, index) => {
                            return <li
                                key={index}
                                className={
                                    active === index ? "active theme-li" : "theme-li"
                                }
                            >{element}</li>
                        })}
            </ul>
        </div>

    )
}


export default WheelColor;