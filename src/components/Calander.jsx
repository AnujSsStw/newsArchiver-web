import { useState } from "react";
import { Calendar } from "@mantine/dates";
import NewsFeeds from "./NewsFeeds";

const today = new Date();

const Cal = () => {
  const [value, setValue] = useState(today);

  return (
    <div className="flex flex-col md:flex-row">
      <section className="dark:bg-gray-900 md:min-h-screen shadow-xl p-8">
        <h1 className="logo">News Archiver</h1>
        <Calendar
          value={value}
          onChange={setValue}
          className="md:sticky md:top-14 dark:bg-gray-100 rounded-xl m-auto"
        />
      </section>
      <NewsFeeds date={value} />
    </div>
  );
};

export default Cal;
