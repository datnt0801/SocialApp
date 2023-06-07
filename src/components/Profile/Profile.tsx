import { Box, Typography, Button } from "@mui/material"
import profile from '../../assets/images/profile-picture.svg'
import like from '../../assets/images/like.svg'
import view from '../../assets/images/view.svg'
import linkedin from '../../assets/images/linkedin.svg'
import instagram from '../../assets/images/instagram.svg'

function Profile() {
  return (
    <Box sx={{ background: '#FFF', borderRadius: '20px', width: '276px', height: '100%', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Box>
          <Box sx={{
            display: 'flex', alignItems: 'center', marginBottom: '24px'
          }}>
            <Box component='img'
              src={profile} alt='profile' width='44px' />
            <Box sx={{ marginLeft: '9px', display: 'flex', alignItems: 'start', justifyContent: 'space-between', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#29282B' }}>Nguyễn Quỳnh Anh</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#ACACAC' }}>Hanoi</Typography>
            </Box>
          </Box>
          <Box component='div' sx={{ borderTop: '1px solid #F1F1F1', margin: '18px 0px', width: '100%' }} />
          <Box
            sx={{
              display: 'flex', justifyContent: 'start', alignItems: 'center', marginBottom: '24px'
            }}>
            <Box component='img'
              src={like} alt='like' />
            <Typography sx={{ fontWeight: 600, fontSize: '16px', color: '#29282B', marginLeft: '10px' }}>10K</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#ACACAC', marginLeft: '4px' }}>Follows</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex', justifyContent: 'start', alignItems: 'center', marginBottom: '12px'
            }}>
            <Box component='img'
              src={view} alt='view' />
            <Typography sx={{ fontWeight: 600, fontSize: '16px', color: '#29282B', marginLeft: '10px' }}>600</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#ACACAC', marginLeft: '4px' }}>Following</Typography>
          </Box>
          <Box component='p' sx={{ fontWeight: 400, fontSize: '12px', color: '#6F6F6F' }}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
          </Box>
          <Box component='div' sx={{ borderTop: '1px solid #F1F1F1', margin: '16px 0px', width: '100%' }} />
          <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#6F6F6F', marginBottom: '13px', textTransform: 'uppercase' }}>My Pages</Typography>
          <Box
            sx={{
              display: 'flex', justifyContent: 'start', alignItems: 'center', marginBottom: '12px'
            }}>
            <Box component='img'
              src={instagram} alt='instagram' />
            <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#3F3F3F', marginLeft: '10px' }}>quynh_anh700</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex', justifyContent: 'start', alignItems: 'center', marginBottom: '12px'
            }}>
            <Box component='img'
              src={linkedin} alt='linkedin' />
            <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#3F3F3F', marginLeft: '10px' }}>quynh_anh800</Typography>
          </Box>
          <Button variant="outlined" fullWidth sx={{ textTransform: 'none', borderRadius: "10px", }}>Edit</Button>
        </Box>
      </Box>
    </Box>
  )
}
export default Profile