# Wandering Pixel
Wandering Pixel is a GNOME Shell extension that moves 1 pixel back and forth along the top of the screen. The purpose of this is to work around any of several issues in GNOME Shell and/or Mutter, by forcing part of the screen to be redrawn constantly. It's 1 pixel, and it's only slightly less dark than the top bar, so you should never notice it.

Bugs that can be worked around by Wandering Pixel:
- [GNOME Shell issue 3369](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/3369)
- [Mutter issue 1471](https://gitlab.gnome.org/GNOME/mutter/-/issues/1471)
- [Mutter issue 1516](https://gitlab.gnome.org/GNOME/mutter/-/issues/1516)
- [Mutter issue 1561](https://gitlab.gnome.org/GNOME/mutter/-/issues/1561)
- More? If you are aware of others, please let me know by opening an issue!

I've never written a GNOME Shell extension before and really just fumbled through this. PRs to improve it are welcome!

## Development Status
Per Daniel van Vugt, [All of the bugs that wandering-pixel aimed to work around were fixed in GNOME 40, and then fixed in update 3.38.4](https://bugs.launchpad.net/ubuntu/+source/gnome-shell/+bug/1938352/comments/7). In order to support GNOME 42, changes are required that break releases prior to 3.36. Since Wandering Pixel is a workaround for bugs in older versions of GNOME, new releases will not be created that break older versions. I've made a branch for GNOME 42+ that people can use if they find Wandering Pixel useful on newer versions of GNOME. Or, better yet, open an issue and I'll reconsider making new releases again.

## Installation
The recommended installation method is to install via the official [GNOME Extension page](https://extensions.gnome.org/extension/4028/wandering-pixel/).

For a manual installation, follow these instructions:
1. Download the extension and copy it (or create a symlink) to your GNOME Shell extensions directory: `cp -r <path-to-extension-directory> ~/.local/share/gnome-shell/extensions/wandering-pixel@justinrdonnelly.github.com`
2. Restart GNOME Shell: On X11: `Alt`+`F2`&rarr;`r`&rarr;`Enter`; On Wayland: Log out and back in
3. Enable the extension via [GNOME Tweaks](https://wiki.gnome.org/Apps/Tweaks), [GNOME Extensions](https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/master/subprojects/extensions-app), or command line: `gnome-extensions enable wandering-pixel@justinrdonnelly.github.com`

## Limitations and Side Effects
- Does not work when applications are in full-screen mode. This prevents GNOME animations.
- Increases CPU usage.
- Reduces frame rates.

## Troubleshooting
1. Confirm the Wandering Pixel extension is enabled.
2. Confirm GNOME animations are enabled.
3. Confirm GNOME animations are working.
   - Test another extension that uses animations (e.g. Example 7 from [here](https://gitlab.com/justperfection.channel/how-to-create-a-gnome-extension-documentation/-/tree/master/Examples) - note the youtube video that demonstrates the difference when animations are enabled).

## License
This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
