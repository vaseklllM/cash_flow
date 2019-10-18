import React from "react"
import { Table, TableBody, TableHead, TableRow, Paper } from "@material-ui/core"
import { StyledTableCell } from "./utils"
import rowList from "./rowList"

const Body = ({ rows, text: { emptyArray, collumn }, maxHeignt }) => (
    <Paper className='activeTable' style={{ maxHeight: maxHeignt || "400px" }}>
        <Table>
            <TableHead className='vasekTest'>
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
            <TableBody>{rowList(rows, emptyArray, collumn.length)}</TableBody>
        </Table>
    </Paper>
)

export default Body
