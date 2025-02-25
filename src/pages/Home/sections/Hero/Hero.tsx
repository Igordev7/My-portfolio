
import avatar from "../../../../assets/images/avatar.jpeg"
import Grid from "@mui/material/Grid"
import { Button, Container, styled, Typography } from "@mui/material"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Hero = () =>{
 
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
    }))
    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))
    return (
      <>
        <StyledHero>
            <Container maxWidth = "lg">

                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledImg src={avatar}/>
                    </Grid>
                    <Grid item xs={12} md ={8}>
                        <Typography color="Secondary" variant="h1" textAlign={"center"}>Igor Almeida</Typography>
                        <Typography color="primary" variant="h2" textAlign={"center"}>I´m a Software Engineer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"}>
                            <Grid item xs={12} md = {4} display={"flex"} justifyContent={"center"}>
                                <Button>
                                <FileDownloadIcon/>
                                Download CV
                                </Button>
                                
                            </Grid>
                            <Grid item xs={12} md ={4} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <MailOutlineIcon/>
                                Contact me</Button>
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
  