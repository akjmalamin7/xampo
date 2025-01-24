interface Props{
  width?:string;
  height?:string;
  className?:string;
}
const PlayIcon = ({height,width,className}:Props) => {
  return (
    <svg width={width || "52"} height={height || "52"} className={className} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="26" fill="white"/>
    <path d="M33 24.3329C34.3333 25.1027 34.3333 27.0273 33 27.7971L23.9025 33.0495C22.5692 33.8193 20.9025 32.857 20.9025 31.3174V20.8126C20.9025 19.273 22.5692 18.3107 23.9025 19.0805L33 24.3329Z" fill="#0052CC"/>
    </svg>
    
  )
}

export default PlayIcon