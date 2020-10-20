import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import itemActions from '../redux/item/itemActions'
import styles from "./ContactList.module.css";

const ContactList = ({ items, deleteItem }) => {
  return (
    <TransitionGroup component="ul" className={styles.list} >
        {items.map(({ name, id, number }) => {
          return (
            <CSSTransition key={id}  classNames={styles} timeout={250}    > 
          <li className={styles.item}>
            <span>
              {name} {number}
            </span>
            <button
              className={styles.button}
              type="button"
              onClick={() => deleteItem(id)}
  
            >
              Delete
            </button>
          </li>
          </CSSTransition>

          );
        })}
      </TransitionGroup>
    
  );
};
ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  console.log(state)
  const {items, filter} = state.items
  const lowerFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>  contact.name.toLowerCase().includes(lowerFilter),);
  return   {  items: visibleContacts}
}

  const mapDispatchToProps = {
    deleteItem: itemActions.deleteItem
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
