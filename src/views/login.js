import React from "react"
import Card from "../components/card";
import FormGroup from "../components/formgroup";

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bd-docs-session">
                            <Card title="Login">
                                <fieldset>
                                    <FormGroup label="Email: " htmlfor="inputEmail">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    </FormGroup>
                                    <FormGroup label="Password: " htmlfor="inputEmail">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                    </FormGroup>
                                    <button type="button" className="btn btn-primary" style={{margin: '5px 5px 0 0'}}>Acessar</button>
                                    <button type="button" className="btn btn-info" style={{margin: '5px 5px 0 0'}}>Cadastrar</button>

                                </fieldset>          
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;