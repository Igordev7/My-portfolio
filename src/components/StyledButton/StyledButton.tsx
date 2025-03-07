import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}
const StyledButton : React.FC<StyledButtonProps> = ({ children, onClick }) => {

 
        const StyledButton = styled("button")(({ theme }) => ({
            backgroundColor: "transparent",
            borderRadius: "3px",
            border: `1px solid ${theme.palette.primary.contrastText}`,
            padding: "5px 15px",
             width: "100%",
             color: theme.palette.primary.contrastText,
             display: "inline-flex",
             alignItems: "center",
             justifyContent: "center",
             gap: "10px",
            '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
            }
     }))
     return (
       <>
          <StyledButton onClick={onClick}>
                {children},
            </StyledButton>
          </>
     )
     
}
  export default StyledButton
     