'use client'

import { StatisticItem } from "../components/StatisticItem/StatisticItem";
import { useAppSelector } from "./hooks";
import styles from "./page.module.css";

export default function Home() {
  const statistic = useAppSelector(state => state.statistic.data)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.statistic__container}>
          {statistic ? statistic.map((item, index) => (
            <StatisticItem 
              key={item.title}
              title={ item.title } 
              change={item.change} 
              rpm={item.rpm} 
              icon={item.icons}
              chartDate={item.chartDate}
              time={item.time}
              index={index}
            />
          )): (
            <p>loading...</p>
          )}
        </div>
      </main>
    </div>
  );
}
