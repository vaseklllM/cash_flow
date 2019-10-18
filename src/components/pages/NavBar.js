import React from "react"
import { AppBar, Toolbar, InputBase, Typography } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import LoaderCircle from "./loaderCircle"
import "./NavBar.scss"

function NavBar({ vallets, useStyles }) {
    let blockValute = () => <LoaderCircle />
    if (Object.keys(vallets).length !== 0) {
        blockValute = () =>
            vallets.map((item, index) => {
                return (
                    <span key={index} className='circle'>
                        {`${item.sumbol} ${item.rate}`}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                )
            })
    }
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <div className={classes.root} />
                <Toolbar>
                    <Typography className={classes.title} variant='h6' noWrap>
                        {blockValute()}
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder='Search…'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
