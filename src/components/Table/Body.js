import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import StyledTableCell from "./StyledTableCell"
import propTypes from "prop-types"
import { rowList } from "."

const Body = ({ rows, text }) => {
    const { name, col1, col2, col3 } = text
    return (
        <Paper className='activeTable'>
            <Table className='activeTable_table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>{name}</StyledTableCell>
                        <StyledTableCell align='right'>{col1}</StyledTableCell>
                        <StyledTableCell align='right'>{col2}</StyledTableCell>
                        <StyledTableCell align='right'>{col3}</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{rowList(rows)}</TableBody>
            </Table>
        </Paper>
    )
}

Body.propTypes = {
    rows: propTypes.oneOfType([
        propTypes.arrayOf(
            propTypes.shape({
                name: propTypes.string,
                pcs: propTypes.number,
                price: propTypes.number,
                currency: propTypes.string,
                paymentTime: propTypes.string,
                income: propTypes.number
            })
        ),
        propTypes.array,
        propTypes.symbol
    ]),
    text: propTypes.objectOf(propTypes.string).isRequired
}

export default Body
