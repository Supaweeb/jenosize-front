import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = (props) => {
    return (
        <>
            <LineChart width={350} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} style={{ margin: "1em 0" }}>
                <Line type="monotone" dataKey={props.select} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </>
    )
}

export default Chart
