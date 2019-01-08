export default function changeName(updateusername) {
  return dispatch => {
    dispatch({
      type: "changename",
      payload: updateusername
    });
  };
}
