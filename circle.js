
const circleArea = ((ref) => {

    let islem = Math.PI * (ref * ref)
    console.log("Dairenin alanı = " + islem)

})

// Daire Çevre
const circleCircumference = ((ref) => {

    let islem = 2 * Math.PI * ref;
    console.log("Dairenin çevresi = " +islem)

})

module.exports = {
    circleArea,
    circleCircumference
}