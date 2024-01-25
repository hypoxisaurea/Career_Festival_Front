import React from "react";

const FestivalHistory = () => {
  return (
    <div>
      <h2>Festival History</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022-01-01</td>
            <td>New Year's Festival</td>
            <td>Main Square</td>
            <td>A celebration for the new year</td>
          </tr>
          <tr>
            <td>2022-05-15</td>
            <td>Spring Festival</td>
            <td>Park</td>
            <td>Enjoy the beauty of spring</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default FestivalHistory;
