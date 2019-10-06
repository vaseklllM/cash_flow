import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FunctionsRoundedIcon from '@material-ui/icons/FunctionsRounded';
import { connect } from 'react-redux'
import serverMoney from '../../serverMoney';
import Loader from '../loader';
import { getActive } from '../../action';
import './style.scss'

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


export class Active extends Component {

    componentDidMount() {
        const sMoney = new serverMoney()
        sMoney.getActive.then(result => {
            this.props.getActive(result)
        })
    }

    render() {
        const rows = this.props.active

        const rowList = () => {
            if (rows === null) {
                return (
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row" colSpan="3"><Loader /></StyledTableCell>
                    </StyledTableRow>
                )
            } else if (rows.length === 0) {
                return (
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row" colSpan="3">Нет активов</StyledTableCell>
                    </StyledTableRow>
                )
            } else if (rows.length !== 0) {
                return (
                    rows.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.pcs}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                        </StyledTableRow>
                    ))
                )
            }
        }
        return (
            <>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom >Активи</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom><FunctionsRoundedIcon /></Typography>
                    </Grid>
                </Grid>
                <Paper className='activeTable'>
                    <Table className='activeTable_table'>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Назва</StyledTableCell>
                                <StyledTableCell align="right">Кількість</StyledTableCell>
                                <StyledTableCell align="right">Ціна</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowList()}
                        </TableBody>
                    </Table>
                </Paper>
            </>
        );
    }
}

const mapStateToProps = ({ active }) => {
    return {
        active
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getActive: (active) => {
            dispatch(getActive(active))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Active)