export const mts2G = (z, x, y) => `http://tiles.mts.ru/G2_New/${z}/${x}/${y}/`
export const mts3G = (z, x, y) => `http://tiles.mts.ru/G3_New/${z}/${x}/${y}/`
export const mts4G = (z, x, y) => `http://tiles.mts.ru/LTE_New/${z}/${x}/${y}/`
export const mts4GPlan = (z, x, y) => `http://tiles.mts.ru/LTE_Plan_New/${z}/${x}/${y}/`

// 2G map uses hatching for zones with no signal and transparent pixels for zone where signal present.
export const megafon2G = (z, x, y) => `http://yamap.megafon.ru/g2/${z}/${x}/${y}/`
export const megafon3G = (z, x, y) => `http://yamap.megafon.ru/g3/${z}/${x}/${y}/`
export const megafon4G = (z, x, y) => `http://yamap.megafon.ru/lte/${z}/${x}/${y}/`
export const megafon4GPlus = (z, x, y) => `http://yamap.megafon.ru/lte_plus/${z}/${x}/${y}/`
