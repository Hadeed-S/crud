import axios from "axios";
const initialState = [];

export async function fetchFacts(dispatch, getState) {
  axios
    .get("http://localhost:3000/api/cat/CatFacts")
    .then(function (response) {
      // handle success
      //   console.log("fetch facts success", response);
      //   const stateBefore = getState();
      //   console.log("facts before dispatch: ", stateBefore.facts?.length);
      dispatch({ type: "factsLoaded", payload: response.data.data });
      //   const stateAfter = getState();
      //   console.log("facts after dispatch: ", stateAfter.facts.length);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
export function saveNewFact(data) {
  console.log("data", data);
  return async function saveNewTodoThunk(dispatch, getState) {
    const { fact } = data;
    const response = await axios.post(
      "http://localhost:3000/api/cat/CatFacts",
      { Fact: fact }
    );
    console.log("response", response);
    const factToPost = {
      _id: response.data.data.insertedId,
      fact,
      length: fact.length,
    };

    dispatch({ type: "factAdded", payload: factToPost });
  };
}
export function editFact(data) {
  return async function editFactThunk(dispatch, getState) {
    console.log("data", data);
    const { id, fact } = data;
    const factToPut = { _id: id, fact, length: fact.length };
    console.log("fact to put: ", factToPut);
    const response = await axios.put("http://localhost:3000/api/cat/CatFacts", {
      id,
      Fact: fact,
    });
    dispatch({ type: "factEdited", payload: factToPut });
  };
}
export default function factReducer(state = initialState, action) {
  if (action.type === "factsLoaded") {
    const newState = action.payload;
    return {
      facts: newState,
    };
  }
  if (action.type === "factAdded") {
    const toAdd = action.payload;
    const newState = [...state.facts, toAdd];
    console.log("new state", newState);
    return {
      facts: newState,
    };
  }
  if (action.type === "factEdited") {
    // console.log(state.facts);
    console.log("payload", action.payload);
    const index = state.facts.findIndex(
      (item) => item._id === action.payload._id
    );
    console.log("index", index);
    // Create a new array with the updated object
    const updatedArray = [...state.facts];
    updatedArray[index] = action.payload;
    console.log("updated array", updatedArray);
    const newState = updatedArray;
    console.log(newState);
    return {
      facts: newState,
    };
  }

  return state;
}
