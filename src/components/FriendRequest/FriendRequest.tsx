import { Box, Typography } from "@mui/material"
import handshake from '../../assets/images/handshake.svg'
import avatar1 from '../../assets/images/avatar1.svg'
import avatar2 from '../../assets/images/avatar2.svg'
import avatar3 from '../../assets/images/avatar3.svg'
import accept from '../../assets/images/accept.svg'
import decline from '../../assets/images/decline.svg'

const requests = [{ name: 'Nguyen Minh Anh', avatar: avatar1 }, { name: 'Marrie Lane', avatar: avatar2 }, { name: 'Jane Johnson', avatar: avatar3 }]

function FriendRequest() {
    return (
        <Box sx={{ background: '#FFF', borderRadius: '20px', width: '276px', height: '100%', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Box component='img'
                        src={handshake} alt='handshake' />
                    <Typography sx={{ marginLeft: '7.5px', fontWeight: 600, fontSize: '14px', color: '#29282B', textTransform: 'uppercase' }}>Friend request</Typography>
                </Box>
                <Box component='div' sx={{ borderTop: '1px solid #F1F1F1', margin: '18px 0px', width: '100%' }} />
                <Box>
                    {requests.map((request) => (
                        <Box sx={{
                            display: 'flex', alignItems: 'center', marginBottom: '24px'
                        }}>
                            <Box component='img'
                                src={request.avatar} alt='avatar' />
                            <Box sx={{ marginLeft: '9px' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#29282B' }}>{request.name}</Typography>
                                <Box sx={{ marginTop: '6px' }}>
                                    <Box component='img'
                                        src={accept} alt='accept' sx={{ marginRight: '10px' }} />
                                    <Box component='img'
                                        src={decline} alt='decline' />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#8954C2', textAlign: 'center' }}>View All</Typography>
            </Box>
        </Box>
    )
}

export default FriendRequest