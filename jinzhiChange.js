/**
 * @desc   将度分秒转化为10进制度
 * @param  {E108°22′31″,N30°49′7″}
 * @return {lng,lat}
 */

function jinzhiChange(E,N) {
     return { lng: DegreeConvertBack(E.split('E')[1]), lat: DegreeConvertBack(N.split('N')[1])}
 }
function DegreeConvertBack(value) { ///<summary>度分秒转换成为度</summary>
    console.log(value)
    var du = value.split("°")[0];
    var fen = value.split("°")[1].split("′")[0];
    var miao = value.split("°")[1].split("′")[1].split('″')[0];

    return Math.abs(du)  + Math.abs(fen) / 60 + Math.abs(miao) / 3600;
}

module.exports = jinzhiChange;