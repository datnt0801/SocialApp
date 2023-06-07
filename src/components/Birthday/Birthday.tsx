import { Box, Typography } from "@mui/material"
import avatar4 from '../../assets/images/avatar4.svg'
import avatar5 from '../../assets/images/avatar5.svg'
import avatar6 from '../../assets/images/avatar6.svg'
import cake from '../../assets/images/cake.svg'

const birthdays = [{ name: 'Nguyen Quynh Anh', avatar: avatar4, from: 'Hanoi' }, { name: 'Nguyen Quynh Anh', avatar: avatar5, from: 'Hanoi' }, { name: 'Nguyen Quynh Anh', avatar: avatar6, from: 'Hanoi' }]

function Birthday() {
    return (
        <Box sx={{ background: '#FFF', borderRadius: '20px', width: '276px', height: '100%', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Box component='img'
                        src={cake} alt='cake' />
                    <Typography sx={{ marginLeft: '7.5px', fontWeight: 600, fontSize: '14px', color: '#29282B', textTransform: 'uppercase' }}>Birthday</Typography>
                </Box>
                <Box component='div' sx={{ borderTop: '1px solid #F1F1F1', margin: '18px 0px', width: '100%' }} />
                <Box>
                    {birthdays.map((birthday) => (
                        <Box sx={{
                            display: 'flex', alignItems: 'center', marginBottom: '24px'
                        }}>
                            <Box component='img'
                                src={birthday.avatar} alt='avatar' />
                            <Box sx={{ marginLeft: '9px' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#29282B' }}>{birthday.name}</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#ACACAC' }}>{birthday.from}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#8954C2', textAlign: 'center' }}>View All</Typography>
            </Box>
        </Box>
    )
}

export default Birthday