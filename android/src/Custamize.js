import * as React from "react";
import Svg, {G,Path,Defs,ClipPath,title} from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={18} height={18} 
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}
    >

      <Path
        fill="#2DBCA2"
        stroke="#2DBCA2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={59}
        d="M368 368L144 144m224 0L144 368"
      />
    </Svg>
  )
}

export default SvgComponent
