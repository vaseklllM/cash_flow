import React from "react"
import { connect } from "react-redux"
import { getCashFlow } from "../../action"
import { hocApp } from "../hoc"
import ActivePage from "../Active"

function App() {
    return (
        <div style={{ maxWidth: "700px" }}>
            <ActivePage />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getCashFlow: cashFlow => dispatch(getCashFlow(cashFlow))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(hocApp(App))
