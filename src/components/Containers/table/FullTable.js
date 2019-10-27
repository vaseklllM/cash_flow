import React from "react"
import { connect } from "react-redux"
import {
    Box,
    Typography,
    Paper,
    TableRow,
    TableHead,
    TableBody,
    Table,
    makeStyles,
    Checkbox
} from "@material-ui/core"
import { StyledTableCell, StyledTableRow } from "../../Creators/Table/utils"
import { Loader } from "../../pages"
import { maths, showDate, retentionTime } from "../../utils"
import { setCheckBox } from "../../../store/serverMoney/action"

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        overflowX: "auto"
    },
    table: {
        minWidth: 700
    }
}))

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

function FullTable({ cashFlow, setCheckBox }) {
    const classes = useStyles()
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
        bodyTable = cashFlow.map((item, index) => {
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
                    <StyledTableCell padding='checkbox'>
                        <Checkbox checked={false} />
                    </StyledTableCell>
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
            <Paper className={classes.root}>
                <Table
                    className={classes.table}
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
