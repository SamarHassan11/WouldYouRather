import React, { useState } from 'react'
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import {
    Box, TabContext, TabPanel, Tab, Tabs,
} from './common'
import QuestionCard from './QuestionCard';


function HomePage(props) {
    const { user, users, questions } = props;

    const loading = !user || isEmpty(questions);

    if (loading) {
        return 'Loading...';
    }

    const answeredQuestions = Object.keys(user.answers);
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%', typography: 'body1', maxWidth: '600px', margin: '0 auto', mt: 3 }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'primary' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                    >
                        <Tab label="Unanswered Questions" value="1" />
                        <Tab label="Answered Questions" value="2" />
                    </Tabs>
                </Box>
                <TabPanel value="1">
                    {
                        Object.keys(questions).filter(question => !answeredQuestions.includes(question))
                            .map(question => (
                                <QuestionCard
                                    key={questions[question].id}
                                    question={questions[question]}
                                    user={users[questions[question].author]}
                                />
                            ))
                    }
                </TabPanel>
                <TabPanel value="2">
                    {
                        Object.keys(questions).filter(question => answeredQuestions.includes(question))
                            .map(question => (
                                <QuestionCard
                                    key={questions[question].id}
                                    question={questions[question]}
                                    user={users[questions[question].author]}
                                />
                            ))
                    }
                </TabPanel>
            </TabContext>
        </Box>
    )

}

const mapStateToProps = ({ questions, users, authedUser }) => {
    return {
        user: !isEmpty(users) ? users[authedUser] : null,
        questions,
        users
    }
}

export default connect(mapStateToProps)(HomePage);
