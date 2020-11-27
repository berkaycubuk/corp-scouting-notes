import React, { Component } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { notes } = this.props;
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
    notes: state.note.notes,
  };
};

export default connect(mapStateToProps)(Home);
