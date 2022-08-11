function Wallpaper(props) {
    const { active } = props;
    console.log(props);
    return (
        <div className="music">
            <h2>Wallpaper Select</h2>
            <ul>
                {
                    [
                        "Galaxy",
                        "Red iPod",
                        "Colors"
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


export default Wallpaper;