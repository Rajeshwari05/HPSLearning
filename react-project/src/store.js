import { createStore, combineReducers } from "redux";

// Initial state for theme
const initialThemeState = {
  theme: "light",
  services: ["Web Development", "App Development", "SEO Optimization"],
};

// Theme reducer
function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

// Initial state for messages
const initialMessagesState = {
  messages: [],
};

// Action types for messages
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

// Action creators for messages
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  payload: message,
});

export const deleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  payload: id,
});

// Messages reducer
const messagesReducer = (state = initialMessagesState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case UPDATE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((msg) =>
          msg.id === action.payload.id ? action.payload : msg
        ),
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((msg) => msg.id !== action.payload),
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  messages: messagesReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
