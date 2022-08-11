import Navbar from './Navbar';
import Menu from './Menu';
import Music from './Music';
import Songs from './Songs';
import Settings from './Settings';
import Playing from './Playing';
import Themes from './Themes';
import WheelColor from './WheelColor';
import LockScreen from './LockScreen';
import Wallpaper from './Wallpaper';
import "../assets/css/Display.css";

/* On the basis of what the current menu item,component will be rendered.
Also this will display the navigation bar.
Keys to display menu:
-2 : lock screen
-1 : main menu
0 : now playing
1 : music menu
2,5,6 : dummy menu
3 : setings menu
4 : songs menu
7 : music playing
8 : themes menu
9 : wheel color menu
10 : wallpaper menu */

function Display(props) {
    const {
        active,
        currentMenu,
        menuItems,
        musicItems,
        songItems,
        playing,
        songIndex,
        audio,
        songUrl,
        songImgUrl,
        wallpaper,
        wallpaperItems,
        noty,
        setNoty,
        notifyText
    } = props;

    return (
        <div style={{ backgroundImage: `url(${wallpaperItems[wallpaper]})` }} className="display">
            <Navbar
                noty={noty}
                setNoty={setNoty}
                playing={playing}
                notifyText={notifyText}
            />

            {currentMenu === -2 && <LockScreen />}

            {currentMenu === -1 &&
                <Menu
                    songImgUrl={songImgUrl}
                    menuItems={menuItems}
                    active={active}
                />
            }

            {currentMenu === 1 &&
                <Music
                    musicItems={musicItems}
                    active={active}
                />
            }

            {currentMenu === 2 &&
                <div className="blank-div">
                    <h1 className="empty-text">
                        Games
                    </h1>
                </div>
            }

            {currentMenu === 3 && <Settings active={active} />}

            {currentMenu === 4 &&
                <Songs
                    songItems={songItems}
                    active={active}
                />
            }

            {currentMenu === 5 &&
                <div className="blank-div">
                    <h1 className="empty-text">
                        Artists
                    </h1>
                </div>
            }

            {currentMenu === 6 &&
                <div className="blank-div">
                    <h1 className="empty-text">
                        Albums
                    </h1>
                </div>
            }

            {(currentMenu === 0 || currentMenu === 7) &&
                <Playing
                    songImgUrl={songImgUrl}
                    audio={audio}
                    songUrl={songUrl}
                    playing={playing}
                    songIndex={songIndex}
                    songItems={songItems}
                />
            }

            {currentMenu === 8 && <Themes active={active} />}

            {currentMenu === 9 && <WheelColor active={active} />}

            {currentMenu === 10 && <Wallpaper active={active} />}

        </div>
    )
}


export default Display;