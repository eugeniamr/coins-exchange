const url = 'https://api.coincap.io/v2';

function getAssets(){
    return fetch (`${url}/assets?limit=20`) 
    .then(res => res.json())
    .then(res => res.data)
}

function getAsset(coin) {
    return fetch(`${url}/assets/${coin}`)
      .then(res => res.json())
      .then(res => res.data)
}

function getAssetHistory(coin) {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()
  
    return fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    )
      .then(res => res.json())
      .then(res => res.data)
}

const getMarkets = async coin => {
    let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    res = await res.json();
    return res.data;
}; // nos permite obtener las listas de mercados para una moneda en particular

  
const getExchange = async id => {
    let res = await fetch(`${url}/exchanges/${id}`);
    res = await res.json();
    return res.data;
}; // lo utilizamos en conjunto con getMarkets
   

export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}

