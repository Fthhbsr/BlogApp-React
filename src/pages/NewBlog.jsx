import {useContext, useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { Form } from 'formik';
import { AuthContext } from '../context/AuthContext';
import InputAdornment from '@mui/material/InputAdornment';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { BlogContext } from '../context/BlogContext';

const theme = createTheme();

const NewBlog = () => {
  const navigate = useNavigate()

  const { getCategory, categories, } = useContext(BlogContext)

  const { createUser } = useContext(AuthContext)

  const [newBlog, setNewBlog] = useState({
    "title": "",
    "category": 0,
    "content": "",
    "image": "",
    "status": ""
  });

  useEffect(() => {
    getCategory();

  }, [])

  return (
     <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ maxHeight: '91.5vh' }}>
        <CssBaseline />

        <Grid item xs={12} component={Paper} elevation={6} square>

          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'darkslategray' }}>
              <NewspaperIcon />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{ color: "tomato" }}>
              New Blog
            </Typography>

            {/* {
  "title": "string",
  "author_id": 0,
  "category": 0,
  "content": "string",
  "image": "string",
  "status": "d"
} */}


     <Form >
     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.8 }}>
       <TextField
         label="Title"
         name="title"
         id="title"
         type="text"
         variant="outlined"
         value={newBlog.title}
         onChange={(e) => setNewBlog({ ...newBlog, "title": e.target.value })}
       />
       <InputLabel id="category">Category</InputLabel>
       <Select
         labelId="category"
         id="select-category"
         value={}
         label="Age"
         onChange={handleChange}
       >
       {categories?.map((category)=>(
         <MenuItem value={category.name}>{category.name.toCapitalize()}</MenuItem>
       ))}
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
       </Select>
       <TextField
         label="Title"
         name="title"
         id="title"
         type="text"
         variant="outlined"
         value={newBlog.title}
         onChange={(e) => setNewBlog({ ...newBlog, "title": e.target.value })}
       />
       <TextField
         label="Title"
         name="title"
         id="title"
         type="text"
         variant="outlined"
         value={newBlog.title}
         onChange={(e) => setNewBlog({ ...newBlog, "title": e.target.value })}
       />
       <TextField
         label="Title"
         name="title"
         id="title"
         type="text"
         variant="outlined"
         value={newBlog.title}
         onChange={(e) => setNewBlog({ ...newBlog, "title": e.target.value })}
       />
       <TextField
         label="Title"
         name="title"
         id="title"
         type="text"
         variant="outlined"
         value={newBlog.title}
         onChange={(e) => setNewBlog({ ...newBlog, "title": e.target.value })}
       />

       <TextField
         label="Biography"
         name="biography"
         id="biography"
         type="text"
         variant="outlined"
         multiline
         rows={6}
         maxRows={18}
         placeholder='Biography'
         value={values.biography}
         onChange={handleChange}
         onBlur={handleBlur}
         error={touched.biography && Boolean(errors.biography)}
         helperText={touched.biography && errors.biography}
         InputProps={{
           startAdornment: (
             <InputAdornment position='start' >
               <SettingsAccessibilityIcon style={{ position: 'absolute', top: '-1px', left: '-25px' }} />
             </InputAdornment>
           )
         }}
       />
       <TextField
         label="password"
         name="password"
         id="password"
         type="password"
         variant="outlined"
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         helperText={touched.password && errors.password}
         error={touched.password && Boolean(errors.password)}
       />
       <TextField
         label="password1"
         name="password1"
         id="password1"
         type="password"
         variant="outlined"
         value={values.password1}
         onChange={handleChange}
         onBlur={handleBlur}
         helperText={touched.password1 && errors.password1}
         error={touched.password1 && Boolean(errors.password1)}
       />
       <Button type="submit" variant="contained" size="large">
         Register
       </Button>
     </Box>
             </ >


   <Grid container sx={{ mt: 2 }}>

     <Grid item>
       <Link to="/login" variant="body2" style={{ color: "darkslategray" }}>
         {"Do you have an account? Login"}
       </Link>
     </Grid>
   </Grid>
           </Box >

         </Grid >
       </Grid >
     </ThemeProvider >
  )
   }

export default NewBlog