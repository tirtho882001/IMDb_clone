import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import { routhPath } from '../../constants/route';
import { Link } from 'react-router-dom';


const HeaderMenu = ({ open, handleClose }) => {

    const openMenu = Boolean(open);

    return (
        <div>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to={`${routhPath.categories}?category=popular`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>Popular</MenuItem>
                </Link>
                <Link to={`${routhPath.categories}?category=toprated`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>Top Rated</MenuItem>
                </Link>
                <Link to={`${routhPath.categories}?category=upcoming`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>Upcoming</MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default HeaderMenu