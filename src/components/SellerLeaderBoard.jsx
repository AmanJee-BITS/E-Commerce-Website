
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BuyerLeaderboard() {
  const classes = useStyles();
  //   const [checked, setChecked] = React.useState([1]);

  //   const handleToggle = value => () => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //       newChecked.push(value);
  //     } else {
  //       newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  //  };

  return (
    <List
      dense
      className={classes.root}
      style={{ width: "200% ", margin: "0" }}
    >
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
      <ListItem button style={{ width: "200% ", margin: "0" }}>
        <ListItemAvatar>
          <Avatar alt="abshdjhkfsvmksdhmcx" />
        </ListItemAvatar>
        <ListItemText>Seller</ListItemText>
      </ListItem>
    </List>
  );
}

