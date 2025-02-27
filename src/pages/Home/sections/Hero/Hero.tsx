
import avatar from "../../../../assets/images/avatar.jpeg"
import Grid from "@mui/material/Grid"
import { Box, Button, Container, styled, Typography } from "@mui/material"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
const Hero = () =>{
 
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        }
    }))
    const StyledImg = styled("img")(({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }))
    return (
      <>
        <StyledHero>
            <Container maxWidth = "lg">

                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position={"relative"}>
                            <Box position={"absolute"} width={"100%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                        </Box>
                        <Box position={"relative"} textAlign={"center"}>
                            <StyledImg src={avatar}/>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md ={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb= {2} >Igor Almeida</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>I´m a Software Engineer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                            <Grid item xs={12} md = {4} display={"flex"} justifyContent={"center"}>
                        
                                <StyledButton onClick={()=> console.log("download")}>
                                    <FileDownloadIcon/>
                                    <Typography>
                                        Donwload CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md ={4} display={"flex"} justifyContent={"center"}>
                                <StyledButton onClick={()=> console.log("contact")}>
                                    <MailOutlineIcon/>
                                    <Typography>
                                        Contact me
                                    </Typography>
                                     
                                </StyledButton>
                            </Grid>
                        </Grid>
                     
                    </Grid>

            
                 </Grid>
            </Container>
        </StyledHero>
    </>

        
        
    )
  }
  
  export default Hero
  