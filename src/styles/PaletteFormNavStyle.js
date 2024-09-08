import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

const Root = styled('div')(({}) => ({
    display: 'flex'
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      })
    }),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
  }));

  const NavBtns = styled('div')(({}) => ({
    marginRight: '1rem',
    '& .button': {
        margin: '0 0.5rem',
        [sizes.down('xs')]: {
          margin: '0 0.2rem',
          padding: '0.3rem'
        }
    },
    [sizes.down('xs')]: {
      marginRight: '0.5rem',
    }
  }));

  const PaletteFormNavStyles = {
    drawerWidth,
    Root,
    AppBar,
    NavBtns
  };

  export default PaletteFormNavStyles