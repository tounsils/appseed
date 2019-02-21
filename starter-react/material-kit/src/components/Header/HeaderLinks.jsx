/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

// const RegisterButton = props => (
//     <ListItem className={props.classes.listItem}>
//         <Link to={"/login-page"}>
//             <Button 
//             href=""
//             color="transparent"
//             target="_blank"
//             className={props.classes.navLink}>Register</Button>
//         </Link>
//     </ListItem>
// )

const RegisterButton = props => {
    console.log(props);
    return (
        <ListItem className={props.classes.listItem}>
            <Link to={"/login-page"}>
                <Button 
                href=""
                color="transparent"
                target="_blank"
                style={{color: 'white'}}
                className={props.classes.navLink}>Register</Button>
            </Link>
        </ListItem>
    )
}
 

const Logout = connect(dispatch => ({ dispatch }))(props => (
    <ListItem className={props.classes.listItem}>
        <Button 
        href=""
        color="transparent"
        target="_blank"
        style={{color: 'white'}}
        onClick={() => props.dispatch(logout())}
        className={props.classes.navLink}>Logout</Button>
    </ListItem>
))



function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>
      
        <ListItem className={classes.listItem}>
            <Link to={props.state.user ? "/profile-page" : "/login-page"}>
                <Button 
                href=""
                color="transparent"
                target="_blank"
                style={{color: 'white'}}
                className={classes.navLink}>{props.state.user ? `${props.state.user.name} ${props.state.user.surname}` : `Login`}</Button>
            </Link>
        </ListItem>
        {
            props.state.user ? <Logout {...props}/> : <RegisterButton {...props} />
        }
    </List>
  );
}


const HeaderLinksContainer = connect(state => ({ state }))(HeaderLinks);

export default withStyles(headerLinksStyle)(HeaderLinksContainer);
