import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Box, TextField, Divider, Grid, Card, Typography, Button,
} from './common';
import { handleAddQuestion } from '../actions/questions';
import { ROUTE_URLS } from '../utils/constants';

function AddQuestion(props) {
    const { author } = props;
    const [optionOneText, setOptionOneText] = useState('');
    const [optionTwoText, setOptionTwoText] = useState('');

    const handleSubmit = () => {
        if (!optionOneText || !optionTwoText) {
            return;
        }
        props.dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }));
        props.history.push(ROUTE_URLS.homePage);
    }    

    return (
        <Grid sx={{ maxWidth: '600px', margin: '0 auto', mt: 3 }} container>
            <Card sx={{ display: 'flex', py: 2, flexDirection: 'column', width: '100%' }}>
                <Box>
                    <Typography component="div" variant="h5" align="center"
                        sx={{ borderBottom: '1px solid #555', mb: 3 }}>
                        Create New Question
                    </Typography>
                </Box>
                <Box
                    component="form"
                    autoComplete="off"
                    sx={{ flex: '1 0 auto', px: 3 }}
                >
                    <Typography component="div" variant="body" sx={{ mb: 2 }}>
                        Complete the question:
                    </Typography>
                    <Typography component="div" variant="h6" sx={{ my: 2 }}>
                        Would you rather...
                    </Typography>
                    <TextField
                        id="option-one-input"
                        type="text"
                        variant="filled"
                        value={optionOneText}
                        onChange={e => setOptionOneText(e.target.value)}
                        fullWidth
                        autoFocus
                    />
                    <Divider sx={{ my: 3 }}>OR</Divider>
                    <TextField
                        id="option-two-input"
                        type="text"
                        variant="filled"
                        value={optionTwoText}
                        onChange={e => setOptionTwoText(e.target.value)}
                        fullWidth
                    />
                    <Button
                        sx={{ mt: 2 }}
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            </Card>
        </Grid>
    )
}

const mapStateToProps = ({ authedUser }) => ({ author: authedUser });

export default withRouter(connect(mapStateToProps)(AddQuestion));
