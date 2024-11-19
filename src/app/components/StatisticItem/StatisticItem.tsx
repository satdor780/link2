import LineChart from "../LineChart/LineChart";
import styles from "./StatisticItem.module.css";

interface StatisticItemProps {
    title: string,
    change: number,
    rpm: number,
    icon: string,
    chartDate: number[],
    time?: string
}

export const StatisticItem: React.FC<StatisticItemProps> = ({
    title,
    change,
    rpm,
    icon,
    chartDate,
    time,
}) => {

    const isoDateString = time ? time: "2023-11-10T12:00:00Z";

    const date = new Date(isoDateString);

    const formattedDate = date.toLocaleDateString('ru-RU');

    const result = `По сравнению с ${formattedDate}`

    return(
        <div className={styles.stc__item}>
            <div className={styles.stc__sum}>
                <div className={styles.img}>
                    <img src={icon} alt="" />
                </div>
                <h3>{rpm} ₽ </h3>
            </div>
            <div className={styles.stc__change}>
                <span>{title}</span>
                <b>{change} %</b>
            </div>

            <div className={styles.chart__container } >
                <LineChart chartDate={chartDate} />
            </div>

            <span className={styles.data__info}>
                {result}
            </span>
        </div>
    )
}