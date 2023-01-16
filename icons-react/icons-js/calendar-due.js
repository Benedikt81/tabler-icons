import * as React from "react";

function IconCalendarDue({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-due" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={5} width={16} height={16} rx={2} /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><circle cx={12} cy={16} r={1} /></svg>;
}

export default IconCalendarDue;