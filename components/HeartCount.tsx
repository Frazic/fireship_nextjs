import { formatNumber } from "../lib/utils";

export default function HeartCount({ heartCount }) {
    return <p className="heart-count">💗 {`${formatNumber(heartCount)}`}</p>;
}