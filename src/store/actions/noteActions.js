export const createNote = (note) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("notes")
      .add({
        ...note,
      })
      .then(() => {
        dispatch({
          type: "CREATE_NOTE",
          note,
        });
      })
      .catch((error) => {
        dispatch({
          type: "CREATE_NOTE_ERROR",
          error,
        });
      });
  };
};
