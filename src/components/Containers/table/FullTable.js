import React, { Component } from "react"
import { connect } from "react-redux"
import {
    Box,
    Typography,
    Paper,
    TableRow,
    TableHead,
    TableBody,
    Table,
    Checkbox,
    IconButton
} from "@material-ui/core"
import { StyledTableCell, StyledTableRow } from "../../Creators/Table/utils"
import { Loader } from "../../pages"
import { maths, showDate, retentionTime } from "../../utils"
import { setCheckBox } from "../../../store/serverMoney/action"
import EditIcon from "@material-ui/icons/Edit"

const bodyText = {
    title: "Вся таблиця",
    emptyArray: "Таблиця пуста",
    collumn: [
        "",
        "Назва",
        "Дата покупки",
        "Час утримання",
        "Ціна за шт.",
        "Кількість/шт.",
        "Доход/міс.",
        "Ціна загалом",
        "ROI"
    ]
}

class FullTable extends Component {
    state = {
        onCheck: []
    }

    onClickCheckBox = (e, item) => {
        e.stopPropagation()
        if (this.state.onCheck.indexOf(item.id) !== -1) {
            this.setState(({ onCheck }) => {
                let newArr = onCheck
                newArr.splice(newArr.indexOf(item.id), 1)
                return {
                    onCheck: newArr
                }
            })
        } else {
            this.setState({
                onCheck: [...this.state.onCheck, item.id]
            })
        }
    }

    render() {
        const { cashFlow, setCheckBox } = this.props
        const row = bodyText.collumn.map((item, index) => {
            if (!index || index === 1) {
                return <StyledTableCell key={index}>{item}</StyledTableCell>
            }
            return (
                <StyledTableCell key={index} align='right'>
                    {item}
                </StyledTableCell>
            )
        })
        let bodyTable
        if (cashFlow) {
            bodyTable = cashFlow.map(item => {
                const {
                    name,
                    price,
                    currency,
                    income,
                    pcs,
                    dateBuy,
                    checked
                } = item
                return (
                    <StyledTableRow
                        hover
                        key={item.id}
                        onClick={() => {
                            setCheckBox(item.id)
                        }}
                        style={
                            checked
                                ? { backgroundColor: "rgba(0, 0, 0, 0.15)" }
                                : null
                        }
                    >
                        <StyledTableCell
                            className='fullTable'
                            padding='checkbox'
                        >
                            <div className='fullTable-Buttons'>
                                <Checkbox
                                    checked={
                                        this.state.onCheck.indexOf(item.id) !==
                                        -1
                                    }
                                    onClick={e => {
                                        this.onClickCheckBox(e, item)
                                    }}
                                />
                                <IconButton
                                    style={{ padding: "5px" }}
                                    onClick={e => {
                                        e.stopPropagation()
                                    }}
                                >
                                    <EditIcon fontSize='small' />
                                </IconButton>
                            </div>
                        </StyledTableCell>
                        {/* <StyledTableCell
                            className='fullTable'
                            padding='checkbox'
                        >
                            <div className='fullTable-Buttons'>
                                <Checkbox
                                    checked={
                                        this.state.onCheck.indexOf(item.id) !==
                                        -1
                                    }
                                    onClick={e => {
                                        this.onClickCheckBox(e, item)
                                    }}
                                />
                                <IconButton
                                    style={{ padding: "5px" }}
                                    onClick={e => {
                                        e.stopPropagation()
                                    }}
                                >
                                    <EditIcon fontSize='small' />
                                </IconButton>
                            </div>
                        </StyledTableCell> */}
                        <StyledTableCell component='th' scope='row'>
                            {name}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {showDate(dateBuy)}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {retentionTime(dateBuy)}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {price ? `${price} ${currency}` : "-"}
                        </StyledTableCell>
                        <StyledTableCell align='right'>{`${pcs} шт.`}</StyledTableCell>
                        <StyledTableCell align='right'>
                            {income ? `${income} ${currency}` : "-"}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {price * pcs ? `${price * pcs} ${currency}` : "-"}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {maths.roi(income, price * pcs) !== 0 &&
                            maths.roi(income, price * pcs) !== -Infinity
                                ? `${maths.roi(income, price * pcs)} %`
                                : "-"}
                        </StyledTableCell>
                    </StyledTableRow>
                )
            })
        } else {
            bodyTable = (
                <StyledTableRow>
                    <StyledTableCell colSpan={bodyText.collumn.length}>
                        <Loader />
                    </StyledTableCell>
                </StyledTableRow>
            )
        }

        return (
            <>
                <Box p={0}>
                    <Typography variant='h5' gutterBottom>
                        {bodyText.title}
                    </Typography>
                </Box>
                <Paper
                    style={{
                        width: "100%",
                        overflowX: "auto"
                    }}
                >
                    <Table
                        size='small'
                        aria-label='a dense table'
                        style={{ minWidth: "1250px" }}
                    >
                        <TableHead>
                            <TableRow>{row}</TableRow>
                        </TableHead>
                        <TableBody>{bodyTable}</TableBody>
                    </Table>
                </Paper>
            </>
        )
    }
}

const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})
const mapDispatchToProps = dispatch => {
    return {
        setCheckBox: index => {
            dispatch(setCheckBox(index))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FullTable)
