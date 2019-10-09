import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import StyledTableCell from "./StyledTableCell"
import { rowList } from "."

const Body = ({ rows }) => {
    return (
        <Paper className='activeTable'>
            <Table className='activeTable_table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Назва</StyledTableCell>
                        <StyledTableCell align='right'>
                            Кількість/шт.
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            Ціна за шт.
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            Ціна загалом
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{rowList(rows)}</TableBody>
            </Table>
        </Paper>
    )
}

export default Body
