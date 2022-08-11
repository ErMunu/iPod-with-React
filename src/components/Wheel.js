import React from 'react';
import "../assets/css/Wheel.css"
import ZingTouch from 'zingtouch';

// Render wheel control
class Wheel extends React.Component {
    constructor() {
        super();
        this.angle = 0;
    }

    // Bind components with zingtouch logic
    componentDidMount() {
        const { changeMenuBackward, togglePlayPause, seekSongForward, seekSongReverse } = this.props;
        const wheelcontrol = this.wheelcontrol;
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        const menuIcon = document.getElementById("menu");
        const playPause = document.getElementById("play-pause");
        const reverse = document.getElementById("reverse");
        const forward = document.getElementById("forward");

        const longTapGesture = new ZingTouch.Tap({
            maxDelay: 10000,
            numInputs: 1,
            tolerance: 1,
        })

        activeRegion.bind(menuIcon, 'tap', function (e) {
            changeMenuBackward();
        });
        activeRegion.bind(wheel, 'rotate', function (e) {
            wheelcontrol(e);
        });
        activeRegion.bind(playPause, 'tap', function (e) {
            togglePlayPause();
        });

        activeRegion.bind(reverse, longTapGesture, function (e) {
            seekSongReverse(e);
        });

        activeRegion.bind(forward, longTapGesture, function (e) {
            seekSongForward(e);
        });


    }

    render() {
        const {
            changeMenuForward,
            active,
            currentMenu,
            theme,
            wheelColor
        } = this.props;

        return (
            <div className="wheel-container" id="wheel-container">
                <div style={{ backgroundColor: wheelColor }} className="wheel" id="wheel" >
                    <div className="control" id="menu">
                        <div style={{ color: theme }}>MENU</div>
                    </div>
                    <div className="control" id="forward">
                        <i style={{ color: theme }} className="fas fa-fast-forward"></i>
                    </div>
                    <div className="control" id="play-pause">
                        <div>
                            <i style={{ color: theme }} className="fas fa-play"></i>
                            <i style={{ color: theme }} className="fas fa-pause"></i>
                        </div>
                    </div>
                    <div className="control" id="reverse">
                        <i style={{ color: theme }} className="fas fa-fast-backward"></i>
                    </div>
                </div>

                <div
                    style={{ backgroundColor: theme }}
                    className="blank"
                    id="blank"
                    onClick={() => { changeMenuForward(active, currentMenu) }}
                ></div>
            </div>
        )
    }

    // control the wheel roatation rotation action
    wheelcontrol = (e) => {
        const { updateActiveMenu, currentMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        }
    }
}


export default Wheel;