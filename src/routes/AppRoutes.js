import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import App from "../App";
import { PantallaInfo } from "../components/descripcion/PantallaInfo";

export const AppRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={'/'} component={App} />
                    <Route exact path={'/descripcion'} component={PantallaInfo} />
                    <Redirect to={'/'} />
                </Switch>                   
            </div>
        </Router>
    )
}
