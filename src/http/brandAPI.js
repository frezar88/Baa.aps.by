import {$host, $authHost} from "./index";
import {CURRENT_YEAR_MONTH,CURRENT_YEAR_MONTH_2022} from "../utils/consts"

export const bands = async () => {
    const response = await $host.get('/server/brands')
    return response
}
export const num_of_days_to_send_stat = async () => {
    const response = await $authHost.get('/server/stat/num-of-days-to-send')
    return response
}

export const models = async (id) => {
    const response = await $authHost.get(`/server/models?brand_id=${id}`)
    return response
}
export const bodyTypes = async () => {
    const response = await $authHost.get(`/server/body-types`)
    return response
}
export const carTypes = async () => {
    const response = await $authHost.get(`/server/car-types`)
    return response
}
export const getCars = async () => {
    const response = await $authHost.get(`/server/cars`)
    return response
}
export const sendStatic = async (data) => {
    const response = await $authHost.post(`/server/write-sales-stat`, data)
    return response
}
export const getStatic = async () => {
    const response = await $authHost(`/server/sales-stats`)
    return response
}
// export const getStaticForYear = async () => {
//     const response = await $authHost(`/server/sales-stats?date_from=1577826000&date_to=1631048500`)
//     return response
// }
export const getStaticForYear = async () => {
    const response = await $authHost(`/server/sales-stats?date_from=1577826000&date_to=${CURRENT_YEAR_MONTH.december}`)
    return response
}

export const sendActiveCar = async (data) => {
    const response = await $authHost.get(`/server/car/toggle-on-sale?car_id=${data}`)
    return response
}

export const getStatistInAllTime = async (year) => {
    const response = await $authHost.get(`/server/sales-stats?date_from=${year}`)
    return response
}


export const getFillingStatistic = async (date) => {
    const response = await $authHost.get(`/server/stat/filling?timestamp=${date}`)
    return response
}
export const getAllStatistic = async (to) => {
    const response = await $authHost.get(`/server/stat/common?from=${to}&by_month=1&type=brand`)
    return response
}
export const getAllStatisticPc = async (from) => {
    const response = await $authHost.get(`/server/stat/common?from=${from}&by_month=1&type=brand&car_type_id=1`)
    return response
}
export const getAllStatisticLcv = async (from) => {
    const response = await $authHost.get(`/server/stat/common?from=${from}&by_month=1&type=brand&car_type_id=2`)
    return response
}

export const getAllStatisticForGraphics = async () => {
    const response = await $authHost.get(`/server/stat/common?type=brand`)
    return response
}
export const getAllStatisticForGraphicsMonth = async (from, to) => {
    const response = await $authHost.get(`/server/stat/common?from=${from}&to=${to}&type=brand`)
    return response
}
export const getAllStatisticModelForGraphics = async () => {
    const response = await $authHost.get(`/server/stat/common?type=model`)
    return response
}
export const getAllStatisticLcvOrPcForGraphics = async () => {
    const response = await $authHost.get(`/server/stat/common?type=car`)
    return response
}
export const getAllStatisticLcvOrPcForGraphicsMonth = async (from, to) => {
    const response = await $authHost.get(`/server/stat/common?from=${from}&to=${to}&type=car`)
    return response
}
export const getAllStatisticDealers = async () => {
    const response = await $authHost.get(`/server/stat/common?type=brand_dealer`)
    return response
}
export const getAllStatisticDealersValue = async () => {
    const response = await $authHost.get(`/server/stat/common?type=brand_dealer&by_month=1&`)
    return response
}
export const getAllStatisticModel = async () => {
    const response = await $authHost.get(`/server/stat/common?type=car`)
    return response
}
export const getAllStatisticModelValue = async (from) => {
    const response = await $authHost.get(`/server/stat/common?by_month=1&from=${from}&type=car`)
    return response
}
export const sendFeedBack = async (text) => {
    const response = await $authHost.post(`/server/feedback`, text)
    return response
}
export const getStatisticForCompare = async (from, to, brand_id) => {
    const response = await $authHost.get(`/server/stat/common?by_month=1&from=${from}&to=${to}&type=brand&brand_id=${brand_id}`)
    return response
}
export const getStatisticForCompareAndCarType = async (from, to, brand_id,car_type) => {
    const response = await $authHost.get(`/server/stat/common?by_month=1&from=${from}&to=${to}&type=brand&brand_id=${brand_id}&car_type_id=${car_type}`)
    return response
}
export const getStatisticForCompareModel = async (from, to, model_id) => {
    const response = await $authHost.get(`/server/stat/common?by_month=1&from=${from}&to=${to}&type=model&model_id=${model_id}`)
    return response
}
export const getStatisticForCompareModelCarType = async (from, to, model_id,car_type) => {
    const response = await $authHost.get(`/server/stat/common?by_month=1&from=${from}&to=${to}&type=model&model_id=${model_id}&car_type_id=${car_type}`)
    return response
}
export const getCarSubType = async () => {
    const response = await $authHost.get(`/server/car-subtypes`)
    return response
}







