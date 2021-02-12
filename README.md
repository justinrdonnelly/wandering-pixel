# Wandering Pixel
Wandering Pixel is a GNOME Shell extension that moves 1 pixel back and forth along the top of the screen. The purpose of this is to work around [Mutter issue 1516](https://gitlab.gnome.org/GNOME/mutter/-/issues/1516) and/or [GNOME Shell issue 3369](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/3369), by forcing part of the screen to be redrawn constantly. It's 1 pixel, and it's only slightly less dark than the top bar, so you should never notice it.

I've never written a GNOME Shell extension before and really just fumbled through this. PRs to improve it are welcome!

## Installation
1. Download the extension and copy it (or create a symlink) to your GNOME Shell extensions directory: `cp -r <path-to-extension-directory> ~/.local/share/gnome-shell/extensions/wandering-pixel@justinrdonnelly.github.com`
2. Restart GNOME Shell: On X11: `Alt`+`F2`&rarr;`r`&rarr;`Enter`; On Wayland: Log out and back in
3. Enable the extension via [GNOME Tweaks](https://wiki.gnome.org/Apps/Tweaks), [GNOME Extensions](https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/master/subprojects/extensions-app), or command line: `gnome-extensions enable wandering-pixel@justinrdonnelly.github.com`
