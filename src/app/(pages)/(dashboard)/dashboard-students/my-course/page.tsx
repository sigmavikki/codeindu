// app/dashboard-students/my-course/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number; // 0–100%
  status: "Enrolled" | "In Progress" | "Completed";
  materialsUrl: string;
  learnUrl: string;
}

export default function MyCoursesPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);

  // Simulate fetching enrolled courses
  useEffect(() => {
    setCourses([
      {
        id: 1,
        title: "Mastering HTML5 & CSS3",
        instructor: "Vikki Verma",
        progress: 1,
        status: "In Progress",
        materialsUrl: "/materials/html5-css3.zip",
        learnUrl: "my-course/html5-css3",
      },
    ]);
  }, []);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📚 Enrolled Courses</h1>
      <p className="text-gray-600 mb-6">
        Access your learning materials or pick up where you left off.
      </p>

      {courses.length === 0 ? (
        <p className="text-gray-500">
          You haven&apos;t enrolled in any courses yet.
        </p>
      ) : (
        <ul className="space-y-6">
          {courses.map((course) => (
            <li
              key={course.id}
              className="bg-gray-800 shadow rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-500">Course: {course.title}</p>
                <div className="mt-3 flex items-center space-x-3">
                  <div className="w-48 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 bg-[#0066ff]"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">
                    {course.progress}%
                  </span>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex flex-col space-y-2">
                <button
                  onClick={() => router.push(course.learnUrl)}
                  className="px-4 py-2 bg-[#0066ff] hover:bg-[#0052cc] text-white rounded-lg text-sm font-medium"
                >
                  Continue Learning
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
