export interface IStatisticItem {
    name: string,
    title: string;
    change: number;
    rpm: number;
    icons: string;
    chartDate: number[];
    time?: string;
}