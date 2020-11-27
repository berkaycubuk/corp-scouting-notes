export const createNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
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
