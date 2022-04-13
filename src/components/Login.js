import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Typography, Card, CardContent, CardActionArea, CardActions, Grid, FormControl, InputLabel,
    Select, MenuItem, Button, Avatar,
} from './common';
import Storage from '../utils/storage';
import { ROUTE_URLS } from '../utils/constants';
import { setAuthedUser } from '../actions/authedUser';


function Login(props) {
    const { users } = props;
    const [user, setUser] = useState('');

    useEffect(function () {
        const token = Storage.getItem('token');

        if (token) {
            props.history.push(ROUTE_URLS.homePage)
        }
    });

    const handleUserChange = (e) => {
        setUser(e.target.value);
    }

    const handleSignIn = () => {
        if (user) {
            props.dispatch(setAuthedUser(user));
            Storage.setItem('token', user);
            props.history.push(ROUTE_URLS.homePage);
        }
    }

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 6 }}
        >
            <Grid item xs={12}>
                <Card sx={{ maxWidth: 600 }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Would You Rather
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Please sign in to continue
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">User</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={user}
                                label="User"
                                onChange={handleUserChange}
                            >
                                {
                                    Object.values(users).map(user => (
                                        <MenuItem
                                            key={user.id}
                                            value={user.id}
                                        >
                                            <Avatar
                                                sx={{ mr: 2 }}
                                                alt={user.name}
                                                src={`/images/${user.avatarURL}`}
                                            />
                                            {user.name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                            <Button
                                sx={{ mt: 2 }}
                                variant="contained"
                                onClick={handleSignIn}
                            >
                                Sign in
                            </Button>
                        </FormControl>
                    </CardActions>
                </Card>

            </Grid>
            <div style={{ position: 'absolute', bottom: '5px' }}>
                <a style={{ textDecoration: 'none', color: '#888' }}
                    href='https://www.freepik.com/vectors/avatar-pack'
                >
                    Avatar pack vector created by pikisuperstar - www.freepik.com
                </a>
            </div>
        </Grid>
    )
}

const mapStateToProps = ({ users }) => ({
    users
})

export default withRouter(connect(mapStateToProps)(Login));
