import React, {useContext} from 'react';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {BODY_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useTransition, animated} from "react-spring";



const AppRouter = observer(() => {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: {
            opacity: 0,

        },
        enter: {
            opacity: 1,

        },
        leave: {
            opacity: 0,

        }
    })
    const {user} = useContext(Context)
    return transitions((props, item) => (
        <div style={{position:"relative"}}>
            <animated.div style={props}>

                <div style={{position: "absolute", width: '100%'}}>
                    <Switch location={item}>
                        {user.IsAuth && authRoutes.map(({path, component}) =>
                            <Route key={path} path={path} component={component} exact/>
                        )}
                        {publicRoutes.map(({path, component}) =>
                            <Route key={path} path={path} component={component} exact/>
                        )}
                        <Redirect to={BODY_ROUTE}/>
                    </Switch>
                </div>

            </animated.div>
        </div>

    ))


});

export default AppRouter;