import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';

import ViewResults from './ViewResults';
import AddAnswer from './AddAnswer';

function Question(props) {
    const { user, question, askedBy } = props;

    const loading = !user || !question;

    if (loading) {
        return 'Loading...';
    }

    const isAnswered = Object.keys(user.answers).includes(question.id);

    return (
        <div>
            {
                isAnswered ?
                    <ViewResults question={question} />
                    : <AddAnswer question={question} askedBy={askedBy} />
            }
        </div>
    )
}

const mapStateToProps = ({ users, authedUser, questions }, props) => {
    const { id } = props.match.params;

    return {
        user: !isEmpty(users) ? users[authedUser] : null,
        question: !isEmpty(questions) ? questions[id] : null,
        askedBy: !isEmpty(questions) ? users[questions[id].author] : null
    }
}

export default withRouter(connect(mapStateToProps)(Question));
