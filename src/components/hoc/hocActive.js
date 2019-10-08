import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Loader from "../loader"

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.default
        }
    }
}))(TableRow)

const upadtePrice = rows => {
    let price = 0
    rows.forEach(element => {
        price += element.price * element.pcs
    })
    return `${price} ${rows[0].currency}`
}

const hocTable = Wraper => ({ cashFlow }) => {
    let rows = null
    if (cashFlow) rows = cashFlow.filter(item => item.income >= 0)
    let activeFullPrice = 0
    if (!Array.isArray(rows) && rows !== null) {
        activeFullPrice = upadtePrice(rows)
    }
    const rowList = () => {
        if (rows === null) {
            return (
                <StyledTableRow>
                    <StyledTableCell component='th' scope='row' colSpan='4'>
                        <Loader />
                    </StyledTableCell>
                </StyledTableRow>
            )
        } else if (Array.isArray(rows) && rows.length === 0) {
            return (
                <StyledTableRow>
                    <StyledTableCell component='th' scope='row' colSpan='4'>
                        Нет активов
                    </StyledTableCell>
                </StyledTableRow>
            )
        } else if (Array.isArray(rows) && rows.length !== 0) {
            return rows.map(row => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component='th' scope='row'>
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                        {row.pcs} шт.
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                        {row.price} {row.currency}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                        {row.price * row.pcs} {row.currency}
                    </StyledTableCell>
                </StyledTableRow>
            ))
        }
    }
    return <Wraper rowList={rowList} activeFullPrice={activeFullPrice} />
}

export default hocTable
