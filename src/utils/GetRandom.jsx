
const GetRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    const randomElement = array[randomIndex];

    return randomElement
}
export default GetRandom