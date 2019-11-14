import React, { Component } from "react"
import { connect } from "react-redux"
import {
    Box,
    Typography,
    Paper,
    TableRow,
    TableHead,
    TableBody,
    Table
} from "@material-ui/core"
import { StyledTableCell, StyledTableRow } from "../../../Creators/Table/utils"
import { Loader } from "../../../pages"
import { Calc, showDate, retentionTime } from "../../../utils"
import { setCheckBox } from "../../../../store/serverMoney/action"
import IncomeLine from "./IncomeLine"
import PcsLine from "./PcsLine"
import PriceToPcsLine from "./PriceToPcsLine"
import NameLine from "./NameLine"
import ValuteLine from "./ValuteLine/ValuteLine"
import View from "./leftControlBtn/View"
import Edit from "./leftControlBtn/Edit"

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
        const { cashFlow, setCheckBox, searchCashFlow } = this.props
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

        const leftControlBtn = item => {
            if (this.state.editElementId === item.id) {
                return (
                    <Edit
                        item={item}
                        onClickEditelementId={this.onClickEditelementId}
                    />
                )
            } else if (this.state.editElementId === null) {
                return (
                    <View
                        item={item}
                        onCheck={this.state.onCheck.indexOf(item.id) !== -1}
                        onClickEditelementId={this.onClickEditelementId}
                        onClickCheckBox={this.onClickCheckBox}
                    />
                )
            } else {
                return
            }
        }

        const mainArray = searchCashFlow || cashFlow
        let bodyTable
        if (cashFlow) {
            bodyTable = mainArray.map(item => {
                const { dateBuy, checked, id } = item

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
                                {leftControlBtn(item)}
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
                            {Calc.showFullPrice(item)}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            {Calc.roi(item)}
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
    newCashFlowItem: serverMoney.newCashFlowItem,
    searchCashFlow: serverMoney.searchCashFlow
})
const mapDispatchToProps = dispatch => {
    return {
        setCheckBox: index => {
            dispatch(setCheckBox(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullTable)
