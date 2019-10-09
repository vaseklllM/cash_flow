import { withStyles } from "@material-ui/core/styles"
import TableRow from "@material-ui/core/TableRow"

const StyledTableRow = withStyles(theme => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.default
        }
    }
}))(TableRow)

export default StyledTableRow
