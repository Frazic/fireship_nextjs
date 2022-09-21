import { formatNumber } from "../lib/utils";

export default function HeartCount({ heartCount }) {
    return <p className="heart-count" title={"Hearts: " + heartCount}>💗 {`${formatNumber(heartCount)}`}</p>;
}