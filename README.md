# Final Fantasy X Speedrun Tracker
This Tracker is intended to help with speedrunning Final Fantasy X

## Features:
- Any%, No Sphere Grid and Nemesis Categories
- Works on Mobile
- OBS Browser Source Support
- Saving and Resetting entered values

## How to use:
Choose your Category at the top, then start to update your Items / Encounters / Overdrives as you get or use them.  
In the case of the No Sphere Grid Encounter-Counter there are some counters that are locked, that is because those areas have a set amount of encounters that should not change.  
There is also a "Total" counter that automatically calculates the total Encounters.  
You can use tab / shift+tab to go back and forth and use the arrow keys to increase/decrease values.  
Make sure to save from time to time in case your Browser or OBS source crashes.

## OBS Browser Source:
Add a "Browser Source" Source to your Scene in OBS, tick the "Local File" checkbox and browse to the file, untick the "Shutdown source when not visible" checkbox.  
Then use the following Custom CSS:  
```css
body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; }
```
Adjust the width and height to your needs, the layout should adjust.  
Right click on the Source and select "Interact" to enter values.

## Known Problems:
- Overlapping Text or weird line breaks on some resolutions
- Calculated Encounter Total sometimes updates delayed when used in a OBS Browser Source
- Worse clickability on sliders when used in a OBS Browser Source
- Accidental inputs when scrolling the nemesis page on mobile (just scroll on the left)
- Internet Explorer is a really bad Browser

## Other
Feel free to contact me on Discord if you have Problems, Questions or Ideas on how to improve this tool.  
Made by shenef#1269 using MaterializeCSS.  
Thanks to Madhyama for helping with testing and the selection of things to track.
