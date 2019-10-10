import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import StyledTableCell from "./StyledTableCell"
import rowList from "./rowList"
import "./style.scss"

const Body = ({ rows, text }) => {
    const { emptyArray, collumn } = text
    const colSpan = collumn.length
    return (
        <Paper className='activeTable'>
            <Table className='activeTable_table'>
                <TableHead>
                    <TableRow>
                        {collumn.map((item, index) => {
                            if (index === 0)
                                return (
                                    <StyledTableCell key={index}>
                                        {item}
                                    </StyledTableCell>
                                )
                            return (
                                <StyledTableCell key={index} align='right'>
                                    {item}
                                </StyledTableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>{rowList(rows, emptyArray, colSpan)}</TableBody>
            </Table>
        </Paper>
    )
}

export default Body
