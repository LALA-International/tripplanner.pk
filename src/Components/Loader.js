import React from "react";
import { Spin } from "antd";
const Loader = () => {
    const loadingStyle = {
        height: "81vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={loadingStyle}>
            <Spin />
        </div>
    );
};

export default Loader;