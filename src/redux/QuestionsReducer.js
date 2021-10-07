import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {_getQuestions, _saveQuestionAnswer, _saveQuestion} from './_DATA';

export const getQuestions = createAsyncThunk(
    'questions/all',
    async () => {
        return await _getQuestions();
    }
)

export const saveQuestionAnswer = createAsyncThunk(
    'questions/saveAnswer',
    async (data) => {
        await _saveQuestionAnswer(data);
    }
)

export const createQuestion = createAsyncThunk(
    'question/create',
    async (data) => {
        await _saveQuestion(data);
    }
)

const QuestionsSlice = createSlice({
    name: "questions",
    initialState: {
        loadingQuestions: "loading",
        questions: [],
        answered: [],
        unAnswered: []
    },
    reducers: {
        getUnAnsweredQuestions: (state, {payload}) => {
            state.unAnswered = Object.keys(state.questions).sort((key1, key2) => state.questions[key2].timestamp - state.questions[key1].timestamp).filter((key) => {
             
                if (key in payload.answers) {
                    return false
                } else {
                    return true;
                }
            }).map(key=>state.questions[key])
        },
        getAnsweredQuestions: (state, {payload}) => {
            state.answered = Object.keys(state.questions).sort((key1, key2) => state.questions[key2].timestamp - state.questions[key1].timestamp).filter((key) => {
                if (key in payload.answers) {
                    return true
                } else {
                    return false;
                }
            }).map(key=>state.questions[key])
        }
    }, 
    extraReducers: {
        [getQuestions.pending]: (state) => {
            state.loadingQuestions = "loading"
        },
        [getQuestions.fulfilled]: (state, {payload}) => {
            state.questions = payload
            state.loadingQuestions = "loaded"
        },
    }
})

export const {getUnAnsweredQuestions, getAnsweredQuestions} = QuestionsSlice.actions;
export default QuestionsSlice.reducer