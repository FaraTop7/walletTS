import { Button } from "@mui/material";
import "./Admin.css"
import TextField from '@mui/material/TextField';


const Admin = () => {
  return (
    <div>
      <div id="Admin">
        <div className="container">
          <div className="admin">
            <h1>счета и карта</h1>
          <TextField sx={{
            width: '500px'
          }}   id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField sx={{
            width: '500px'
          }}   id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField sx={{
            width: '500px'
          }}   id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField sx={{
            width: '500px'
          }}   id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField sx={{
            width: '500px'
          }}   id="outlined-basic" label="Outlined" variant="outlined" />
             <Button sx={{
              width: '500px'
             }} variant="contained">Contained</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
