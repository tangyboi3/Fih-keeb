module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    BAT_N: { type: 'net', value: "GND"},
    BAT_P: { type: 'net', value: "BAT_P" },
    P1: { type: 'net', value: "JST1" },
    P2: { type: 'net', value: "JST2" },
    P21: { type: 'net', value: "JST1" },
    P22: { type: 'net', value: "JST2" },
    P31: { type: 'net', value: "JST1" },
    P32: { type: 'net', value: "JST2" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "JSTPH2"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(duplicate_pad_numbers_are_jumpers no)`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at -1 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.25 1.25) (drill 0.75) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})`);
fp.push(`(pad "2" thru_hole circle (at 1 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.25 1.25) (drill 0.75) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})`);
fp.push(`(pad "21" smd custom (at -1 ${flipN(flip, -2)} ${flipR(flip, p.r + 0)}) (size 0.1 0.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.2)}) (xy 0 ${flipN(flip, -0.4)}) (xy 0.6 ${flipN(flip, 0.2)})) (width 0) (fill yes)))  ${p.P21})`);
fp.push(`(pad "22" smd custom (at 1 ${flipN(flip, -2)} ${flipR(flip, p.r + 0)}) (size 0.1 0.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.2)}) (xy 0 ${flipN(flip, -0.4)}) (xy 0.6 ${flipN(flip, 0.2)})) (width 0) (fill yes)))  ${p.P22})`);
fp.push(`(pad "31" smd custom (at -1 ${flipN(flip, -2)} ${flipR(flip, p.r + 0)}) (size 0.1 0.1) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.2)}) (xy 0 ${flipN(flip, -0.4)}) (xy 0.6 ${flipN(flip, 0.2)})) (width 0) (fill yes)))  ${p.P31})`);
fp.push(`(pad "32" smd custom (at 1 ${flipN(flip, -2)} ${flipR(flip, p.r + 0)}) (size 0.1 0.1) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.4)}) (xy -0.6 ${flipN(flip, 0.2)}) (xy 0 ${flipN(flip, -0.4)}) (xy 0.6 ${flipN(flip, 0.2)})) (width 0) (fill yes)))  ${p.P32})`);
fp.push(`(pad "BAT_P" smd custom (at -1 ${flipN(flip, -3.016)} ${flipR(flip, p.r + 0)}) (size 1.2 0.5) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 1)}) (xy 0 ${flipN(flip, 0.4)}) (xy 0.6 ${flipN(flip, 1)})) (width 0) (fill yes)))  ${p.BAT_P})`);
fp.push(`(pad "BAT_P" smd custom (at 1 ${flipN(flip, -3.016)} ${flipR(flip, p.r + 0)}) (size 1.2 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 1)}) (xy 0 ${flipN(flip, 0.4)}) (xy 0.6 ${flipN(flip, 1)})) (width 0) (fill yes)))  ${p.BAT_P})`);
fp.push(`(pad "BAT_N" smd custom (at -1 ${flipN(flip, -3.016)} ${flipR(flip, p.r + 0)}) (size 1.2 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 1)}) (xy 0 ${flipN(flip, 0.4)}) (xy 0.6 ${flipN(flip, 1)})) (width 0) (fill yes)))  ${p.BAT_N})`);
fp.push(`(pad "BAT_N" smd custom (at 1 ${flipN(flip, -3.016)} ${flipR(flip, p.r + 0)}) (size 1.2 0.5) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 0)}) (xy -0.6 ${flipN(flip, 1)}) (xy 0 ${flipN(flip, 0.4)}) (xy 0.6 ${flipN(flip, 1)})) (width 0) (fill yes)))  ${p.BAT_N})`);

// Drawings on B.SilkS
fp.push(`(fp_line (start -3 ${flipN(flip, -6.25)}) (end -2 ${flipN(flip, -6.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -3 ${flipN(flip, -5.25)}) (end -3 ${flipN(flip, -6.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -3 ${flipN(flip, -0.25)}) (end -3 ${flipN(flip, -1.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -2 ${flipN(flip, -0.25)}) (end -3 ${flipN(flip, -0.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -0.5 ${flipN(flip, -7.25)}) (end -1.5 ${flipN(flip, -7.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 1 ${flipN(flip, -6.75)}) (end 1 ${flipN(flip, -7.75)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 1.5 ${flipN(flip, -7.25)}) (end 0.5 ${flipN(flip, -7.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 2 ${flipN(flip, -6.25)}) (end 3 ${flipN(flip, -6.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 3 ${flipN(flip, -6.25)}) (end 3 ${flipN(flip, -5.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 3 ${flipN(flip, -1.25)}) (end 3 ${flipN(flip, -0.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 3 ${flipN(flip, -0.25)}) (end 2 ${flipN(flip, -0.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -3 ${flipN(flip, -6.25)}) (end -2 ${flipN(flip, -6.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3 ${flipN(flip, -5.25)}) (end -3 ${flipN(flip, -6.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3 ${flipN(flip, -1.25)}) (end -3 ${flipN(flip, -0.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2 ${flipN(flip, -0.25)}) (end -3 ${flipN(flip, -0.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, -7.25)}) (end -0.5 ${flipN(flip, -7.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1 ${flipN(flip, -7.75)}) (end -1 ${flipN(flip, -6.75)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.5 ${flipN(flip, -7.25)}) (end 1.5 ${flipN(flip, -7.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2 ${flipN(flip, -0.25)}) (end 3 ${flipN(flip, -0.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 3 ${flipN(flip, -6.25)}) (end 2 ${flipN(flip, -6.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 3 ${flipN(flip, -5.25)}) (end 3 ${flipN(flip, -6.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 3 ${flipN(flip, -0.25)}) (end 3 ${flipN(flip, -1.25)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -0.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "Untitled" (at 0 ${flipN(flip, 1)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }


