import React from 'react';
import { connect } from 'react-redux';
import { userLogin, isAuthenticated } from '../../actions/auth_actions'
import { bindActionCreators } from 'redux';

import './Login.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            authenticated: false
        }
    }
    styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            flexDirection: 'column',
        },
        formEle: {
            display: 'flex',
            margin: '0px 20px 20px 20px'
        }
    };

    playGame = (e) => {
        e.preventDefault();
        this.props.userLogin();
    }
    componentDidMount() {
        this.props.isAuthenticated();
    }

    render() {
        return (
            <div>
                {!this.props.authenticated && <div className="App">
                    <div className="App-header">
                        <Paper elevation={1} className="loginPaper">
                            <h1>SMove Challenge</h1>

                            <form noValidate autoComplete="off" style={this.styles.container}>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    style={this.styles.formEle}
                                    onClick={(e) => this.playGame(e)}
                                >
                                    Login with Gmail
                                </Button>
                            </form>

                        </Paper>

                    </div>
                </div>}
                {this.props.authenticated &&
                    <Redirect to='/dashboard' />
                }
            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        authenticated: state.auth.authenticated
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userLogin, isAuthenticated }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
