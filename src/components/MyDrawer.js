import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

class MyDrawer extends Component {
    render() {
        return (
            <Drawer
                open={this.props.open}
                onClose={this.props.onClose}
                type="persistent"
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer}
                    onKeyDown={this.toggleDrawer}
                >
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Something Else" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );
    }
}

export default MyDrawer;
