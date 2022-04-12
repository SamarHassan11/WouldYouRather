import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from './MaterialUI'

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errorOccurred: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorOccurred: true });
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.errorOccurred) {
            return (
                <Typography
                    variant="h5"
                >
                    Something Went Wrong
                </Typography>
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
