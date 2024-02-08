import { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define getData inside the useEffect callback
    const getData = () => {
      const newData = allLocations.map((location) => {
        const count = events.filter((event) => event.location === location).length
        const city = location.split(', ')[0]
        return { city, count };
      })
      return newData;
    };

    // Call getData to retrieve data
    const newData = getData();
    setData(newData);

  }, [allLocations, events]); // Include allLocations and events in the dependency array
  
  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="City" />
        <YAxis type="number" dataKey="count" name="Number of events" allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );

}
export default CityEventsChart