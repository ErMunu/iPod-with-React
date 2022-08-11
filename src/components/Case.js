import "../assets/css/Case.css"
import Wheel from './Wheel.js'
import Display from './Display.js'

// This function is the outer case of iPod it renders display and wheel component
function Case(props) {
    const {
        active,
        currentMenu,
        menuItems,
    } = props;

    return (
        <div className="case-container">
            <div style={{ backgroundColor: props.theme }} className="case">
                <Display
                    songIndex={props.songIndex}
                    playing={props.playing}
                    active={active}
                    musicItems={props.musicItems}
                    menuItems={menuItems}
                    currentMenu={currentMenu}
                    songItems={props.songItems}
                    audio={props.audio}
                    songUrl={props.songUrl}
                    songImgUrl={props.songImgUrl}
                    wallpaper={props.wallpaper}
                    wallpaperItems={props.wallpaperItems}
                    noty={props.noty}
                    setNoty={props.setNoty}
                    notifyText={props.notifyText}
                />
                <Wheel
                    theme={props.theme}
                    active={active}
                    menuItems={menuItems}
                    currentMenu={currentMenu}
                    changeMenuForward={props.changeMenuForward}
                    changeMenuBackward={props.changeMenuBackward}
                    updateActiveMenu={props.updateActiveMenu}
                    togglePlayPause={props.togglePlayPause}
                    seekSongForward={props.seekSongForward}
                    seekSongReverse={props.seekSongReverse}
                    wheelColor={props.wheelColor}
                />
            </div>
        </div>
    )
}

export default Case;