module.exports = {
  params: {
    designator: 'PWR',
    side: 'F',
    BAT_P: { type: 'net', value: "BAT_P" },
    RAW: { type: 'net', value: "RAW" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SS12D00"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Pads
fp.push(`(pad "" thru_hole oval (at -2.54 ${flipN(flip, 0)} ${flipR(flip, p.r + 270)}) (size 1 1.5) (drill oval 0.5 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "BAT_P" thru_hole oval (at 2.54 ${flipN(flip, 0)} ${flipR(flip, p.r + 270)}) (size 1 1.5) (drill oval 0.5 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.BAT_P})`);
fp.push(`(pad "RAW" thru_hole oval (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 270)}) (size 1 1.5) (drill oval 0.5 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.RAW})`);

// Drawings on B.SilkS
fp.push(`(fp_line (start -4.25 ${flipN(flip, -2)}) (end -3.25 ${flipN(flip, -2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -4.25 ${flipN(flip, -1)}) (end -4.25 ${flipN(flip, -2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -4.25 ${flipN(flip, 2)}) (end -4.25 ${flipN(flip, 1)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -3.25 ${flipN(flip, 2)}) (end -4.25 ${flipN(flip, 2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 3.25 ${flipN(flip, -2)}) (end 4.25 ${flipN(flip, -2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 4.25 ${flipN(flip, -2)}) (end 4.25 ${flipN(flip, -1)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 4.25 ${flipN(flip, 1)}) (end 4.25 ${flipN(flip, 2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 4.25 ${flipN(flip, 2)}) (end 3.25 ${flipN(flip, 2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 6 ${flipN(flip, -1)}) (end 6 ${flipN(flip, 1)}) (stroke (width 0.5) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_circle (center -6 ${flipN(flip, 0)}) (end -5.65 ${flipN(flip, 1)}) (stroke (width 0.5) (type solid)) (fill no) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -4.25 ${flipN(flip, -2)}) (end -4.25 ${flipN(flip, -1)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.25 ${flipN(flip, 2)}) (end -4.25 ${flipN(flip, 1)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3.25 ${flipN(flip, -2)}) (end -4.25 ${flipN(flip, -2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3.25 ${flipN(flip, 2)}) (end -4.25 ${flipN(flip, 2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.25 ${flipN(flip, -2)}) (end 3.25 ${flipN(flip, -2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.25 ${flipN(flip, -2)}) (end 4.25 ${flipN(flip, -1)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.25 ${flipN(flip, 1)}) (end 4.25 ${flipN(flip, 2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.25 ${flipN(flip, 2)}) (end 3.25 ${flipN(flip, 2)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 6 ${flipN(flip, -1)}) (end 6 ${flipN(flip, 1)}) (stroke (width 0.5) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center -6 ${flipN(flip, 0)}) (end -5.65 ${flipN(flip, 1)}) (stroke (width 0.5) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

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