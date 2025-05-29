import { notFound } from "next/navigation";
import Link from "next/link";

interface Lesson {
  title: string;
  duration: string;
  videoUrl?: string;
}

interface CourseDetail {
  slug: string;
  title: string;
  description: string;
  curriculum: {
    section: string;
    lessons: Lesson[];
  }[];
  resources: {
    title: string;
    fileUrl: string;
  }[];
}

// Dummy data store
const courseMap: CourseDetail[] = [
  {
    slug: "html5-css3",
    title: "Mastering HTML5 & CSS3",
    description:
      "Dive deep into modern HTML5 and CSS3 techniques. Build responsive layouts, flexbox, grid, animations, and more.",
    curriculum: [
      {
        section: "Day 1: HTML5 Basics",
        lessons: [
          {
            title: "What is HTML5?",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Lecture 1 - HTML5 Basics",
        fileUrl: "/dummy/html5-cheatsheet.zip",
      },
    ],
  },
  // You can add more course objects here similarly...
];

export function generateStaticParams() {
  return courseMap.map((course) => ({ slug: course.slug }));
}

interface Params {
  slug: string;
}

export default function CourseLearnPage({ params }: { params: Params }) {
  const course = courseMap.find((c) => c.slug === params.slug);
  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <Link
        href="/dashboard-students/my-course"
        className="text-blue-400 mb-4 inline-block"
      >
        ← Back to My Courses
      </Link>

      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-400 mb-6">{course.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 🎬 Video Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">📺 Video Lessons</h2>
          {course.curriculum.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl mb-2">{section.section}</h3>
              <ul className="space-y-4">
                {section.lessons.map((lesson, j) => (
                  <li key={j} className="bg-black p-4 rounded shadow">
                    <p className="font-medium">{lesson.title}</p>
                    <p className="text-sm text-gray-500">{lesson.duration}</p>
                    {lesson.videoUrl && (
                      <div className="mt-3 aspect-video">
                        <iframe
                          src={lesson.videoUrl}
                          title={lesson.title}
                          allowFullScreen
                          className="w-full h-full rounded"
                        ></iframe>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 📁 File Downloads Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            📁 Downloadable Resources
          </h2>
          <ul className="space-y-4">
            {course.resources.map((file, idx) => (
              <li
                key={idx}
                className="bg-black p-4 rounded shadow flex items-center justify-between"
              >
                <span>{file.title}</span>
                <a
                  href={file.fileUrl}
                  download
                  className="text-blue-400 underline"
                >
                  Download ZIP
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
