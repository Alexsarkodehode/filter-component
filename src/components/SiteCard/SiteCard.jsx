import useData from "../../hooks/useData";
import styles from "./siteCard.module.css";

export default function SiteCard() {
    const data = useData("/mockDatabase1.json");
    // const { data, error, isLoading } = useData("http://localhost:5173/src/Data/mockDatabase1.json");

    console.log(data);

    return (
        <>
            {
                <ol>
                    {data.isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        data.data.map((card, index) => (
                            <li key={index}>
                                <h2 className={styles.name}>{card.name}</h2>
                                <p className={styles.text}>{card.quote}</p>
                                <img
                                    className={styles.img}
                                    src={card.imageUrl}
                                    alt={card.name}
                                />
                            </li>
                        ))
                    )}
                </ol>
            }
        </>
    );
}