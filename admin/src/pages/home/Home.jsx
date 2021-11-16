import Chart from '../../components/chart/Chart';
import Feature from '../../components/feature/Feature';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart data={userData} title="User Analytic" grid dataKey="Active User" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
