import './feature.css';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';

export default function Feature() {
    const [income, setIncome] = useState([]);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("/orders/income");
                setIncome(res.data);
                setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
            } catch { }
        };
        getIncome();
    }, []);
    return (
        <div className="feature">
            <div className="feature-item">
                <span className="feature-title">Revenue</span>
                <div className="feature-money-container">
                    <span className="feature-money">$ {income[1]?.total}</span>
                    <span className="feature-money-rate">
                        {percentage < 0 ?
                            (<ArrowDownwardOutlined className="feature-icon negative" />)
                            : (<ArrowUpwardOutlined className="feature-icon positive" />)}
                        {Math.floor(percentage)}%
                    </span>
                </div>
                <span className="feature-subtitle">Compared to last month</span>
            </div>
            <div className="feature-item">
                <span className="feature-title">Sales</span>
                <div className="feature-money-container">
                    <span className="feature-money">$ 25</span>
                    <span className="feature-money-rate">
                        <ArrowDownwardOutlined className="feature-icon negative" /> 11%
                    </span>
                </div>
                <span className="feature-subtitle">Compared to last month</span>
            </div>
            <div className="feature-item">
                <span className="feature-title">Cost</span>
                <div className="feature-money-container">
                    <span className="feature-money">$ 25</span>
                    <span className="feature-money-rate">
                        <ArrowUpwardOutlined className="feature-icon positive" /> 14%
                    </span>
                </div>
                <span className="feature-subtitle">Compared to last month</span>
            </div>
        </div>
    )
}
