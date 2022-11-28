import {useNavigate} from "react-router-dom";
import '../css/BriefRoomInfo.css'

/**
 * 예약화면에서 예약에 대한 정보를 요약해서 보여주는 컴포넌트
 * @param room
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
export const BriefRoomInfo = ({room, id}) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate(`/Product/${id}`)
    }
    return (
        <div className="room-info" style={{height: 100}}>
            <img src={room.images.length > 0 ? room.images[0] : ""} width={100} height={100} onClick={onClick}/>
            <span onClick={onClick}>{room.name}</span>
        </div>)
}