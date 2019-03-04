import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles.css';
import { MyContext } from '../App';

class FeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = { elevation: 2 };
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <MyContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <Paper
                                className={classes.feedItem}
                                elevation={this.state.elevation}
                                onMouseOver={() =>
                                    this.setState({ elevation: 6 })
                                }
                                onFocus={() => undefined}
                                onMouseOut={() =>
                                    this.setState({ elevation: 2 })
                                }
                                onBlur={() => undefined}
                            >
                                <h1>Im a feed item</h1>
                                <p>Lots of fun here</p>
                                <div className={classes.buttons}>
                                    <Button
                                        color="primary"
                                        onClick={() =>
                                            context.setTheme(this.props.idx)
                                        }
                                    >
                                        Primary
                                    </Button>
                                    <Button
                                        color="secondary"
                                        onClick={() =>
                                            context.setTheme(this.props.idx)
                                        }
                                    >
                                        Secondary Button
                                    </Button>
                                </div>
                            </Paper>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default withStyles(styles)(FeedItem);
