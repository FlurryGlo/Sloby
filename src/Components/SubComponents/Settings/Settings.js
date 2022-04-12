import React, { useContext, useState } from "react"
import { SettingsDataContext } from "../../Context/SettingsContext"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { ThemeContext } from "../../Context/ThemeContext"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

function Settings(props) {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const { settings } = useContext(SettingsDataContext)
  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <div className='settings-container' data_theme={theme}>
      <div className='title'>Settings</div>
      <div className='underline'></div>
      <div className='options'>
        <div className='settings-item'>
          {settings.map((setting) => (
            <div>
              <Card className='setting-item' sx={{ width: 1000 }}>
                <CardHeader
                  className='card-header'
                  action={
                    <IconButton aria-label='settings'>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={setting.title}
                  subheader={setting.subheader}
                />
                <CardContent>
                  <Typography>
                    {setting.description}
                    <button onClick={switchTheme}>
                      click to change the theme
                    </button>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {/*<IconButton aria-label="add to favorites">*/}
                  {/*    <FavoriteIcon/>*/}
                  {/*</IconButton>*/}
                  {/*<IconButton aria-lebel="share">*/}
                  {/*    <ShareIcon/>*/}
                  {/*</IconButton>*/}
                  Our Icons system
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{setting.content_title}</Typography>
                    <Typography paragraph>
                      {setting.long_description}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Settings