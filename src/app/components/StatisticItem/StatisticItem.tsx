import LineChart from "../LineChart/LineChart";
import styles from "./StatisticItem.module.css";

interface StatisticItemProps {
    title: string,
    change: number,
    rpm: number,
    icon: string,
    chartDate: number[],
    time?: string,
    index?: number
}

export const StatisticItem: React.FC<StatisticItemProps> = ({
    title,
    change,
    rpm,
    icon,
    chartDate,
    time,
    index
}) => {

    const isoDateString = time ? time : '';

    let result = ''

    if(time){
        const date = new Date(isoDateString);

        const formattedDateDay = date.toLocaleDateString('ru-RU', { day: 'numeric' });
        const formattedDateMon = date.toLocaleDateString('ru-RU', { month: 'long' });
    
        result = `По сравнению с ${formattedDateDay} ${formattedDateMon}`;
    }

    


    const abbreviateNumber = (num: number) => {
        if (num < 1e3) return num; 
        if (num >= 1e6) return (num / 1e6).toFixed(0) + ' M';
        if (num >= 1e3) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); 
    };

    return(
        <div className={styles.stc__item}>
            <div className={styles.stc__sum}>
                <div className={styles.img}>
                    <img src={icon} alt="" />
                </div>
                <h3>{abbreviateNumber(rpm)} ₽  </h3>
            </div>
            <div className={styles.stc__change}>
                <span>{title}</span>
                <b>{change < 0 ? change: '+' + change} %</b>
            </div>

            <div className={styles.chart__container } >
                <LineChart chartDate={chartDate} index={index} />
            </div>

            <span className={styles.data__info}>
                {result}
            </span>
        </div>
    )
}