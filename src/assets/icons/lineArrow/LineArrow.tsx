interface Props{
  color?:"white"|"dark";
}
const LineArrow = ({color="dark"}:Props) => {
  return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2827 5L20.9998 12L14.2827 19" stroke={color==="white"?"#FCFCFC":"#14142B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<line x1="19.7329" y1="12.0317" x2="3.99985" y2="12.0317" stroke={color==="white"?"#FCFCFC":"#14142B"} strokeWidth="2" strokeLinecap="round"/>
</svg>

  )
}

export default LineArrow