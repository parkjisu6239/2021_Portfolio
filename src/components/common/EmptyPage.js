import { Link } from "react-router-dom";

export default function Empty() {
    return (
        <article>
            아이고 잘 못 들어와버렸지 뭐야!
            홈으로 돌아가렴
            <Link to="/">돌아가기</Link>
        </article>
    )
}