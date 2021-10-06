import { configureStore } from "@reduxjs/toolkit";
import users from './userReducer'
import questions from './QuestionsReducer'

export const store = configureStore({
  reducer: {
    users: users,
    questions: questions
  }
})