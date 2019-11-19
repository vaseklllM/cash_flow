import React from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Hidden
} from "@material-ui/core"
import LoaderCircle from "../loaderCircle"
import { Link } from "react-router-dom"
import "./NavBar.scss"
import { Search, MenuBtn } from "../../Containers"

function NavBar({ vallets }) {
    let blockValute = () => <LoaderCircle />
    if (Object.keys(vallets).length !== 0) {
        const newValletst = vallets.filter(i => i.sumbol !== "₴")
        blockValute = () =>
            newValletst.map((item, index) => {
                return (
                    <span key={index} className='circle'>
                        {`${item.sumbol} ${item.value}`}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                )
            })
    }
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography className='title' variant='h6' noWrap>
                        <div>{blockValute()}</div>
                    </Typography>
                    <Hidden smDown>
                        <Box mr={2}>
                            <Search />
                        </Box>
                    </Hidden>
                    <Hidden smDown>
                        <Box mr={2}>
                            <Link to='/' className='NavLinkbtn'>
                                <Button color='inherit'>Головна</Button>
                            </Link>
                        </Box>
                        <Box mr={2}>
                            <Link to='/graphs' className='NavLinkbtn'>
                                <Button color='inherit'>Графіки</Button>
                            </Link>
                        </Box>
                    </Hidden>
                    <Hidden mdUp>
                        <MenuBtn />
                    </Hidden>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
