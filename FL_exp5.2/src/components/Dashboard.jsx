export default function Dashboard() {
  const skills = [
    "Python",
    "Java",
    "ReactJS",
    "Machine Learning",
    "SQL",
    "TensorFlow",
    "Data Structures",
    "Git"
  ];

  return (
    <div className="page">
      <h1>🚀 My Skills</h1>

      <div className="grid">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}