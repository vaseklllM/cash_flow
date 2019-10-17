import React from "react"
import { Hidden, Typography, Box } from "@material-ui/core"

const ValletCourse = ({ valletCourse, btc_uah }) => {
    let blockValute = () => <></>
    if (valletCourse) {
        blockValute = () => (
            <>
                <span>
                    {(() => {
                        if (valletCourse.USD) return `$ ${valletCourse.USD}`
                    })()}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    {(() => {
                        if (valletCourse.EUR) return `€ ${valletCourse.EUR}`
                    })()}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    {(() => {
                        if (valletCourse.RUB) return `₽ ${valletCourse.RUB}`
                    })()}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    {(() => {
                        if (btc_uah) return `₿ ${btc_uah}`
                    })()}
                </span>
            </>
        )
    }
    return (
        <Hidden smUp>
            <Box display="flex" justifyContent="center" mt={1} pt={1} bgcolor="background.paper">
                <Typography variant='subtitle2' gutterBottom>
                    {blockValute()}
                </Typography>
            </Box>
        </Hidden>
    )
}

export default ValletCourse
