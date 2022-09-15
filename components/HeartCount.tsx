import { numberFormatter } from "../lib/utils";

export default function HeartCount({ heartCount }) {
    return <p className="heart-count">💗 {`${numberFormatter(heartCount)}`}</p>;
}