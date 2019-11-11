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
import { StyledTableCell, StyledTableRow } from "../../../Creators/Table/utils"
import { Loader } from "../../../pages"
import { maths, showDate, retentionTime } from "../../../utils"
import {
    setCheckBox,
    changeParametersCashFlow
} from "../../../../store/serverMoney/action"
import EditIcon from "@material-ui/icons/Edit"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import IncomeLine from "./IncomeLine"
import PcsLine from "./PcsLine"
import PriceToPcsLine from "./PriceToPcsLine"
import NameLine from "./NameLine"
import ValuteLine from "./ValuteLine/ValuteLine"

const bodyText = {
    title: "Вся таблиця",
    emptyArray: "Таблиця пуста",
    collumn: [
        "",
        "Назва",
        "Дата покупки",
        "Пройшло від покупки",
        "Ціна за шт.",
        "Кількість/шт.",
        "Доход/міс.",
        "Валюта",
        "Ціна загалом",
        "ROI/р."
    ]
}

class FullTable extends Component {
    state = {
        onCheck: [],
        editElementId: null
    }

    onClickCheckBox = item => {
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

    onClickEditelementId = id => {
        this.setState(({ editElementId }) => {
            if (!editElementId) {
                return { editElementId: id }
            } else if (editElementId === id) {
                return { editElementId: null }
            }
        })
    }

    render() {
        const { cashFlow, setCheckBox, changeParametersCashFlow } = this.props
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

        const view = item => {
            return (
                <>
                    <Checkbox
                        checked={this.state.onCheck.indexOf(item.id) !== -1}
                        onMouseDown={event => {
                            event.stopPropagation()
                        }}
                        onClick={() => {
                            this.onClickCheckBox(item)
                        }}
                    />
                    <IconButton
                        style={{ padding: "5px" }}
                        onMouseDown={event => {
                            event.stopPropagation()
                        }}
                        onClick={() => {
                            this.onClickEditelementId(item.id)
                        }}
                    >
                        <EditIcon fontSize='small' />
                    </IconButton>
                </>
            )
        }
        const edit = item => {
            return (
                <>
                    <IconButton
                        style={{ padding: "5px" }}
                        onMouseDown={event => {
                            event.stopPropagation()
                        }}
                        onClick={() => {
                            changeParametersCashFlow(item.id)
                            this.onClickEditelementId(item.id)
                        }}
                    >
                        <CheckIcon fontSize='small' />
                    </IconButton>
                    <IconButton
                        style={{ padding: "5px" }}
                        onMouseDown={event => {
                            event.stopPropagation()
                        }}
                        onClick={() => {
                            this.onClickEditelementId(item.id)
                        }}
                    >
                        <CloseIcon fontSize='small' />
                    </IconButton>
                </>
            )
        }

        const leftControlBtn = (view, edit, item) => {
            if (this.state.editElementId === item.id) {
                return edit(item)
            } else if (this.state.editElementId === null) {
                return view(item)
            } else {
                return
            }
        }

        let bodyTable
        if (cashFlow) {
            // console.log(cashFlow);
            bodyTable = cashFlow.map(item => {
                const {
                    price,
                    currency,
                    income,
                    pcs,
                    dateBuy,
                    checked,
                    id
                } = item

                const onShow = id === this.state.editElementId
                return (
                    <StyledTableRow
                        hover
                        key={id}
                        onMouseDown={() => {
                            setCheckBox(id)
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
                                {leftControlBtn(view, edit, item)}
                            </div>
                        </StyledTableCell>
                        <NameLine item={item} onShow={onShow} />
                        <StyledTableCell align='right'>
                            {showDate(dateBuy)}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {retentionTime(dateBuy)}
                        </StyledTableCell>
                        <PriceToPcsLine item={item} onShow={onShow} />
                        <PcsLine item={item} onShow={onShow} />
                        <IncomeLine item={item} onShow={onShow} />
                        <ValuteLine item={item} onShow={onShow} />
                        <StyledTableCell align='right'>
                            {price * pcs
                                ? `${parseFloat(
                                      (price * pcs).toFixed(2)
                                  ).toLocaleString("en-IN")} ${currency}`
                                : "-"}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {maths.roi(income, price * pcs) !== 0
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
    cashFlow: serverMoney.cashFlow,
    newCashFlowItem: serverMoney.newCashFlowItem
})
const mapDispatchToProps = dispatch => {
    return {
        setCheckBox: index => {
            dispatch(setCheckBox(index))
        },
        changeParametersCashFlow: itemId =>
            dispatch(changeParametersCashFlow(itemId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FullTable)
