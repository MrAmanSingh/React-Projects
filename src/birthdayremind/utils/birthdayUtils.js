
export function getBirthdayInfo(person, today = new Date()) {
  const [year, month, day] = person.dob.split("-").map(Number);

  const currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const birthThisYear = new Date(
    currentDate.getFullYear(),
    month - 1,
    day
  );

  // Handle February 29 in non-leap years.
  if (month === 2 && day === 29 &&
      birthThisYear.getMonth() !== 1) {
    birthThisYear.setDate(28);
  }

  let age = currentDate.getFullYear() - year;

  if (birthThisYear > currentDate) {
    age--;
  }

  let nextBirthday = new Date(birthThisYear);

  if (nextBirthday < currentDate) {
    nextBirthday = new Date(
      currentDate.getFullYear() + 1,
      month - 1,
      day
    );

    if (month === 2 && day === 29 &&
        nextBirthday.getMonth() !== 1) {
      nextBirthday.setDate(28);
    }
  }

  const daysLeft = Math.round(
    (nextBirthday - currentDate) / 86400000
  );

  return {
    age,
    daysLeft,
    isToday: daysLeft === 0,
    nextBirthday,
  };
}

export function sortBirthdays(people, today = new Date()) {
  return people
    .map((person) => ({
      ...person,
      ...getBirthdayInfo(person, today),
    }))
    .sort((a, b) => {
      if (a.daysLeft !== b.daysLeft) {
        return a.daysLeft - b.daysLeft;
      }

      return a.name.localeCompare(b.name);
    });
}

export function formatBirthday(date) {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}