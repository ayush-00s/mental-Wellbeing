import React from "react";

const Blogs = () => {
  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Understanding Mental Wellness",
      content: "A deep dive into mental health awareness and well-being.",
      author: "Dr. Ananya Sharma",
      date: "March 30, 2025",
      image: "/assets/mental.jpg",
    },
    {
      id: 2,
      title: "5 Exercises for a Healthy Mind",
      content: "Regular physical activity improves mental health. Here are 5 simple exercises...",
      author: "Rahul Verma",
      date: "March 28, 2025",
      image: "/assets/blog2.jpg",
    },
    {
      id: 3,
      title: "The Importance of Diet in Mental Health",
      content: "Your diet impacts your mood and mental clarity. Learn what to eat...",
      author: "Neha Kapoor",
      date: "March 25, 2025",
      image: "/assets/blog3.jpg",
    },
    {
      id: 4,
      title: "The Importance of yourself in your life",
      content: "Try not to give Fuck about ....",
      author: "Ayush Tiwari",
      date: "March 25, 2025",
      image: "/assets/blog3.jpg",
    },
  ];

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-4">Latest Articles & Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{article.content.substring(0, 80)}...</p>
              <p className="text-sm text-gray-500 mt-2">By {article.author} | {article.date}</p>
              <button className="mt-3 text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;