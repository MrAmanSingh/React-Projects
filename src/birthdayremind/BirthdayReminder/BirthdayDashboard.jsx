import React from "react";
import BirthdayList from "./BirthdayList";
import { formatBirthday } from "../utils/birthdayUtils";

function BirthdayDashboard({ activeTab, people }) {
  const todayBirthdays = people.filter(
    (person) => person.isToday
  );

  const upcomingBirthdays = people.filter(
    (person) => !person.isToday
  );

  let title;
  let description;
  let displayedPeople;

  switch (activeTab) {
    case "Today":
      title = `${todayBirthdays.length} Birthdays Today`;
      description = "Make someone's day extra special.";
      displayedPeople = todayBirthdays;
      break;

    case "Upcoming":
      title = "Upcoming Birthdays";
      description = "Never miss a special day.";
      displayedPeople = upcomingBirthdays;
      break;

    default:
      title = "All Birthdays";
      description = "All your special people in one place.";
      displayedPeople = people;
  }

  const nextBirthday = upcomingBirthdays[0];

  return (
    <main className="dashboard" id="home">
      <header className="dashboard-header">
        <span className="eyebrow">YOUR PERSONAL REMINDER</span>
        <h1>{title}</h1>
        <p className="subtitle">{description}</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <span className="stat-icon">🎉</span>
          <div>
            <strong>{todayBirthdays.length}</strong>
            <p>Today</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">📅</span>
          <div>
            <strong>{upcomingBirthdays.length}</strong>
            <p>Upcoming</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">👥</span>
          <div>
            <strong>{people.length}</strong>
            <p>Total people</p>
          </div>
        </div>
      </section>

      {activeTab === "Upcoming" && nextBirthday && (
        <section className="next-birthday">
          <span className="next-icon">⏰</span>
          <div>
            <span className="next-label">NEXT BIRTHDAY</span>
            <h3>{nextBirthday.name}</h3>
            <p>
              {formatBirthday(nextBirthday.nextBirthday)}
              {" · "}
              {nextBirthday.daysLeft === 1
                ? "Tomorrow"
                : `In ${nextBirthday.daysLeft} days`}
            </p>
          </div>
        </section>
      )}

      <section className="birthday-section">
        <div className="section-heading">
          <h2>{activeTab}</h2>
          <span>{displayedPeople.length} people</span>
        </div>

        <BirthdayList
          people={displayedPeople}
          emptyMessage={
            activeTab === "Today"
              ? "No birthdays today. Check back tomorrow!"
              : activeTab === "Upcoming"
              ? "No upcoming birthdays."
              : "Your birthday list is empty."
          }
        />
      </section>
    </main>
  );
}

export default BirthdayDashboard;