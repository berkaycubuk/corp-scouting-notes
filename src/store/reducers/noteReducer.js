const initState = {
  notes: [
    {
      id: "1",
      creator: "Dummy Dan",
      date: "26.11.2020",
      description: "asdfasdfasdf",
    },
  ],
};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("created note", action.note);
      return state;

    case "CREATE_NOTE_ERROR":
      console.log("create note error", action.error);
      return state;

    default:
      return state;
  }
};

export default noteReducer;
