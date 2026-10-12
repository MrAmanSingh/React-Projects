
import React from "react";
import BirthdayPerson from "./BirthdayPerson";

function BirthdayList({ people, emptyMessage }) {
  if (people.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🎈</div>
        <h3>No birthdays here</h3>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="birthday-list">
      {people.map((person) => (
        <BirthdayPerson key={person.id} person={person} />
      ))}
    </div>
  );
}

export default BirthdayList;