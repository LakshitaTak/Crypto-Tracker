import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { MenuOpen, MenuOpenRounded } from '@mui/icons-material';

export default function Te0mporaryDrawer() {
    const[open, setOpen] = React.useState(false)
    const[direction , setDirection] = React.useState("left")
    
    const handleClick =(dir)=>{
        setOpen(true)
        setDirection(dir)
    }
  return (
    <div>
          <IconButton onClick={()=>handleClick("right")}>
            <MenuRoundedIcon className='link'/>
          </IconButton>
          <IconButton onClick={()=>handleClick("left")}>
            <MenuOpenRounded className='link'/>
          </IconButton>
          <Drawer
            anchor={direction}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className="drawer-div">
                <a href="/">
                <p className="link">Home</p>
                </a>
                
                <a href="/">
                <p className="link">Compare</p>
                </a>
                
                <a href="/">
                <p className="link">Watchlist</p>
                </a>
                <a href="/">
                <button className="link">Dashboard</button>
                </a>
                
            </div>
          </Drawer>
    </div>
  );
}
