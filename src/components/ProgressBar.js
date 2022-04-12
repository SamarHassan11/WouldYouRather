import React from 'react';

import {
    Box, Typography, LinearProgress,
} from './common';

export default function ProgressBar(props) {
    const { percentage } = props;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                    variant="determinate"
                    color="secondary"
                    sx={{ height: '10px' }}
                    value={percentage}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                    {percentage.toFixed(2)}%
                </Typography>
            </Box>
        </Box>
    )
}
