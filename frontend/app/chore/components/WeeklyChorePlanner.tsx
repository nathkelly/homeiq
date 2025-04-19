'use client'

import { useEffect, useState } from 'react'
import { format, startOfWeek } from 'date-fns'
import DashboardCard from '@/components/ui/DashboardCard'

type User = {
  id: number
  firstName: string
  lastName: string
}

type Chore = {
  id: number
  title: string
}

type Assignment = {
    id: number;
    chore: {
      title: string;
    };
    user: {
      firstName: string;
    };
  };

export default function WeeklyChorePlanner() {
  const [users, setUsers] = useState<User[]>([])
  const [chores, setChores] = useState<Chore[]>([])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [selectedChoreId, setSelectedChoreId] = useState<number | null>(null)
  const [weekStart, setWeekStart] = useState<string>(
    format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd')
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, choresRes, assignmentsRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chore`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chore/getWeekAssignments?weekStart=${weekStart}`),
        ]);
  
        const users = await usersRes.json();
        const chores = await choresRes.json();
        const assignments = await assignmentsRes.json();
  
        setUsers(users);
        setChores(chores);
        setAssignments(assignments.map((a: any) => ({
          id: a.id,
          user: a.user,
          chore: a.chore,
        })));
      } catch (err) {
        console.error("API Load Error", err);
      }
    };
  
    fetchData();
  }, [weekStart]);
  
  
  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chore/getWeekAssignments`);
      const data = await res.json();
      setAssignments(data);
    };

    fetchAssignments();
  }, []);

  const handleAddAssignment = async () => {
    if (!selectedUserId || !selectedChoreId) return

    const res = await fetch('http://localhost:3001/api/chore/assign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: selectedUserId,
        choreId: selectedChoreId,
        weekStart,
      }),
    })

    const data = await res.json()
    setAssignments(prev => [...prev, {
      id: data.id,
      user: users.find(u => u.id === selectedUserId)!,
      chore: chores.find(c => c.id === selectedChoreId)!,
    }])

    setSelectedChoreId(null)
    setSelectedUserId(null)
  }

  const handleRemoveAssignment = async (id: number | undefined) => {
    if (!id) return
    await fetch(`http://localhost:3001/api/chore/assign/${id}`, { method: 'DELETE' })
    setAssignments(assignments.filter(a => a.id !== id))
  }

  return (
    <DashboardCard title="Weekly Chore Planner" className="col-span-3">
      <div className="space-y-4">
        <div className="flex gap-4 items-end flex-wrap">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Week Starting</label>
            <input
              type="date"
              value={weekStart}
              onChange={e => setWeekStart(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Assign To</label>
            <select
              value={selectedUserId ?? ''}
              onChange={e => setSelectedUserId(Number(e.target.value))}
              className="border rounded px-2 py-1"
            >
              <option value="">Select a child</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.firstName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Chore</label>
            <select
              value={selectedChoreId ?? ''}
              onChange={e => setSelectedChoreId(Number(e.target.value))}
              className="border rounded px-2 py-1"
            >
              <option value="">Select a chore</option>
              {chores.map(chore => (
                <option key={chore.id} value={chore.id}>
                  {chore.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddAssignment}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Chore
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {assignments.map((assignment, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>
                {assignment.user.firstName} — {assignment.chore.title}
              </span>
              <button
                onClick={() => handleRemoveAssignment(assignment.id)}
                className="text-red-600 hover:text-red-800"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  )
}
