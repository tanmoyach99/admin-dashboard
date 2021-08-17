import React from "react";
import "./widgetlarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/f0kK5w2/IMG-20201121-232938-removebg-preview.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12Aug,2021</td>
          <td className="widgetLgAmount">$121</td>
          <td className="widgetLgStatus">
            <Button type="approved"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/f0kK5w2/IMG-20201121-232938-removebg-preview.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12Aug,2021</td>
          <td className="widgetLgAmount">$121</td>
          <td className="widgetLgStatus">
            <Button type="declined"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/f0kK5w2/IMG-20201121-232938-removebg-preview.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12Aug,2021</td>
          <td className="widgetLgAmount">$121</td>
          <td className="widgetLgStatus">
            <Button type="pending"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/f0kK5w2/IMG-20201121-232938-removebg-preview.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12Aug,2021</td>
          <td className="widgetLgAmount">$121</td>
          <td className="widgetLgStatus">
            <Button type="approved"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
