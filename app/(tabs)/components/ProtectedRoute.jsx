import React from "react";
// import { Navigate } from "react-router-dom";
// import { Authenticated } from "@refinedev/core";
import { Text, View } from "react-native";

const ProtectedRoute = ({ children }) => {
    return (
        // <Authenticated fallback={<Navigate to="/login" replace />}>
        //     {children}
        // </Authenticated>
        <View>
            <Text>ProtectedRoute  {children}</Text>
        </View>
    );
};

export default ProtectedRoute;
