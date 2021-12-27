import React from "react";
import LgWidgetStyles from "./LgWidgetStyles";
import Button from "../../../Button/Button";

const LgWidget = () => {
  return (
    <LgWidgetStyles>
      <h5>Latest transactions</h5>
      <table>
        <thead>
          <tr>
            <th className="title">Customer</th>
            <th className="title">Date</th>
            <th className="title">Amount</th>
            <th className="title">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="Date">2 jun 2021</td>
            <td className="Amount">$122.00</td>
            <td className="Status">
              <Button className="approved">Approved</Button>
            </td>
          </tr>
          <tr>
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="Date">2 jun 2021</td>
            <td className="Amount">$122.00</td>
            <td className="Status">
              <Button className="declined">Declined</Button>
            </td>
          </tr>
          <tr>
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="Date">2 jun 2021</td>
            <td className="Amount">$122.00</td>
            <td className="Status">
              <Button className="pending">Pending</Button>
            </td>
          </tr>
          <tr>
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="Date">2 jun 2021</td>
            <td className="Amount">$122.00</td>
            <td className="Status">
              <Button className="approved">Approved</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </LgWidgetStyles>
  );
};

export default LgWidget;
