import { RECEIVE_QUESTIONS, ADD_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case ADD_ANSWER:
            const { question_id, answer, authedUser } = action
            return {
                ...state,
                [question_id]: {
                    ...state[question_id],
                    [answer]: {
                        ...state[question_id][answer],
                        votes: state[question_id][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}