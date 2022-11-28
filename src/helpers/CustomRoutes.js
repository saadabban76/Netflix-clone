import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function CustomRoute({ user, loggedInPath, children, ...rest}) {
    return (
        <Route
            {...rest}
            render={()=>{
                if(!user) {
                    return children;
                }

                if(user) {
               return (
                    <Redirect
                        to={{
                            pathname: loggedInPath,
                        }}
                    />
                  );
                }
                return null;
            }}
        />
    );
}

export function ProtectedRoute({children, user, restProps}) {
    return (
        <Route
            {...restProps}
            render={({ location })=>{
                if(!user) {
                    return (
                    <Redirect 
                        to={{
                            pathname : 'signin',
                            state: {from: location}
                        }}
                    />
                    )
                }
                if(user) {
                    return children;
                }
                return null;
            }}
        />
    )
}