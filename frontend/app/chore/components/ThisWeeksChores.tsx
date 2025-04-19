"use client";

import { useEffect, useState } from "react";
import DashboardCard from "@/components/ui/DashboardCard";

type Assignment = {
  id: number;
  weekStart: string;
  chore: {
    title: string;
  };
  user: {
    firstName: string;
  };
};

export default function ThisWeeksChores() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const fetchChores = async () => {
      try {
        const res = await fetch(`/api/chore/getWeekAssignments`);
        const data = await res.json();
        setAssignments(data);
      } catch (err) {
        console.error("Failed to fetch chores", err);
      }
    };

    fetchChores();
  }, []);

  return (
    <DashboardCard className="col-span-12 md:col-span-3">
      <h2 className="text-xl font-semibold mb-3">This Week’s Chores</h2>
      <ul className="space-y-2">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="flex justify-between">
            <span>{assignment.user.firstName}</span>
            <span>{assignment.chore.title}</span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
