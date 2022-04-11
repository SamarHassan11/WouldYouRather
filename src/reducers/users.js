import { RECEIVE_USERS } from '../actions/users'
import { ADD_ANSWER } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_ANSWER:
            const { question_id, answer, authedUser } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [question_id]: answer
                    }
                }
            }
        default:
            return state
    }
}
