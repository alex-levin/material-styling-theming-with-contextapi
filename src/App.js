import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MyDrawer from './components/MyDrawer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Feed from './components/Feed';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const defaultTheme = createMuiTheme({
    // https://material-ui.com/style/typography/#migration-to-typography-v2
    typography: {
        fontFamily: ['Roboto', 'Arial'],
        useNextVariants: true
    }
});

const purpleTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green
    },
    // https://material-ui.com/style/typography/#migration-to-typography-v2
    typography: {
        fontFamily: ['Roboto', 'Arial'],
        useNextVariants: true
    }
});

const fontTheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: purple
    },
    // https://material-ui.com/style/typography/#migration-to-typography-v2
    typography: {
        fontFamily: ['Roboto', 'Arial'],
        useNextVariants: true
    }
});

const themes = [defaultTheme, purpleTheme, fontTheme];

const drawerWidth = 216;

const styles = theme => ({
    narrowContainer: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    }
});

export const MyContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { drawer: false, login: false, theme: defaultTheme };
    }

    toggleDrawer = () => {
        // https://reactjs.org/docs/react-component.html#setstate
        // this.setState({ ...this.state, drawer: !this.state.drawer });
        this.setState(state => {
            return { drawer: !state.drawer };
        });
    };

    toggleLogin = () => {
        // https://reactjs.org/docs/react-component.html#setstate
        // this.setState({ ...this.state, login: !this.state.login });
        this.setState(state => {
            return { login: !state.login };
        });
    };

    // setTheme = (idx) => {this.setState( {...this.state, theme: themes[idx] } ) }
    setTheme = idx => {
        this.setState(state => {
            return { theme: themes[idx] };
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    temes: this.themes,
                    setTheme: this.setTheme
                }}
            >
                <MuiThemeProvider theme={this.state.theme}>
                    {this.state.login && (
                        <Login toggleLogin={this.toggleLogin} />
                    )}
                    <MyDrawer
                        open={this.state.drawer}
                        onClose={this.toggleDrawer}
                    />
                    <div
                        className={
                            this.state.drawer ? classes.narrowContainer : null
                        }
                    >
                        <Navbar
                            toggleDrawer={this.toggleDrawer}
                            login={this.toggleLogin}
                        />
                        <Feed />
                    </div>
                </MuiThemeProvider>
            </MyContext.Provider>
        );
    }
}

export default withStyles(styles)(App);
