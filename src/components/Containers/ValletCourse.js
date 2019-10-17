import React from "react"
import { ValletCourse } from "../pages"
import { connect } from "react-redux"

const ValletCourseContainer = props => {
    return <ValletCourse {...props} />
}
const mapStateToProps = ({ serverMoney }) => ({
    valletCourse: serverMoney.valletCourse,
    btc_uah: serverMoney.btc_uah
})

export default connect(mapStateToProps)(ValletCourseContainer)
