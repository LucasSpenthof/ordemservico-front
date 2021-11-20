import React from "react"
import Card from "../components/card";
import FormGroup from "../components/formgroup";

class CadastroServidor extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bd-docs-session">
                            <Card title="cadastro servidor">
                                <h3>Cadastro servidor</h3>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CadastroServidor;