import React, { useState, useEffect } from 'react';

const ProfilePicture = () => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const storedImage = localStorage.getItem('uploadPic');
    if (storedImage) {
      setImageSrc(storedImage);
    }

    const handleStorageChange = () => {
      const updatedImage = localStorage.getItem('uploadPic');
      if (updatedImage) {
        setImageSrc(updatedImage);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const updateImage = () => {
      const storedImage = localStorage.getItem('uploadPic');
      if (storedImage) {
        setImageSrc(storedImage);
      }
    };
  
    window.addEventListener('profileImageChange', updateImage);
    return () => window.removeEventListener('profileImageChange', updateImage);
  }, []);
  

  return (
    <div className="justify-center mt-10 flex sm:justify-start items-center">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Profile"
          className="rounded-full w-60 h-60 object-cover"
        />
      ) : (
        <div className="w-60 h-60 bg-gray-300 rounded-full flex justify-center items-center">
          <span className="text-white">No Image</span>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
