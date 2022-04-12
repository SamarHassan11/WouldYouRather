import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleAddAnswer } from '../actions/questions';
import {
    Box, Card, CardMedia, CardContent, Typography, Grid, Button, FormControl, FormControlLabel,
    RadioGroup, Radio,
} from './common';

function AddAnswer(props) {
    const { askedBy, question, authedUser } = props;
    const [value, setValue] = useState('optionOne');

    const handleOptionChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        props.dispatch(handleAddAnswer({ qid: question.id, answer: value, authedUser }));
        props.history.push(window.location.pathname);
    }

    return (
        <Grid sx={{ maxWidth: '600px', margin: '0 auto', mt: 3 }} container>
            <Box>
                <Typography component="div" variant="h6">
                    {askedBy.name} asks:
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
                        <Typography component="div" variant="h4">
                            Would you rather...
                        </Typography>
                        <FormControl sx={{ my: 2 }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={value}
                                name="radio-buttons-group"
                                onChange={handleOptionChange}
                            >
                                <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                                <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            sx={{ mt: 2 }}
                            variant="contained"
                            fullWidth
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

AddAnswer.propTypes = {
    question: PropTypes.object.isRequired,
    askedBy: PropTypes.object.isRequired,
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default withRouter(connect(mapStateToProps)(AddAnswer));
