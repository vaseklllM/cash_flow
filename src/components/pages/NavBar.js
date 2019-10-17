import React from "react"
import { AppBar, Toolbar, InputBase, Typography } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

function NavBar({ valletCourse, useStyles, btc_uah }) {
    let blockValute = () => <></>
    if (valletCourse) {
        blockValute = () => (
            <>
                <span>
                    {(() => {
                        if (valletCourse.USD) return `$ ${valletCourse.USD}`
                    })()}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    {(() => {
                        if (valletCourse.EUR) return `€ ${valletCourse.EUR}`
                    })()}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    {(() => {
                        if (valletCourse.RUB) return `₽ ${valletCourse.RUB}`
                    })()}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    {(() => {
                        if (btc_uah) return `₿ ${btc_uah}`
                    })()}
                </span>
            </>
        )
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
