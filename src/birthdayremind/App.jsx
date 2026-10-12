
import React, { useState } from "react";

import Navbar from "./birthdayremind/BirthdayReminder/Navbar";
import BirthdayDashboard from "./birthdayremind/BirthdayReminder/BirthdayDashboard";
import Footer from "./birthdayremind/BirthdayReminder/Footer";

import birthdays from "./birthdayremind/data/birthdays";
import { sortBirthdays } from "./birthdayremind/utils/birthdayUtils";

function App() {
  const [activeTab, setActiveTab] = useState("Today");

  const sortedBirthdays = sortBirthdays(birthdays);

  return (
    <div className="app">
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <BirthdayDashboard
        activeTab={activeTab}
        people={sortedBirthdays}
      />

      <Footer />
    </div>
  );
}

export default App;