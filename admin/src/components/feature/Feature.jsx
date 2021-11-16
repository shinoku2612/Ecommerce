import './feature.css';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';

export default function Feature() {
    return (
        <div className="feature">
            <div className="feature-item">
                <span className="feature-title">Revanue</span>
                <div className="feature-money-container">
                    <span className="feature-money">$ 25</span>
                    <span className="feature-money-rate">
                        <ArrowDownwardOutlined className="feature-icon negative"/> 14%
                    </span>
                </div>
                <span className="feature-subtitle">Compared to last month</span>
            </div>
            <div className="feature-item">
                <span className="feature-title">Sales</span>
                <div className="feature-money-container">
                    <span className="feature-money">$ 25</span>
                    <span className="feature-money-rate">
                        <ArrowDownwardOutlined className="feature-icon negative"/> 11%
                    </span>
                </div>
                <span className="feature-subtitle">Compared to last month</span>
            </div>
            <div className="feature-item">
                <span className="feature-title">Cost</span>
                <div className="feature-money-container">
                    <span className="feature-money">$ 25</span>
                    <span className="feature-money-rate">
                        <ArrowUpwardOutlined className="feature-icon positive"/> 14%
                    </span>
                </div>
                <span className="feature-subtitle">Compared to last month</span>
            </div>
        </div>
    )
}
