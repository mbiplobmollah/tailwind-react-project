import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Bob", "physics": 74, "chemistry": 81, "math": 88 },
    { "id": 3, "name": "Charlie", "physics": 91, "chemistry": 89, "math": 95 },
    { "id": 4, "name": "Diana", "physics": 68, "chemistry": 72, "math": 70 },
    { "id": 5, "name": "Ethan", "physics": 79, "chemistry": 85, "math": 80 },
    { "id": 6, "name": "Fiona", "physics": 88, "chemistry": 90, "math": 86 },
    { "id": 7, "name": "George", "physics": 67, "chemistry": 74, "math": 78 },
    { "id": 8, "name": "Hannah", "physics": 93, "chemistry": 95, "math": 97 },
    { "id": 9, "name": "Ian", "physics": 76, "chemistry": 69, "math": 73 },
    { "id": 10, "name": "Julia", "physics": 82, "chemistry": 87, "math": 90 }
  ]
  

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={700} height={500} data={resultData}>

            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>

                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={"physics"}></Line>

            </LineChart>
        </div>
    );
};

export default ResultsChart;