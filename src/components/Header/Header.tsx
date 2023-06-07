import { Box, TextField, InputAdornment, Typography } from "@mui/material";
import logo from '../../assets/images/logo.svg'
import search from '../../assets/images/search.svg'
import home from '../../assets/images/home.svg'
import watch from '../../assets/images/watch.svg'
import market from '../../assets/images/market-place.svg'
import group from '../../assets/images/group.svg'
import profile from '../../assets/images/profile-picture.svg'

const pages = [{ name: 'Homepage', icon: home },
{ name: 'Watch', icon: watch },
{ name: 'Marketplace', icon: market },
{ name: 'Groups', icon: group }
];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

    return (
        <Box sx={{
            padding: '25px 120px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            left: 0,
            right: 0,
            top: 0,
            background: '#FFF',
            zIndex: '10'
        }}>
            <Box component='img'
                src={logo} alt='logo' sx={{
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }} />
            <TextField
                id="search"
                placeholder="Search"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Box component='img' src={search} alt='search' />
                        </InputAdornment>
                    ),
                    style: { borderRadius: '20px', height: '36px' }
                }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {pages.map((page) => (
                    <Box sx={{
                        display: 'flex', alignItems: 'center', marginLeft: '36px', '&:hover': {
                            cursor: 'pointer'
                        }
                    }}>
                        <Box component='img'
                            src={page.icon} alt='icon' />
                        <Typography sx={{ marginLeft: '7.5px' }}>{page.name}</Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component='img'
                    src={profile} alt='profile' width='32px' />
                <Typography sx={{
                    fontWeight: 600, fontSize: '14px', color: '#29282B', marginLeft: '10px', '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                    Nguyễn Quỳnh Anh
                </Typography>
            </Box>
        </Box >
    );
};
export default Header;
