"use client";

import Image from "next/image";
import Link from "next/link";

const course = {
  id: 1,
  title: "Mastering HTML 5 Complete Course 2025 - Learn Web Development",
  thumbnail: "/images/courses/html.png",
  category: "Development",
  originalPrice: 499,
  discountedPrice: 49,
  duration: "90 Minutes",
  description:
    "This comprehensive HTML5 course covers all aspects of modern web development—from semantic markup to forms, multimedia, and best practices.",
  instructor: "Vikki Verma",
  level: "Beginner to Intermediate",
  language: "English, Hindi",
  reviews: 4.5,
  rating: 4.5,
  enrollments: 1,
  lessons: 10,
  lessonsCompleted: 5,
  lastUpdated: "2025-06-01",
  requirements: [
    "Basic computer skills",
    "No prior coding experience required",
    "A computer with internet access",
  ],
  features: [
    "Lifetime access to course materials",
    "Downloadable resources",
    "Quizzes and assignments",
    // "Certificate of completion",
  ],
  curriculum: [
    {
      title: "Introduction to HTML5",
      lessons: [
        { title: "HTML Overview", duration: "10 minutes" },
        { title: "Basic HTML Document", duration: "10 minutes" },
        { title: "HTML Tags & Structure", duration: "15 minutes" },
        { title: "DOCTYPE Declaration", duration: "5 minutes" },
      ],
    },
    {
      title: "HTML Tags and Formatting",
      lessons: [
        { title: "Heading & Paragraph Tags", duration: "10 minutes" },
        { title: "Line Breaks & Centering", duration: "10 minutes" },
        { title: "Horizontal Lines & Formatting", duration: "10 minutes" },
        { title: "Nonbreaking Spaces", duration: "5 minutes" },
      ],
    },
    {
      title: "HTML Elements and Attributes",
      lessons: [
        { title: "HTML Tag vs Element", duration: "10 minutes" },
        { title: "Nested HTML Elements", duration: "10 minutes" },
        { title: "Core & i18n Attributes", duration: "10 minutes" },
        { title: "The xml:lang Attribute", duration: "5 minutes" },
      ],
    },
    {
      title: "Text Formatting & Phrase Tags",
      lessons: [
        { title: "Bold, Italic, Underline, Strike", duration: "15 minutes" },
        { title: "Monospaced, Sup/Subscript", duration: "10 minutes" },
        { title: "Insert/Delete, Large/Small Text", duration: "10 minutes" },
        { title: "Emphasized, Marked, Strong Text", duration: "10 minutes" },
      ],
    },
    {
      title: "Special Tags & Quotes",
      lessons: [
        { title: "Abbreviation, Acronym, Direction", duration: "10 minutes" },
        { title: "Quotations & Citations", duration: "10 minutes" },
        { title: "Code, Keyboard, Variables", duration: "10 minutes" },
        { title: "Output & Address Tags", duration: "5 minutes" },
      ],
    },
    {
      title: "Meta Information & Comments",
      lessons: [
        { title: "Adding Meta Tags", duration: "10 minutes" },
        { title: "Keywords, Description, Author", duration: "10 minutes" },
        { title: "Revision, Refresh, Redirect", duration: "10 minutes" },
        { title: "Valid & Invalid Comments", duration: "10 minutes" },
      ],
    },
    {
      title: "HTML Images",
      lessons: [
        { title: "Insert Images & Attributes", duration: "10 minutes" },
        { title: "Set Size, Border & Alignment", duration: "10 minutes" },
        { title: "Free Web Graphics", duration: "5 minutes" },
      ],
    },
    {
      title: "HTML Tables",
      lessons: [
        { title: "Table Headings, Padding, Spacing", duration: "10 minutes" },
        { title: "Colspan, Rowspan, Height, Width", duration: "10 minutes" },
        { title: "Table Caption & Sections", duration: "10 minutes" },
        { title: "Nested Tables", duration: "10 minutes" },
      ],
    },
    {
      title: "HTML Lists",
      lessons: [
        { title: "Unordered Lists & Types", duration: "10 minutes" },
        { title: "Ordered Lists & Attributes", duration: "10 minutes" },
        { title: "Definition Lists", duration: "10 minutes" },
      ],
    },
    {
      title: "Text & Image Links",
      lessons: [
        { title: "Linking Documents", duration: "10 minutes" },
        { title: "Target & Base Path", duration: "10 minutes" },
        { title: "Section Links & Link Colors", duration: "10 minutes" },
        { title: "Image Links & Maps", duration: "10 minutes" },
      ],
    },
    {
      title: "Email & Multimedia",
      lessons: [
        { title: "HTML Email Links", duration: "5 minutes" },
        { title: "Default Settings & Downloads", duration: "10 minutes" },
        { title: "Embedded Audio/Video", duration: "10 minutes" },
        { title: "Object & Embed Tags", duration: "10 minutes" },
      ],
    },
    {
      title: "Frames & Iframes",
      lessons: [
        { title: "Frames, Attributes, Disadvantages", duration: "10 minutes" },
        { title: "Named Targets & Browser Support", duration: "10 minutes" },
        { title: "Iframes & Attributes", duration: "10 minutes" },
      ],
    },
    {
      title: "HTML Blocks & Backgrounds",
      lessons: [
        { title: "Block vs Inline Elements", duration: "10 minutes" },
        { title: "DIV & SPAN Tags", duration: "10 minutes" },
        { title: "Background Colors & Images", duration: "10 minutes" },
      ],
    },
    {
      title: "Colors & Fonts",
      lessons: [
        { title: "Color Names, Hex, RGB, Safe Colors", duration: "10 minutes" },
        { title: "Font Size, Face, Color", duration: "10 minutes" },
        { title: "Basefont Tag Example", duration: "5 minutes" },
      ],
    },
    {
      title: "HTML Forms",
      lessons: [
        { title: "Form Attributes & Controls", duration: "10 minutes" },
        { title: "Text & Password Inputs", duration: "10 minutes" },
        { title: "Textareas, Checkbox, Radio", duration: "10 minutes" },
        { title: "Select Box, File Uploads", duration: "10 minutes" },
        { title: "Buttons & Hidden Inputs", duration: "10 minutes" },
      ],
    },
    {
      title: "HTML Marquee & Header Tags",
      lessons: [
        { title: "Marquee Tag & Attributes", duration: "5 minutes" },
        { title: "HTML Header Tags", duration: "5 minutes" },
      ],
    },
    {
      title: "HTML Head & Styling",
      lessons: [
        { title: "<title>, <meta>, <link>, <style>", duration: "10 minutes" },
        { title: "External, Internal, Inline Styles", duration: "10 minutes" },
      ],
    },
    {
      title: "JavaScript in HTML",
      lessons: [
        { title: "Script Tags & Placement", duration: "10 minutes" },
        { title: "Event Handlers & Noscript", duration: "10 minutes" },
      ],
    },
    {
      title: "HTML Layouts",
      lessons: [
        { title: "Layouts using Tables", duration: "10 minutes" },
        { title: "Multiple Columns & DIV Layouts", duration: "10 minutes" },
      ],
    },
    {
      title: "Final References and Project",
      lessons: [
        { title: "Tag, Attribute, Event References", duration: "10 minutes" },
        { title: "Fonts, ASCII, Entities", duration: "10 minutes" },
        { title: "Interview Questions", duration: "15 minutes" },
        { title: "Final Mini Project", duration: "30 minutes" },
      ],
    },
  ],
  faq: [
    {
      question: "Do I need prior coding experience?",
      answer:
        "No, this course is designed for beginners. You will learn everything from the ground up.",
    },

    {
      question: "Can I access the course materials after completion?",
      answer:
        "Absolutely! You will have lifetime access to all course materials, including updates.",
    },

    {
      question: "What if I have questions during the course?",
      answer:
        "You can ask questions in the course forum or contact the instructor directly or with Whatsapp Groups.",
    },
  ],
  // testimonials: [
  //   {
  //     name: "John Doe",
  //     feedback:
  //       "This course was fantastic! I learned so much about HTML5 and web development. Highly recommend!",
  //     rating: 5,
  //   },
  //   {
  //     name: "Jane Smith",
  //     feedback:
  //       "Great course for beginners! The instructor explained everything clearly and the exercises were very helpful.",
  //     rating: 4.5,
  //   },
  // ],
  relatedCourses: [
    {
      id: 2,
      title: "Mastering CSS Complete Course 2025 - Advanced Styling Techniques",
      thumbnail: "/images/courses/coming.jpg",
      category: "Development",
      originalPrice: 599,
      discountedPrice: 59,
      duration: "120 Minutes",
    },
    {
      id: 3,
      title:
        "JavaScript Essentials: Learn Modern JavaScript for Web Development",
      thumbnail: "/images/courses/coming.jpg",
      category: "Development",
      originalPrice: 699,
      discountedPrice: 69,
      duration: "150 Minutes",
    },
  ],
};

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#0066ff]/30">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-400 mb-4">{course.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm mb-4">
              <p>
                <b>Instructor:</b> {course.instructor}
              </p>
              <p>
                <b>Level:</b> {course.level}
              </p>
              <p>
                <b>Language:</b> {course.language}
              </p>
              <p>
                <b>Enrollments:</b> {course.enrollments}+ students
              </p>
              <p>
                <b>Lessons:</b> {course.lessons}
              </p>
              <p>
                <b>Updated:</b> {course.lastUpdated}
              </p>
            </div>
            <div className="mb-4">
              <p className="line-through text-gray-500">
                ₹{course.originalPrice}
              </p>
              <p className="text-2xl font-bold text-[#00ff99]">
                Now ₹{course.discountedPrice}
              </p>
            </div>
            <button className="px-6 py-3 bg-[#0066ff] hover:bg-[#0052cc] text-white rounded-lg cursor-pointer transition">
              <Link href="/enroll">Enroll Now</Link>
            </button>
          </div>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc pl-6 text-gray-400">
            {course.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">What you&apos;ll get</h2>
          <ul className="list-disc pl-6 text-gray-400">
            {course.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Curriculum Section with Dropdown */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
          {course.curriculum.map((section, i) => (
            <div
              key={i}
              className="mb-4 border border-white/10 rounded-md overflow-hidden"
            >
              <details className="group bg-white/5 p-4 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-[#00ccff] marker:text-transparent">
                  <span>{section.title}</span>
                  <svg
                    className="w-4 h-4 text-[#00ccff] transform transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <ul className="mt-3 pl-4 text-gray-400 list-disc">
                  {section.lessons.map((lesson, j) => (
                    <li key={j} className="py-1">
                      {lesson.title} ({lesson.duration})
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          {course.faq.map((item, i) => (
            <div key={i} className="mb-4">
              <h4 className="font-semibold text-[#00ccff]">{item.question}</h4>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <p className="italic text-gray-300 mb-2">
                  &quot;{t.feedback}&quot;
                </p>
                <p className="text-sm text-gray-500">
                  - {t.name}, ⭐ {t.rating}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Related Courses */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Related Courses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {course.relatedCourses.map((related) => (
              <div
                key={related.id}
                className="bg-white/5 border border-white/10 p-4 rounded-lg"
              >
                <div className="relative w-full aspect-video mb-3 rounded-md overflow-hidden">
                  <Image
                    src={related.thumbnail}
                    alt={related.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold mb-1">{related.title}</h4>
                <p className="text-sm text-gray-400">{related.duration}</p>
                <p className="line-through text-sm text-gray-500">
                  ₹{related.originalPrice}
                </p>
                <p className="text-[#00ff99] font-semibold">
                  ₹{related.discountedPrice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
