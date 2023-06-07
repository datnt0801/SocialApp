import { Box } from '@mui/material'
import Birthday from '../../components/Birthday/Birthday'
import CreatePost from '../../components/CreatePost/CreatePost'
import Feed from '../../components/Feed/Feed'
import FriendRequest from '../../components/FriendRequest/FriendRequest'
import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile'

function Home() {
  return (
    <Box>
      <Header />
      <Box sx={{ background: "#EEE", padding: '32px 120px', display: 'flex', justifyContent: 'space-between', gap: '32px' }}>
        <Profile />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', height: '100%' }}>
          <CreatePost />
          <Feed />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', height: '100%', position: 'sticky' }}>
          <FriendRequest />
          <Birthday />
        </Box>
      </Box>
    </Box>
  )
}

export default Home 