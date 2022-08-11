import "../assets/css/Settings.css"

function Settings(props) {
    const { active } = props;
    return (
        <div className="settings">
            <h2>Settings</h2>
            <ul>
                <li className={active === 0 ? "active" : ""}>Theme</li>
                <li className={active === 1 ? "active" : ""}>Wheel Color</li>
                <li className={active === 2 ? "active" : ""}>Wallpaper</li>
            </ul>
        </div>

    )
}

export default Settings;