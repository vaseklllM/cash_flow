import React from "react"
import { AppBar, Toolbar, Typography, Hidden } from "@material-ui/core"
import LoaderCircle from "./loaderCircle"
import { Search } from "../Containers"

function NavBar({ vallets }) {
    let blockValute = () => <LoaderCircle />
    if (Object.keys(vallets).length !== 0) {
        blockValute = () =>
            vallets.map((item, index) => {
                return (
                    <span key={index} className='circle'>
                        {`${item.sumbol} ${item.value}`}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                )
            })
    }
    return (
        <div>
            <AppBar position='static'>
                <div />
                <Toolbar>
                    <Typography className='title' variant='h6' noWrap>
                        <div>{blockValute()}</div>
                    </Typography>
                    <Hidden lgDown>
                        <Search />
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
