import React from 'react';
import AppBarComponent from '../../components/AppBarComponent/AppBarComponent';
import Map from '../../components/Map/Map'
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { connect } from 'react-redux';
import { getBookings } from '../../actions/bookings_actions'
import { changeMapDirection } from '../../actions/map_actions'
import { userLogout } from '../../actions/auth_actions'
import EnhancedTable from "../../components/Table/Table"
import { bindActionCreators } from 'redux';
import Loader from '../../components/Loader/Loader';

class MainDashboard extends React.Component {
    async componentDidMount() {
        await this.props.getBookings();
    }

    handleTableClick(record) {
        this.props.changeMapDirection(record);
    }
    render() {
        var MapLoader = withScriptjs(withGoogleMap((props) =>
            <Map pickup={props.pickup} dropoff={props.dropoff}></Map>
        ))
        return (
            <div>
                <AppBarComponent handleLogout={() => this.props.userLogout()} />
                {this.props.bookings.bookings.length > 0 ?
                    <div>
                        <MapLoader

                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_MAP_API_KEY}
                            loadingElement={<div />}
                            containerElement={<div />}
                            mapElement={<div />}
                            pickup={this.props.pickup}
                            dropoff={this.props.dropoff}

                        />
                        <EnhancedTable
                            data={this.props.bookings.bookings}
                            handleTableClick={(record) => this.handleTableClick(record)}
                        />
                    </div> :
                    <Loader />
                }
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        bookings: state.bookings,
        pickup: state.map.pickup,
        dropoff: state.map.dropoff
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getBookings, changeMapDirection, userLogout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard);
