import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Typography, TextField, InputAdornment, IconButton, Button, Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import SignUpAPI from '../../api/SignUpAPI';
import Image from './../../assets/images/bg-image.svg'


function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowPasswordAgain = () => setShowPasswordAgain(!showPasswordAgain);
  const isEmpty = (param: string) => {
    if (param.length > 0) return false
    else return true;
  }

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const validateAll = () => {
    if (isEmpty(email)) {
      setEmailMsg("Please enter your email!");
    } else if (!isValidEmail(email)) {
      setEmailMsg("Invalid email!");
    } else {
      setEmailMsg('');
    }

    if (isEmpty(password)) {
      setPasswordMsg("Please enter your password!");
    } else {
      setPasswordMsg("");
    }

    if (emailMsg === passwordMsg) return true
    else return false
  }

  const handleClickCreateAccount = () => {
    if (validateAll() && password === passwordAgain) SignUpAPI(email, password);
  }

  return (
    <Box sx={{
      width: '100%',
      height: '619px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <Box
        component={'img'}
        src={Image}
        sx={{
          width: '40%'
        }}>

      </Box>

      <Box sx={{
        width: "400px",
        background: "#FFF",
        boxShadow: "0px 8px 50px rgba(150, 140, 169, 0.1)",
        padding: "77px 74px",
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ marginBottom: '10px' }}>
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 39,
              color: "#000"
            }}>
              Sign Up
            </Typography>
            <Typography component="span" sx={{
              fontWeight: 400,
              fontSize: 14,
              color: "#4D4D4D"
            }}>
              Already have account?
              <Link to={"/"} style={{
                fontWeight: 600,
                fontSize: 14,
                color: "#5487F5",
                marginLeft: "6px",
                textDecoration: 'none'
              }}>
                Sign in
              </Link>
            </Typography>
          </Box>
          <Box sx={{ margin: '10px 0px' }}>
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "#4D4D4D",
            }}>
              Email address
            </Typography>
            <TextField fullWidth
              id="email"
              sx={{ marginTop: "5px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }} />
          </Box>
          <Box sx={{ margin: '10px 0px' }}>
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "#4D4D4D",
            }}>
              Password
            </Typography>
            <TextField fullWidth
              id="passwordAgain"
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPasswordAgain(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ marginTop: "5px" }} />
          </Box>
          <Box sx={{ margin: '10px 0px' }}>
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "#4D4D4D",
            }}>
              Password Again
            </Typography>
            <TextField fullWidth
              id="password"
              type={showPasswordAgain ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordAgain}
                    >
                      {showPasswordAgain ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ marginTop: "5px" }} />
          </Box>
          <Button fullWidth sx={{
            background: "#C18FF5",
            boxShadow: "0px 8px 25px rgba(114, 56, 207, 0.15)",
            borderRadius: "10px",
            marginTop: "15px",
            marginBottom: "20px",
            textTransform: 'none',
            color: "#FFF",
            fontWeight: 700,
            fontSize: 14,
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:hover': {
              background: "#C080F0"
            }
          }}
            onClick={handleClickCreateAccount}
          >Create account</Button>

          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="" />
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "#4D4D4D",
              mx: '5px'
            }}>
              I accept
            </Typography>
            <Link to={"#"} style={{
              fontWeight: 600,
              fontSize: 14,
              color: "#5487F5",
              textDecoration: 'none'
            }}>
              Term and Condition
            </Link>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default SignUp