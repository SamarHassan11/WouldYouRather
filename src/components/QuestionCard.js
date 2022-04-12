import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import {
    Box, Card, CardMedia, CardContent, Typography, Button,
} from './common';

function QuestionCard(props) {
    const { question, user } = props;

    return (
        <div>
            <Box>
                <Typography component="div" variant="h6">
                    {user.name} asks:
                </Typography>
            </Box>
            <Card sx={{ display: 'flex', height: '200px', my: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, m: 3 }}
                    image={`/images/${user.avatarURL}`}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            Would you rather
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {question.optionOne.text}...
                        </Typography>
                        <Link to={`questions/${question.id}`} style={{ textDecoration: 'none' }}>
                            <Button
                                sx={{ mt: 2 }}
                                variant="contained"
                            >
                                View Poll
                            </Button>
                        </Link>
                    </CardContent>
                </Box>
            </Card>
        </div>
    )
}

QuestionCard.propTypes = {
    question: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default QuestionCard
