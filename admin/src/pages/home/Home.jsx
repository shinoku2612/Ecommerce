import Chart from '../../components/chart/Chart';
import Feature from '../../components/feature/Feature';
import './home.css';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../requestMethods';

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats")
        res.data.map(item => (
          setUserStats(prev => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total }
          ])
        ))
      } catch { }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <Feature />
      <Chart data={userStats} title="User Analytic" grid dataKey="Active User" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
