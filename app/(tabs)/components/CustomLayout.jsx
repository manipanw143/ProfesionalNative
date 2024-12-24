import React from "react";
import { Text, View } from "react-native";

const CustomLayout = ({ children }) => {
    return <View style={{ padding: "16px" }}>
        <Text>CustomLayout {children}</Text>
    </View>;
    
};

export default CustomLayout;
