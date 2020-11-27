import React, { Component } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { notes, auth } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <NoteForm />
        <NoteList notes={notes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "notes", orderBy: ["date", "desc"] }])
)(Home);
