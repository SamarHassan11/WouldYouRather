import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import {
    Box, Card, CardMedia, CardContent, Typography, Grid,
} from './common';
import ProgressBar from './ProgressBar';

function ViewResults(props) {
    const { question, askedBy, authedUser } = props;

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const isOneSelected = question.optionOne.votes.includes(authedUser) ? true : false;

    return (
        <Grid sx={{ maxWidth: '600px', margin: '0 auto', mt: 3 }} container>
            <Box>
                <Typography component="div" variant="h6">
                    Asked by {askedBy.name}
                </Typography>
            </Box>
            <Card sx={{ display: 'flex', my: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, m: 3, height: '200px' }}
                    image={`/images/${askedBy.avatarURL}`}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Results:
                        </Typography>
                        <Card sx={{ p: 2, my: 1, position: 'relative' }} className={isOneSelected ? 'active-card' : null}>
                            <Typography variant="body" color="text.secondary" component="div" sx={{ mb: 1 }}>
                                Would you rather {question.optionOne.text}
                            </Typography>
                            <ProgressBar percentage={(question.optionOne.votes.length / totalVotes) * 100} />
                            <Typography variant="body" color="text.secondary" component="p" align="center"
                                sx={{ mt: 1 }}>
                                {question.optionOne.votes.length} out of {totalVotes}
                            </Typography>
                            {
                                isOneSelected && <Typography variant="body" color="secondary" component="p"
                                    sx={{ position: 'absolute', right: '5px', bottom: '5px' }}>
                                    Your vote
                                </Typography>
                            }
                        </Card>
                        <Card sx={{ p: 2, my: 1, position: 'relative' }} className={!isOneSelected ? 'active-card' : null}>
                            <Typography variant="body" color="text.secondary" component="div" sx={{ mb: 1 }}>
                                Would you rather {question.optionTwo.text}
                            </Typography>
                            <ProgressBar percentage={(question.optionTwo.votes.length / totalVotes) * 100} />
                            <Typography variant="body" color="text.secondary" component="p" align="center"
                                sx={{ mt: 1 }}>
                                {question.optionTwo.votes.length} out of {totalVotes}
                            </Typography>
                            {
                                !isOneSelected && <Typography variant="body" color="secondary" component="p"
                                    sx={{ position: 'absolute', right: '5px', bottom: '5px' }}>
                                    Your vote
                                </Typography>
                            }
                        </Card>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

ViewResults.propTypes = {
    question: PropTypes.object.isRequired,
}

const mapStateToProps = ({ users, authedUser }, props) => {
    const { question } = props;
    return {
        askedBy: users[question.author],
        authedUser,
    }
};

export default connect(mapStateToProps)(ViewResults);
