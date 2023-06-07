import { Box } from "@mui/material"
import Post from "../Post/Post"

function Feed() {
    return (
        <Box sx={{ background: '#FFF', borderRadius: '20px', width: '584px', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Post />
                <Box component='div' sx={{ borderTop: '1px solid #F1F1F1', margin: '20px 0px', width: '100%' }} />
                <Post />
                <Box component='div' sx={{ borderTop: '1px solid #F1F1F1', margin: '20px 0px', width: '100%' }} />
                <Post />
            </Box>
        </Box>
    )
}
export default Feed