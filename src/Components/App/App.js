import React from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Header from "./header";
import itemsAction from '../redux/item/itemActions'
import { CSSTransition } from "react-transition-group";
import {connect} from 'react-redux'
import Notification from '../Notification/Notification'
import stylesNotification from '../Notification/Notification.module.css'
import Filter from "../Filter/Filter";
import styles from "./App.module.css";

function App ({contacts, notific, toggleNotification}) {
  console.log(toggleNotification)
  const contactsLength = contacts.length
    return (
      <div className={styles.container}>
         <CSSTransition
          in={true}
          classNames={styles}
          timeout={500}
          appear={true}
        >         
         <Header />
         </CSSTransition>

          <CSSTransition 
           in={notific}
           timeout={1000} 
           classNames={stylesNotification}  
           unmountOnExit
           onEntered={() => toggleNotification()}  
            > 
            <Notification/></CSSTransition>


          <ContactForm  />
          {contactsLength > 1 &&     
        <> 
          <h2>Contacts</h2>
          <Filter />
        </> 
}
 
        <ContactList  />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    notific: state.items.toggle,
    contacts: state.items.items
  }
}
const mapDispatchToProps = {
  toggleNotification: itemsAction.setVisible
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
