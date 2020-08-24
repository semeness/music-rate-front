import React from "react";
import {
    LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import Page from "modules/common/components/Page";
import './index.scss';

const data = [
    {
        time: "12:00",
        mood: 10,
    },
    {
        time: "14:20",
        mood: 7,
    },
    {
        time: "15:00",
        mood: 6,
    },
    {
        time: "16:10",
        mood: 8,
    },
    {
        time: "16:30",
        mood: 4,
    },
    {
        time: "16:55",
        mood: 9,
    },
    {
        time: "17:30",
        mood: 5,
    },
]

export default function Chart() {
    return (
      <Page title="Chart">
        <div className="chart">
          <ResponsiveContainer height={300}>
            <LineChart
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Page>
    );
}
