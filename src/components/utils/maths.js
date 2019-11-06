const maths = {
    roi: (income, price) => {
        const ROI = parseFloat(((income / price) * 100 * 12).toFixed(1))
        if (ROI !== 0 && ROI !== -Infinity && ROI !== Infinity) {
            return ROI
        } else return 0
    }
}
export default maths
