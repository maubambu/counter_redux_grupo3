export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INPUT_CHANGE = "INPUT_CHANGE";

const Increment = () => ({
    type: "INCREMENT",
})

const Decrement = () => ({
    type: "DECREMENT",
})
const InputChange = (stepValue = 1) => ({
    type: "INPUT_CHANGE",
    stepValue
})

export { Increment as increment, Decrement as decrement, InputChange as inputChange };