import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles.css';
import FeedItem from './FeedItem';

class Feed extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.feed}>
                <FeedItem idx={0} />
                <FeedItem idx={1} />
                <FeedItem idx={2} />
            </div>
        );
    }
}

export default withStyles(styles)(Feed);
