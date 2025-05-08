"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          const workers = [{ name: "k" }, { name: "l" }, { name: "o" }];
          const sortedWorkers = _.orderBy(workers, ["name"]);
          console.log(sorted);
          console.log(sortedWorkers);
        }}
      >
        Show
      </button>
    </main>
  );
}
