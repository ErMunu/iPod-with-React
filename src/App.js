import React from 'react';

import './assets/css/App.css';

// Import iPod body file
import Case from './components/Case';

// Import songs
import song1 from './assets/songs/Ami Je Tomar.mp3';
import song2 from './assets/songs/Oh Antava Mava.mp3';
import song3 from './assets/songs/Chumma Chumma.mp3';
import song4 from './assets/songs/Kesariya.mp3';
import song5 from './assets/songs/Srivalli.mp3';

// Import song cover images
import song1Img from './assets/images/songCovers/ami.jpg';
import song2Img from  './assets/images/songCovers/oh.jpg';
import song3Img from './assets/images/songCovers/chumma.jpg';
import song4Img from './assets/images/songCovers/kesariya.jpg';
import song5Img from './assets/images/songCovers/srivalli.jpg';

// Import wallpapers
import Wallpaper1 from './assets/images/wallpapers/wallpaper1.jpg';
import Wallpaper2 from './assets/images/wallpapers/wallpaper3.jpg';
import Wallpaper3 from './assets/images/wallpapers/wallpaper4.jpg';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            //initilize active list item
            active: 0,
            menuItems: [
                'Now Playing',
                'Music',
                'Games',
                'Settings'
            ],
            musicItems: [
                'All Songs',
                'Artist',
                'Albums'
            ],
            //song list
            songItemsUrl: [
                song1,
                song2,
                song3,
                song4,
                song5
            ],
            //song cover photo list
            songImgItemsUrl: [
                song1Img,
                song2Img,
                song3Img,
                song4Img,
                song5Img
            ],
            //wallpaper list
            wallpaperItems: [
                Wallpaper1,
                Wallpaper2,
                Wallpaper3,
            ],
            //song name list
            songItems: [
                'Ami Je Tomar',
                'Oh Antava Mava',
                'Chumma Chumma',
                'Kesariya',
                'Srivalli'
            ],
            //surrent song index
            songIndex: 0,
            //length of a each menu
            lengthMenuKey: {
                '-1': 3,
                1: 2,
                4: 4,
                8: 4,
                3: 2,
                9: 3,
                10: 2
            },
            //menu can be rendered by which menu key
            menuMapping: {
                '-1': [0, 1, 2, 3],
                1: [4, 5, 6],
                3: [8, 9, 10]
            },
            currentMenu: -2,
            navigationStack: [],
            songUrl: song1,
            playing: false,
            theme: '#1abc9c',
            audio: new Audio(song1),
            songImgUrl: song1Img,
            wheelColor: '#ecf0f1',
            wallpaper: 0,
            noty: false,
            notifyText: 'Wallpaper Changed',
        };
    }

    // on long press of forward button fast forwards song
    seekSongForward = (e) => {
        if (this.state.currentMenu === -2) {
            return;
        }
        if (this.state.playing === false) {
            return;
        }
        if (e.detail.interval < 250) {
            this.state.audio.pause();
            let songIndex = this.state.songIndex;

            if (songIndex === this.state.songItemsUrl.length - 1) {
                songIndex = 0;
            } else {
                songIndex++;
            }

            const songUrl = this.state.songItemsUrl[songIndex];
            const songImgUrl = this.state.songImgItemsUrl[songIndex];

            this.setState({
                songIndex: songIndex,
                songImgUrl: songImgUrl,
                songUrl: songUrl,
                audio: new Audio(songUrl)
            }, () => {
                this.state.audio.play();
            });
        } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
            const interval = e.detail.interval / 100;
            this.setState(
                (prevState) => {
                    prevState.audio.currentTime += interval;
                    return prevState;
                }
            )
        }
    }

    // on long press of reverse button reverses song
    seekSongReverse = (e) => {
        if (this.state.currentMenu === -2) {
            return;
        }
        if (this.state.playing === false) {
            return;
        }

        if (e.detail.interval < 250) {
            this.state.audio.pause();
            let songIndex = this.state.songIndex;

            if (songIndex === 0) {
                songIndex = this.state.songItemsUrl.length - 1;
            } else {
                songIndex--;
            }

            const songUrl = this.state.songItemsUrl[songIndex];
            const songImgUrl = this.state.songImgItemsUrl[songIndex];

            this.setState({
                songIndex: songIndex,
                songImgUrl: songImgUrl,
                songUrl: songUrl,
                audio: new Audio(songUrl)
            }, () => {
                this.state.audio.play();
            });
        } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
            const interval = e.detail.interval / 100;
            this.setState((prevState) => {
                prevState.audio.currentTime -= interval;
                return prevState;
            })
        }
    }

    // play pause control
    togglePlayPause = () => {
        if (this.state.currentMenu === -2) {
            return;
        }
        if (this.state.playing === true) {
            this.setState({
                playing: false
            });
            this.state.audio.pause();
        }
        else {
            this.setState({
                playing: true
            });
            this.state.audio.play();
        }
    }

    // wheel rotation control
    updateActiveMenu = (direction, menu) => {

        if (menu !== -1 && menu !== 1 && menu !== 4 && menu !== 8 && menu !== 3 && menu !== 9 && menu !== 10) {
            return;
        }
        let min = 0;
        let max = 0;

        max = this.state.lengthMenuKey[menu];

        if (direction === 1) {
            if (this.state.active >= max) {
                this.setState({
                    active: min
                })
            } else {
                this.setState({
                    active: this.state.active + 1
                })
            }
        } else {
            if (this.state.active <= min) {
                this.setState({
                    active: max
                })
            } else {
                this.setState({
                    active: this.state.active - 1
                })
            }
        }
    }


    // set ipod body theme
    setTheme = (id) => {
        let theme = '';
        if (id === 0) {
            theme = '#1abc9c';
        }
        else if (id === 1) {
            theme = '#2ecc71'
        } else if (id === 2) {
            theme = '#3498db';
        } else if (id === 3) {
            theme = '#9b59b6';

        } else if (id === 4) {
            theme = '#34495e'
        }
        this.setState({
            theme: theme,
            noty: true,
            notifyText: 'Theme Changed'
        })
        return;
    }


    // set color of wheel
    setWheelColor = (id) => {
        let wheelColor = '';
        if (id === 0) {
            wheelColor = '#ecf0f1';
        }
        else if (id === 1) {
            wheelColor = '#f1c40f';
        } else if (id === 2) {
            wheelColor = '#e74c3c';
        } else if (id === 3) {
            wheelColor = '#7f8c8d';
        }
        this.setState({
            wheelColor: wheelColor,
            noty: true,
            notifyText: 'Wheel Color Changed'
        })
        return;
    }

    // set wallpaper from settings
    setWallpaper = (id) => {
        this.setState({
            wallpaper: id,
            noty: true,
            notifyText: 'Wallpaper Changed'
        });
        return;
    }

    // change current music
    chagePlayingSongFromMusicMenu = (id, navigationStack) => {
        const songUrl = this.state.songItemsUrl[id];
        const songImgUrl = this.state.songImgItemsUrl[id];
        this.state.audio.pause();
        this.setState({
            currentMenu: 7,
            songUrl: songUrl,
            navigationStack: navigationStack,
            active: 0,
            playing: true,
            songIndex: id,
            audio: new Audio(songUrl),
            songImgUrl: songImgUrl
        }, () => {
            this.state.audio.play();
        });
        return;
    }

    // change menu background
    changeMenuBackward = () => {
        const navigationStack = this.state.navigationStack.slice();

        if (this.state.currentMenu === -2) {
            return;
        }
        else {
            const prevId = navigationStack.pop();
            this.setState({
                currentMenu: prevId,
                navigationStack: navigationStack,
                active: 0
            });
            return;
        }

    }

    // change as per menu or center button press
    changeMenuForward = (id, fromMenu) => {

        const navigationStack = this.state.navigationStack.slice();

        if (
            fromMenu !== -2
            && fromMenu !== -1
            && fromMenu !== 1
            && fromMenu !== 4
            && fromMenu !== 3
            && fromMenu !== 8
            && fromMenu !== 9
            && fromMenu !== 0
            && fromMenu !== 7
            && fromMenu !== 10
        ) {
            return;
        }

        if (fromMenu === -2) {
            navigationStack.push(this.state.currentMenu);
            this.setState({
                currentMenu: -1,
                navigationStack: navigationStack,
                active: 0
            });
            return;
        }

        if (fromMenu === -1) {
            navigationStack.push(this.state.currentMenu);
            this.setState({
                currentMenu: id,
                navigationStack: navigationStack,
                active: 0
            });
            return;
        }

        if (fromMenu === 7 || fromMenu === 0) {
            this.togglePlayPause();
            return;
        }

        if (fromMenu === 8) {
            this.setTheme(id);
            return;
        }


        if (fromMenu === 9) {
            this.setWheelColor(id)
            return;
        }

        if (fromMenu === 10) {
            this.setWallpaper(id)
            return;
        }

        navigationStack.push(this.state.currentMenu);

        if (fromMenu === 4) {
            this.chagePlayingSongFromMusicMenu(id, navigationStack, fromMenu);
            return;
        }

        const currentMenuID = this.state.menuMapping[fromMenu][id];
        this.setState({
            currentMenu: currentMenuID,
            navigationStack: navigationStack,
            active: 0
        });

    }

    setNoty = () => {
        this.setState({
            noty: false
        });
        return;
    }

    render() {
        return (
            <div className='App'>
                
                <Case
                    songIndex={this.state.songIndex}
                    active={this.state.active}
                    menuItems={this.state.menuItems}
                    musicItems={this.state.musicItems}
                    currentMenu={this.state.currentMenu}
                    changeMenuForward={this.changeMenuForward}
                    changeMenuBackward={this.changeMenuBackward}
                    updateActiveMenu={this.updateActiveMenu}
                    togglePlayPause={this.togglePlayPause}
                    songItems={this.state.songItems}
                    playing={this.state.playing}
                    theme={this.state.theme}
                    audio={this.state.audio}
                    songUrl={this.state.songUrl}
                    songImgUrl={this.state.songImgUrl}
                    seekSongForward={this.seekSongForward}
                    seekSongReverse={this.seekSongReverse}
                    wheelColor={this.state.wheelColor}
                    wallpaper={this.state.wallpaper}
                    wallpaperItems={this.state.wallpaperItems}
                    noty={this.state.noty}
                    setNoty={this.setNoty}
                    notifyText={this.state.notifyText} />
            </div>
        );
    }
}

export default App;
