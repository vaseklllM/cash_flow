import React from "react"
import { Menu, MenuItem, IconButton } from "@material-ui/core"
import { Link } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const linkStyle = {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)"
    }

    return (
        <>
            <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link style={linkStyle} to='/'>
                    <MenuItem onClick={handleClose}>Головна</MenuItem>
                </Link>
                <Link style={linkStyle} to='/graphs'>
                    <MenuItem onClick={handleClose}>Графіки</MenuItem>
                </Link>
            </Menu>
        </>
    )
}
