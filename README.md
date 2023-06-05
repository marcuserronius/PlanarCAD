# WebCAD
Simple web-based drawing for 2D design
## Why?
I searched high and low for a simple 2D drawing app for designing for a laser cutter. I wanted precise layouts, boolean operations on paths, and parametric designs. Since I couldn't find one I liked, I decided to try to make my own. My intended recipe here is two parts OpenSCAD, one part Inkscape.
Planned features:
- Support for all SVG shapes
- All shapes can be part of boolean gemetry operations like Union, Intersect, Difference.
- Simple variables, loops, and conditionals for implementing parametric designs.
- Export to SVG.
- Saving as a text file similar to OpenSCAD.

## Roadmap:
Planned features, in order of likelyhood or distance in future:
- Parsing the file format, and drawing supported primitives of SVG format.
- Boolean operations on primitives
- Conditionals
- Loops/iterations
- Variables
- Graphical editing of primitives
- Implementation of snapping in graphical edit mode
- Basic constraints
- Simple functions
- Custom shape definitions, like OpenSCAD modules
