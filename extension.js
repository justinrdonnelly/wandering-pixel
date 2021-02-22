'use strict';

const Clutter = imports.gi.Clutter;
const Lang = imports.lang;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const St = imports.gi.St;

class Extension {
    //// Public methods ////
    // instantiate the extension
    constructor() {
        //log("entering constructor");
        this._monitor = Main.layoutManager.primaryMonitor;
        this._size = 1; // size of the pixel
        this._delay = 60; // how many seconds to take for the pixel to move across the entire screen
        this._goLeft = null; // whether or not to go left next time we change directions
        this._pixel = null; // the pixel
        this._timeout = null; // timeout for when to change directions
        //log("exiting constructor");
    }

    // enable the extension
    enable() {
        //log("entering enable");
        this._goLeft = false; // start at left, so go right first
        // instantiate a container, but we won't be putting an actor in it
        this._pixel = new St.Bin({
            style: 'background-color: #101010', // #101010 - very slightly less dark than the top bar
            x: 0, //start at left
            y: 0,
            reactive: false,
            can_focus: false,
            track_hover: false,
            width: this._size,
            height: this._size,
        });
        this._pixel.set_easing_duration(this._delay * 1000);
        this._pixel.set_easing_mode(Clutter.AnimationMode.LINEAR);

        Main.layoutManager.addChrome(this._pixel, {
            affectsInputRegion: true,
            trackFullscreen: true,
        });

        // if we don't wait, for some reason the first call to _changeDirection doesn't seem to respect duration and the pixel won't move for the entire first iteration
        this._timeout = Mainloop.timeout_add_seconds(1, Lang.bind(this, this._changeDirection));
        //log("exiting enable");
    }

    // disable the extension
    disable() {
        //log("entering disable");
        if (this._timeout !== null) {
            Mainloop.source_remove(this._timeout);
            this._timeout = null;
        }
        Main.layoutManager.removeChrome(this._pixel);
        this._pixel = null;
        //log("exiting disable");
    }

    //// Private methods ////
    // change the direction of the pixel
    _changeDirection() {
        //log("entering _changeDirection");
        const newX = (this._goLeft) ? 0 : this._monitor.width - this._size;

        if (this._pixel !== null) {
            this._pixel.ease({
                x: newX
            });
            this._goLeft = !this._goLeft;
            this._timeout = Mainloop.timeout_add_seconds(this._delay, Lang.bind(this, this._changeDirection));
        }
        //log("exiting _changeDirection");
    }

}

function init() {
    return new Extension();
}
