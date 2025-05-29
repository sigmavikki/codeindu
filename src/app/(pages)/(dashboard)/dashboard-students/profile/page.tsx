export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <p className="text-lg mb-2">Name: John Doe</p>
      <p className="text-lg mb-2">Email: johndoe@gmail.cm </p>
      <p className="text-lg mb-2">Phone: +1234567890</p>
      <p className="text-lg mb-2">
        Bio: Passionate about coding and technology.
      </p>
      <p className="text-lg mb-2">Joined: January 1, 2023</p>
      <p className="text-lg mb-2">Courses Enrolled: 5</p>
      <p className="text-lg mb-2">
        Achievements: Completed 10 coding challenges
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
        Edit Profile
      </button>
    </div>
  );
}
