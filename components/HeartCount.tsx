
export default function HeartCount({ heartCount }) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return (
        <p className="heart-count">💗 {`${formatter.format(heartCount)}`}</p>
    );
}