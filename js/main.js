const projects = [
  {
    title: "Real-Time Credit Card Fraud Detection",
    link: "https://github.com/yourusername/fraud-detection",
    desc: "Built a real-time pipeline using Kafka, Python, MySQL, and XGBoost. Streamed 1.8M transactions with 0.2s latency. Dockerized for quick deployment with fraud alerts.",
    tags: ["Kafka", "Python", "MySQL", "XGBoost", "Docker"]
  },
  {
    title: "Movie Recommendation System",
    link: "https://github.com/yourusername/recommender-system",
    desc: "Used NLP + cosine similarity on metadata to deliver personalized content-based recommendations. Achieved 80% match accuracy.",
    tags: ["Python", "NLP", "Recommendation", "Vectorization"]
  },
  {
    title: "Real Estate Sales Dashboard",
    link: "https://public.tableau.com/app/profile/yourprofile/viz/housesales",
    desc: "Tableau dashboard with 21K+ sales records. Filters by price, location, date, and features to help understand market trends.",
    tags: ["Tableau", "Visualization", "Real Estate", "EDA"]
  }
];
const container = document.getElementById("projectContainer");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3><a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title}</a></h3>
    <p>${p.desc}</p>
    <p>${p.tags.map(tag => `<span class="badge">${tag}</span>`).join(' ')}</p>
  `;
  container.appendChild(card);
});
