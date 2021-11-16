import './widgetLg.css';

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={`widgetLg-btn ${type}`}> {type}</button >
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLg-title">Latest Transactions</h3>
            <table className="widgetLg-table">
                <tr className="widgetLg-row">
                    <th className="widgetLg-header">Customer</th>
                    <th className="widgetLg-header">Date</th>
                    <th className="widgetLg-header">Amount</th>
                    <th className="widgetLg-header">Status</th>
                </tr>
                <tr className="widgetLg-row">
                    <td className="widgetLg-user">
                        <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="widgetLg-img" />
                        <span className="widgetLg-name">Shinoku Kimawari</span>
                    </td>
                    <td className="widgetLg-date">14 Nov 2021</td>
                    <td className="widgetLg-amount">$ 99</td>
                    <td className="widgetLg-status">
                        <Button type="declined" />
                    </td>
                </tr>
                <tr className="widgetLg-row">
                    <td className="widgetLg-user">
                        <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="widgetLg-img" />
                        <span className="widgetLg-name">Shinoku Kimawari</span>
                    </td>
                    <td className="widgetLg-date">14 Nov 2021</td>
                    <td className="widgetLg-amount">$ 99</td>
                    <td className="widgetLg-status">
                        <Button type="pending" />
                    </td>
                </tr>
                <tr className="widgetLg-row">
                    <td className="widgetLg-user">
                        <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="widgetLg-img" />
                        <span className="widgetLg-name">Shinoku Kimawari</span>
                    </td>
                    <td className="widgetLg-date">14 Nov 2021</td>
                    <td className="widgetLg-amount">$ 99</td>
                    <td className="widgetLg-status">
                        <Button type="approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}