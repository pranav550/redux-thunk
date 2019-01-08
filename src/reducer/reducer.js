const initialState = {
  name: "demo"
};

export default function reducer(states = initialState, action) {
  switch (action.type) {
    case "changename":
      return {
        ...states,
        name: action.payload
      };

    default:
      return {
        ...states
      };
  }
}
