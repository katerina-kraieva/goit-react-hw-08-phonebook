import React, { Component } from 'react';
import { Container, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {
  clearError,
  contactsSelector,
  contactsOperations,
} from '../../redux/contacts';
// import Container from 'components/Container';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter/Filter';
import ContactList from '../../Components/ContactList/ContactList';

const styles = {
  h: {
    textAlign: 'center',
    color: 'rgb(31, 54, 77)',
  }
}

class PhoneBookPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  componentDidUpdate() {
    if (this.props.error !== null) {
      toast.error('No Network');
      setTimeout(this.props.clearError(), 500);
    }
  }
  render() {
    return (
      <>
        {/* <Grid container direction="row" justify="center" alignItems="baseline"> */}
          <Container maxWidth="sm">
            <CSSTransition
              in={true}
              appear={true}
              timeout={250}
              classNames="Logo"
              unmountOnExit
            >
            <h1 style={ styles.h}>Phonebook</h1>
            </CSSTransition>
            <ContactForm />

            <Box m={1}>
              <Filter />
            </Box>
          </Container>
          <Container maxWidth="sm">
            {this.props.loading && (
              <Loader type="Rings" color="rgb(236, 8, 38)" height={200} width={200} />
            )}
            <ContactList />
          </Container>
        {/* </Grid> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: contactsSelector.getLoading(state),
  error: contactsSelector.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookPage);