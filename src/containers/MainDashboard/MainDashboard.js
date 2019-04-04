import React from 'react';
import AppBarComponent from '../../components/AppBarComponent/AppBarComponent';
import Map from '../../components/Map/Map'
import { withScriptjs } from "react-google-maps";
import { connect } from 'react-redux';
import { getBookings } from '../../actions/bookings_actions'
import EnhancedTable from "../../components/Table/Table"
import { bindActionCreators } from 'redux';
import Loader from '../../components/Loader/Loader'

class MainDashboard extends React.Component {
    componentDidMount() {
        this.props.getBookings();
    }
    render() {
        var MapLoader = withScriptjs(Map);
        console.log("this.props.bookings", this.props.bookings.bookings);
        return (

            <div>

                <AppBarComponent />
                {this.props.bookings.bookings.length > 0 &&
                    <div>
                        <MapLoader
                            // This key should be replaced from my key
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
                            loadingElement={<div style={{ height: `100%` }} />}
                        />
                        <EnhancedTable
                            data={this.props.bookings}
                        />
                    </div> ?
                    <div>
                        <MapLoader
                            // This key should be replaced from my key
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
                            loadingElement={<div style={{ height: `100%` }} />}
                        />
                        <EnhancedTable
                            data={this.props.bookings}
                        />
                    </div> :
                    <Loader />
                }

            </div>)
    }
}


const mapStateToProps = (state) => {
    return {
        bookings: state.bookings
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getBookings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard);
