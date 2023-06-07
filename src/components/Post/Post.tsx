import { Box, Typography } from "@mui/material"
import profile from '../../assets/images/profile-picture.svg'
import more from '../../assets/images/more-option.svg'
import image from '../../assets/images/image cake.png'
import like from '../../assets/images/heart.svg'
import comment from '../../assets/images/comment.svg'

function Post() {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center'
                }}>
                    <Box component='img'
                        src={profile} alt='profile' width='44px' />
                    <Box sx={{ marginLeft: '9px', display: 'flex', alignItems: 'start', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#29282B' }}>Nguyễn Quỳnh Anh</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#ACACAC' }}>2 hours ago</Typography>
                    </Box>
                </Box>
                <Box component='img'
                    src={more} alt='more button' sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }} />
            </Box>
            <Typography sx={{ marginBottom: '20px', fontWeight: 400, fontSize: '14px', color: '#29282B' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</Typography>
            <Box component='img' src={image} alt='image' width='100%' sx={{ marginBottom: '20px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '8px' }}>
                    <Box component='img' src={like} alt='like' />
                    <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#29282B' }}>14</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '8px' }}>
                    <Box component='img' src={comment} alt='like' />
                    <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#29282B' }}>14</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Post