import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import { makeStyles } from '@materialx-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
//import purple from 'material-ui/colors/purple';
//import red from 'material-ui/corecolors/red';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

/* const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500], //OR red['A400'] for the accent range
      contrastText: '#fff', // The text color to use
      // You can also specify light, dark variants to use (it's autocomputed otherwise)
    }
  }
}); */
const useStyles1 = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const accent = purple['A200']; // #E040FB
const primary = red[500]; 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      color:accent,
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    color:accent,
  },
  toolbar: {
    flexWrap: 'wrap',
    color:accent,
  },
  toolbarTitle: {
    flexGrow: 1,
    color:accent,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? primary : accent,
  },
  cardActions:{
    backgroundColor:primary,
    color:accent,
  },
  button:{
    color:accent,
    width:800,
  },
  buttonText:{
    backgroundColor:accent,
    align:"center",
  },

  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
    color:accent,
  },
  tier:{
    color:accent,
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color:accent,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Food and Quantity Fed',
    description: ['Input food and quantity'],
    buttonText: {
      text:'S',
      color:accent,
    },
    buttonVariant: 'outlined',
    color:accent,
  },
  {
    title: 'Table',
    
    
    description: [
      'loading in information'
      
    ],
    buttonText: {
      text: '',
      color:accent,
    },
    buttonVariant: 'contained',
    color:accent,
  },
  {
    title: 'Find Nutrional Requirements',
    
    description: [
      'Used for suggesting different combinations of recipes',
      
    ],
    buttonText: {
      text:'C',
      color:accent,
    },
    buttonVariant: 'outlined',
    color:primary,
  },
];
const footers = [
  {
    title: 'NutrionoKid',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="static" color={accent} elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            NutrionoKid
          </Typography>
          
        </Toolbar>
      </AppBar>
      
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color={primary} gutterBottom>
          NutrionoKid
        </Typography>
        {/* <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography> */}
      </Container>
      
      {/* End hero unit */}
      <Router>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                
                
                 
                     
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
    
                 
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>

                   

                  
                </CardContent>
                
                <CardActions>
               
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          
       
      </div>
    </Router> */}    
              {tier.buttonText.text==='C'?<Button href="NameForm" onClick = {sayHello} fullWidth variant={tier.buttonVariant} color={tier.color} className = {classes.button}>
                    {tier.buttonText.text}
                    </Button> :<Button variant = {tier.buttonVariant}>{tier.buttonText.text}</Button>}  
                   
                </CardActions>
                
                
                
              </Card>
            </Grid>
          ))}
        </Grid>
        
      </Container>
      {/* <div class = "d">
                    
                    <Switch>
                        <Route exact path = "/about">
                      
                            <About />
                            <p>kkkkk</p>
                      
                       
                        </Route>
                    </Switch>
                  </div> */}
      </Router>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color={footer.color} gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

/* function About(){
  return (
    <div>
      <h2>hg</h2>
    </div>
  );
} */

function sayHello(){
  alert("Saying hello..")
}

function populateTable(){
  // this.setState({ showTable:  })
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

