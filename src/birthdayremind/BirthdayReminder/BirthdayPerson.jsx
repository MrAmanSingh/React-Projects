import React from "react";
import { formatBirthday } from "../utils/birthdayUtils";

function BirthdayPerson({ person }) {
  let message;

  if (person.daysLeft === 0) {
    message = "🎉 Today!";
  } else if (person.daysLeft === 1) {
    message = "Tomorrow";
  } else {
    message = `In ${person.daysLeft} days`;
  }

  return (
    <article className="birthday-person">
      <img
        className="person-image"
        src={person.image}
        alt={person.name}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src =
            "https://placehold.co/100x100?text=Photo";
        }}
      />

      <div className="person-info">
        <h3>{person.name}</h3>
        <p>{person.age} years old</p>
        <small>
          Next birthday: {formatBirthday(person.nextBirthday)}
        </small>
      </div>

      <span
        className={
          person.daysLeft === 0
            ? "countdown today-countdown"
            : "countdown"
        }
      >
        {message}
      </span>
    </article>
  );
}

export default BirthdayPerson;