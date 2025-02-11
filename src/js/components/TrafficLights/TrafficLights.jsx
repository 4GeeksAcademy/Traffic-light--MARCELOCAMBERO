import React from "react";
import "./TrafficLights.css";

const TrafficLights = (props) => {
    return (
        <div className="base">
            <div className="miSemaforo">
                <div
                    className={`redLight ${props.color === "red" ? "on" : ""}`}
                    onClick={() => props.changingColors("red")}
                ></div>

                <div
                    className={`yellowLight ${props.color === "yellow" ? "on" : ""}`}
                    onClick={() => props.changingColors("yellow")}
                ></div>

                <div
                    className={`greenLight ${props.color === "green" ? "on" : ""}`}
                    onClick={() => props.changingColors("green")}
                ></div>
            </div>
        </div>
    );
};

export default TrafficLights;
