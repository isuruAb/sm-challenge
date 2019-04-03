import React from 'react';
import AppBarComponent from '../../AppBarComponent/AppBarComponent';
import Map from '../../Map/Map'
import { withScriptjs } from "react-google-maps";

class MainDashboard extends React.Component {

    render() {
        var MapLoader = withScriptjs(Map);

        return (

            <div>
                <AppBarComponent />
                <MapLoader
                // This key should be replaced from my key
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
                    loadingElement={<div style={{ height: `100%` }}/>}
                />            
            </div>)
    }
}

export default MainDashboard;