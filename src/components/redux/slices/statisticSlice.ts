import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
import { IStatisticItem } from '@/types/types'



type StatisticState = {
    data: IStatisticItem[] | null;
}

const initialState: StatisticState = {
    data: [
        {
            name: 'turnover',
            title: "Оборот за месяц",
            change: +5,
            rpm: 430000000,
            icons: "/icons/wallet.svg",
            chartDate: [1, 14, 6, 1, 9, 2, 13, 4, 18, 12, 5, 8, 19, 0, 11, 13, 7, 15, 3, 16, 2, 5, 4, 0, 8, 15, 16, 3, 19, 6, 10, 1, 5, 9, 17, 4, 12, 13, 18, 6, 20, 1, 14, 5, 7, 16, 3, 8, 10, 19, 18, 9, 0, 12, 11, 2],
            time: "2023-10-10T12:00:00Z",
        },
        {
            name: 'turnover',
            title: "Выплаты за месяц",
            change: -5,
            rpm: 54000000,
            icons: "/icons/money-send.svg",
            chartDate: [15, 10, 9, 12, 11, 8, 7, 15, 10, 9, 12, 11, 8, 7],
            time: "2023-11-15T12:00:00Z",
        },
        {
            name: 'turnover',
            title: "Штрафы за месяц",
            change: -5,
            rpm: 154650,
            icons: "/icons/receipt-minus.svg",
            chartDate: [15, 10, 9, 12, 11, 8, 7, 15, 10, 9, 12, 11, 8, 7],
            time: "2023-11-10T12:00:00Z",
        },
        {
            name: 'turnover',
            title: "Штрафы за месяц",
            change: -5,
            rpm: 154650,
            icons: "/icons/receipt-minus.svg",
            chartDate: [15, 10, 9, 12, 11, 8, 7, 15, 10, 9, 12, 11, 8, 7],
            time: "2023-11-10T12:00:00Z",
        },
    ]
};


// const api: string = "/OjgexOZiAZ0jLkZwr0kSnDh5KkfOe8BLCsH+jIUM2k="

// export const fetchDate = createAsyncThunk<Coins>(
//     'coinsSlice/fetchDate',
//     async () => {
//         const responce = await axios.get('https://openapiv1.coinstats.app/coins?limit=10', {
//             method: 'GET',
//             headers: {
//               accept: 'application/json',
//               'X-API-KEY': api
//             }
//         })
//         return responce.data
//     }
// )

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    test: () => {
        console.log('test')
    }
  },
//   extraReducers: (builder) => {
//     builder.addCase(fetchDate.fulfilled, (state, action) => {
//       state.data = (action.payload)
//     })
//   },
})

export const { test } = statisticSlice.actions

export const selectCount = (state: RootState) => state.statistic.data

export default statisticSlice.reducer