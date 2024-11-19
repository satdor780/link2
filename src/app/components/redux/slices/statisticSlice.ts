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
            title: "Общая сумма",
            change: +5,
            rpm: 430,
            icons: "/icons/wallet.svg",
            chartDate: [0, 10, 7, 5, 1, 12, 15, 0, 10, 7, 5, 1, 12, 15],
            time: "2023-11-10T12:00:00Z",
        },
        {
            name: 'turnover',
            title: "Общая сумма",
            change: -5,
            rpm: 430,
            icons: "/icons/wallet.svg",
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