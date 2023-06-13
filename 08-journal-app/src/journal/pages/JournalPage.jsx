
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Nisi sunt duis consectetur do eu ipsum. Pariatur ex aliqua enim eu sint id enim. Est ad sint velit ipsum adipisicing veniam consectetur ut. Mollit nulla incididunt mollit nostrud nisi minim sit ad tempor qui. Cupidatat voluptate esse culpa officia non commodo cupidatat elit qui in fugiat cupidatat in adipisicing. Ipsum exercitation pariatur exercitation eu sunt elit cupidatat id amet ex magna ea.
      </Typography> */}

      <NothingSelectedView /> 

      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position:'fixed',
          right: 50,
          bottom: 50
        }}
      >
      
      <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>
      
    </JournalLayout>
    
  )
}
