import React from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import LoaderCircle from "../loaderCircle"
import { Link } from "react-router-dom"
import { Hidden } from "@material-ui/core"
import "./NavBar.scss"
import { Search } from "../../Containers"

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
                        {/* <Typography> */}
                            <Search />
                        {/* </Typography> */}
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
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
