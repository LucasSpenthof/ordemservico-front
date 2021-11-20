import React from "react"
import Card from "../components/card";
import FormGroup from "../components/formgroup";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bd-docs-session">
                            <Card title="Home">
                                <h3>Home Page</h3>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;