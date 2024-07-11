// constants
const SET_IMAGE = "image/SET_IMAGE";
const REMOVE_IMAGE = "image/REMOVE_IMAGE";
const UPDATE_IMAGE = "image/UPDATE_IMAGE";

// action creators
const setImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
});

const removeImage = () => ({
  type: REMOVE_IMAGE,
});

const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: image,
});

// thunks
export const fetchImage = (id) => async (dispatch) => {
  const response = await fetch(`/api/images/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(setImage(data));
  }
};

export const uploadImage = (imageData) => async (dispatch) => {
  const response = await fetch("/api/images/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(imageData),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setImage(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const deleteImage = (id) => async (dispatch) => {
  const response = await fetch(`/api/images/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeImage());
  }
};

export const editImage = (id, imageData) => async (dispatch) => {
  const response = await fetch(`/api/images/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(imageData),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateImage(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};


// initial state
const initialState = { image: null };

// reducer
export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGE:
      return { image: action.payload };
    case REMOVE_IMAGE:
      return { image: null };
    case UPDATE_IMAGE:
      return { image: action.payload };
    default:
      return state;
  }
}
