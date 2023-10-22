import React from "react";

export default function Instrunctions({ title, steps }) {
    return (
        <section className="instructions">
            <h2>{title}</h2>
            {steps.map((step, i) => (
                <p key={i}>{step}</p>
            ))}
        </section>
    );
}
