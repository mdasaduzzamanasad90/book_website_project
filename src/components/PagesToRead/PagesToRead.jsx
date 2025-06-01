import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const PagesToRead = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" w-full h-[500px] mt-20">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="bookName"
            angle={0}
            textAnchor="end"
            interval={0}
            tickFormatter={(bookName) =>
              bookName.length > 10 ? bookName.slice(0, 10) + "..." : bookName
            }
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalPages" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
