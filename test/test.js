// console.log(ZDYJS.wgs2gcj(106.32974, 30.14993));
// console.log(ZDYJS.gcj2wgs(106.427244, 29.558156));
// [map.getCenter().lng, map.getCenter().lat]
let v1 = ZDYJS.bd2gcj({ lon: 108.388411, lat: 30.821049})
// console.log(v1)

console.log(ZDYJS.gcj2wgs(v1.lon,v1.lat))

// console.log(ZDYJS.gcj2wgs(106.586196, 29.56853));
// console.log(ZDYJS)
console.log(ZDYJS.jinzhiChange('E108°22′31″','N30°49′7″'))