import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    {/* <Avatar alt="Remy Sharp" src={avatar} /> */}
    <img src={avatar} alt="kitty cat" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <Button variant="outlined" color="secondary" onClick={onLogout}>
      LogOut{' '}
        </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);