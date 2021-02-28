# Wandering Pixel
Wandering Pixel is a GNOME Shell extension that moves 1 pixel back and forth along the top of the screen. The purpose of this is to work around any of several issues in GNOME Shell and/or Mutter, by forcing part of the screen to be redrawn constantly. It's 1 pixel, and it's only slightly less dark than the top bar, so you should never notice it.

Bugs that can be worked around by Wandering Pixel:
- [GNOME Shell issue 3369](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/3369)
- [Mutter issue 1516](https://gitlab.gnome.org/GNOME/mutter/-/issues/1516)
- [Mutter issue 1561](https://gitlab.gnome.org/GNOME/mutter/-/issues/1561)
- More? If you are aware of others, please let me know by opening an issue!

I've never written a GNOME Shell extension before and really just fumbled through this. PRs to improve it are welcome!

## Installation
The recommended installation method is to install via the official [GNOME Extension page](https://extensions.gnome.org/extension/4028/wandering-pixel/).

For a manual installation, follow these instructions:
1. Download the extension and copy it (or create a symlink) to your GNOME Shell extensions directory: `cp -r <path-to-extension-directory> ~/.local/share/gnome-shell/extensions/wandering-pixel@justinrdonnelly.github.com`
2. Restart GNOME Shell: On X11: `Alt`+`F2`&rarr;`r`&rarr;`Enter`; On Wayland: Log out and back in
3. Enable the extension via [GNOME Tweaks](https://wiki.gnome.org/Apps/Tweaks), [GNOME Extensions](https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/master/subprojects/extensions-app), or command line: `gnome-extensions enable wandering-pixel@justinrdonnelly.github.com`

## Troubleshooting
1. Confirm the Wandering Pixel extension is enabled.
2. Confirm GNOME animations are enabled.
3. Confirm GNOME animations are working.
   - Test another extension that uses animations (e.g. Example 7 from [here](https://gitlab.com/justperfection.channel/how-to-create-a-gnome-extension-documentation/-/tree/master/Examples) - note the youtube video that demonstrates the difference when animations are enabled).
