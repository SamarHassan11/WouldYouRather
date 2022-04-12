import * as React from 'react';
import { connect } from 'react-redux';

import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid,
    Avatar,
} from './common';

function LeaderBoard(props) {
    const { users } = props;

    return (
        <Grid sx={{ maxWidth: '600px', margin: '0 auto', mt: 3 }} container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th">Account</TableCell>
                            <TableCell component="th" align="center">Answered Questions</TableCell>
                            <TableCell component="th" align="center">Created Questions</TableCell>
                            <TableCell component="th" align="center">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar
                                        sx={{ mr: 2 }}
                                        alt={user.name}
                                        src={`/images/${user.avatarURL}`}
                                    />
                                    {user.name}
                                </TableCell>
                                <TableCell align="center">{Object.keys(user.answers).length}</TableCell>
                                <TableCell align="center">{user.questions.length}</TableCell>
                                <TableCell align="center">{Object.keys(user.answers).length + user.questions.length}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}

const mapStateToProps = ({ users }) => {
    const sortedUsers = Object.values(users).sort(function (a, b) {
        return Object.keys(b.answers).length - Object.keys(a.answers).length + b.questions.length - a.questions.length;
    })

    return { users: sortedUsers }
};

export default connect(mapStateToProps)(LeaderBoard);
