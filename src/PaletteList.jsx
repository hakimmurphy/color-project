import React, { useState,useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GlobalStylesCom from './styles/GlobalStyle';
import MiniPalette from './MiniPalette';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PaletteListStyles from './styles/PaletteListStyle';
import blue from '@mui/material/colors/blue'
import red from '@mui/material/colors/red'

const { Root, Heading, Container, Nav, Palettes } = PaletteListStyles;

function PaletteList( { palettes, deletePalette } ) {

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deletingId, setDeletingId] = useState('');

    const navigate = useNavigate();
    const nodeRef = useRef();

    const goToPalette = (id) => {
        navigate(`/palette/${id}`)
    };

    const openDialog = (id) => {
        setOpenDeleteDialog(true)
        setDeletingId(id)
    };

    const closeDialog = () => {
        setOpenDeleteDialog(false)
        setDeletingId('')
    };

    const handleDelete = () => {
        deletePalette(deletingId)
        closeDialog()
    };

    return(
        <Root>
            <GlobalStylesCom />
            <Container>
                <Nav>
                    <Heading>React Colors</Heading>
                    <Link to='palette/new'>Create Palette</Link>
                </Nav>
                <Palettes>
                    <TransitionGroup component={null}>
                    {palettes.map(palette => (
                        <CSSTransition 
                                key={palette.id} 
                                classNames='fade' 
                                timeout={500} 
                            >
                                <MiniPalette 
                                    nodeRef={nodeRef}
                                    {...palette} 
                                    goToPalette = {goToPalette}
                                    openDialog={openDialog}
                                    id = {palette.id} 
                                />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </Palettes>
                <a 
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        marginTop: '2rem',
                        width: "100%",
                        textAlign: 'center'
                    }}
                    href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com
                </a>
            </Container>
            <Dialog open={openDeleteDialog} aria-labelledby='delete-dialog-title' onClose={closeDialog}>
                    <DialogTitle id='delete-dialog-title'>Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem onClick={handleDelete}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='Delete' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={closeDialog}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                        <CloseIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='Cancel' />
                            </ListItemButton>
                        </ListItem>
                    </List>
            </Dialog>
        </Root>
    )
}

export default PaletteList;