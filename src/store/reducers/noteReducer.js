const initState = {
  notes: [
    {
      id: "1",
      name: "Dummy Dan",
      date: "26.11.2020",
      description: "asdfasdfasdf",
    },
  ],
};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      // note created
      return state;

    case "CREATE_NOTE_ERROR":
      // error when creating note
      return state;

    default:
      return state;
  }
};

export default noteReducer;
