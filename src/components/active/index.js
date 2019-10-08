import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import FunctionsRoundedIcon from "@material-ui/icons/FunctionsRounded"
import { connect } from "react-redux"
import { hocActive } from "../hoc"
import Box from "@material-ui/core/Box"
import "./style.scss"

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell)

function Active({ rowList, activeFullPrice }) {
    return (
        <>
            <Box display='flex' justifyContent='space-between' p={1} pb={0}>
                <Box p={0}>
                    <Typography variant='h5' gutterBottom>
                        Активи
                    </Typography>
                </Box>
                <Box p={0}>
                    <Typography
                        style={{ display: "flex", alignItems: "center" }}
                        variant='h5'
                        gutterBottom
                    >
                        <FunctionsRoundedIcon />
                        <span>{activeFullPrice}</span>
                    </Typography>
                </Box>
            </Box>
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
                    <TableBody>{rowList()}</TableBody>
                </Table>
            </Paper>
        </>
    )
}

const mapStateToProps = cashFlow => cashFlow

export default connect(mapStateToProps)(hocActive(Active))
