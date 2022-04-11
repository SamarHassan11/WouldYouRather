import { showLoading, hideLoading } from 'react-redux-loading'

import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleGetQuestions() {
    return (dispatch) => {
        dispatch(showLoading())

        _getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
            .catch((e) => {
                console.warn('Error in handleToggleQuestion: ', e)
                alert('There was an error fetching the questions. Try again.')
            })
            .finally(() => {
                dispatch(hideLoading())
            })
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading())

        _saveQuestion(question)
            .then(() => {
                dispatch(addQuestion(question))
            })
            .catch((e) => {
                console.warn('Error in handleToggleQuestion: ', e)
                alert('There was an error adding the question. Try again.')
            })
            .finally(() => {
                dispatch(hideLoading())
            })
    }
}

function addAnswer({ question_id, authedUser, answer }) {
    return {
        type: ADD_ANSWER,
        question_id,
        authedUser,
        answer,
    }
}

export function handleAddAnswer(answer) {
    return (dispatch) => {
        dispatch(showLoading())

        _saveQuestionAnswer(answer)
            .then(() => {
                dispatch(addAnswer(answer))
            })
            .catch((e) => {
                console.warn('Error in handleToggleQuestion: ', e)
                alert('There was an error adding the answer. Try again.')
            })
            .finally(() => {
                dispatch(hideLoading())
            })
    }
}