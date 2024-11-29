import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://via.placeholder.com/1500x400"
  );

  //   const [profileUrl, setProfileUrl] = useState(
  //     "https://via.placeholder.com/100"
  //   );

  const [profileUrl, setProfileUrl] = useState(
    "https://via.placeholder.com/100x100"
  );

  const handleBannerChange = (e: any) => {
    const file = e.target.files;

    file && setBannerUrl(URL.createObjectURL(file));
  };

  const handleProfileChange = (e: any) => {
    const file = e.target.files;

    file && setProfileUrl(URL.createObjectURL(file));
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Channel Logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />

        <button className="absolute -ml-[-4rem] mt-[9rem] z-10  bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            {" "}
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[4rem]">Victor Gbadebo</h1>
          <p className="mt-2 ml-[4rem]">1m views</p>
          <p className="mt-2 ml-[4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            blanditiis nulla eius sapiente exercitationem, tempore magnam
            commodi corrupti voluptatem ratione ullam quis officiis perferendis
            doloribus maiores laboriosam debitis dolore? Et.
          </p>
          <button className="mt-4 ml-[4rem] bg-red-600 text-white py-2 px-4 hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
