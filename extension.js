/* extension.js
 *
 */

/* exported init */

const Lang = imports.lang;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const St = imports.gi.St;
const Clutter = imports.gi.Clutter;

class Extension {
  constructor() {
    //log("entering constructor");
    this.monitor = Main.layoutManager.primaryMonitor;
    this.size = 1;
    this.delay = 5;
    this.goLeft = true; // whether or not to go left next time we move
    this.dot = null;
    this._timeout = null;
    //log("exiting constructor");
  }

  _changeDirection() {
    //log("in _changeDirection");
    //let [xPos, yPos] = this.dot.get_position();
    //log(xPos);
    let newX = (this.goLeft) ? 0 : this.monitor.width - this.size;

    if (this.dot !== null) {
      //log("in _changeDirection (this.dot not null)");
      //let [xPos, yPos] = this.dot.get_position();
      //log(xPos);
      // for some reason, the first time (and only the first time) this is called, x ends up at 0 at the end
      this.dot.ease({
        x: newX,
        //opacity: 100,
        duration: 30000,
        mode: Clutter.AnimationMode.LINEAR
      });
      this.goLeft = !this.goLeft;
      //log("in _changeDirection - done with this.dot.ease");
      //[xPos, yPos] = this.dot.get_position();
      //log(xPos);
      this._timeout = Mainloop.timeout_add_seconds(this.delay, Lang.bind(this, this._changeDirection));
    }
  }

  enable() {
    //log("entering enable");
    this.dot = new St.Bin({
      style: 'background-color: #101010', // #101010 - very slightly less dark than the top bar
      x: (this.monitor.width - this.size) / 2, // half way across
      y: 0,
      reactive: false,
      can_focus: false,
      track_hover: false,
      width: this.size,
      height: this.size,
    });

    Main.layoutManager.addChrome(this.dot, {
      affectsInputRegion: true,
      trackFullscreen: true,
    });
    this._changeDirection();
    //log("exiting enable");
  }

  disable() {
    //log("entering disable");
    if (this._timeout !== null) {
      Mainloop.source_remove(this._timeout);
      this._timeout = null;
    }
    Main.layoutManager.removeChrome(this.dot);
    this.dot = null;
    //log("exiting disable");
  }
}

function init() {
  return new Extension();
}
