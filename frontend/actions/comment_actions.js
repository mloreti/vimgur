export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})
export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
})
