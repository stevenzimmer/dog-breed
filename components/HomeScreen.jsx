import React from "react";

export default function HomeScreen() {
    return (
        <div>
            <h1 className="text-center mb-12  text-4xl md:text-7xl">
                Dog breed guessing game
            </h1>
            <div className="mb-12 text-left px-12">
                <p className="text-2xl font-semibold mb-2">Built with:</p>
                <ul className="list-disc pl-8">
                    <li>React</li>
                    <li>TailwindCSS </li>
                    <li>Vite</li>
                    <li>Immer</li>
                    <li>dog.ceo API</li>
                </ul>
            </div>
        </div>
    );
}
