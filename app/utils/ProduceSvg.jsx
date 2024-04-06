import CartofSvg from "../../assets/cartof.svg"
import MarSvg from "../../assets/mar.svg"
import ArdeiSvg from "../../assets/ardei.svg"
//import CeapaSvg from "../../assets/ceapa.svg"
import MorcovSvg from "../../assets/morcov.svg"
import FasoleSvg from "../../assets/fasole.svg"

export const ProduceSvg = ({produce,height,width}) => {
    switch  (produce){
        case "mar":
            return <MarSvg height={height} width={width}/>
        case "cartof":
            return <CartofSvg height={height} width={width}/>
        case "ardei":
            return <ArdeiSvg height={height} width={width}/>
        case "morcov":
            return <MorcovSvg height={height} width={width}/>
        case "fasole":
            return <FasoleSvg height={height} width={width}/>
        default:
            return <MarSvg height={height} width={width}/>
    }
}