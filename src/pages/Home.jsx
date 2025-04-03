import React, { useState } from "react";
import TabsNavigation from "../components/TabsNavigation";
import Blogs from "../components/Blogs";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <TabsNavigation onSelect={setSelectedTab} />

      <div className="mt-6 w-full">
        {/* Home Tab - Blog Section */}
        {selectedTab === "Home" && <Blogs />}

        {/* Self Assessment Tab */}
        {selectedTab === "Self Assessment" && (
          <div className="p-6 bg-white shadow-md rounded-lg m-6">
            <h1 className="text-2xl font-bold">Self Assessment</h1>
            <p>Evaluate yourself with our assessment tool.</p>
            <div className="flex flex-col md:flex-row mt-3">
              <button className="bg-blue-800 px-8 py-3 text-white rounded-full text-lg font-medium hover:bg-blue-900 tarnsition-colors"> Start </button>
            </div>
          </div>
        )}

        {/* Create Tab */}
        {selectedTab === "Create" && (
          <div className="p-6 bg-white shadow-md rounded-lg m-6">
            <h1 className="text-2xl font-bold">Create</h1>
            <p>Start creating your content here.</p>
          </div>
        )}

        {/* Community Discussion Tab */}
        {selectedTab === "Community Discussion" && (
          <div className="p-6 bg-white shadow-md rounded-lg m-6">
            <h1 className="text-2xl font-bold">Community Discussion</h1>
            <p>Join the discussion with the community.</p>
          </div>
        )}

        {/* Exercise & Diet Tab */}
        {selectedTab === "Exercise & Diet" && (
          <div className="p-6 bg-white shadow-md rounded-lg m-6">
            <h1 className="text-2xl font-bold">Exercise & Diet</h1>
            <p>Maintain a healthy lifestyle with our tips.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;