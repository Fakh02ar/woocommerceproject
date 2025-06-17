import React, { useState } from 'react';

const Profile = () => {
  // Initial profile values (can be fetched from an API later)
  const initialProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    address: '123 Street, City',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setProfile(initialProfile);
    setPasswords({ current: '', new: '', confirm: '' });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let validationErrors = {};

    if (!profile.firstName) validationErrors.firstName = 'First name is required';
    if (!profile.email.includes('@')) validationErrors.email = 'Invalid email';
    if (passwords.new && passwords.new !== passwords.confirm) {
      validationErrors.password = 'New passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate saving profile
      console.log('Saving profile...', profile);
      console.log('Password change request:', passwords);
      alert('Profile updated successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 flex gap-8">
      {/* Sidebar */}
      <div className="w-1/4">
       <a href="/home">Home</a> <a href="">/ My Account</a>
        <div className="mt-6 space-y-8">
          <div>
            <h2 className="font-semibold text-black">Manage My Account</h2>
            <ul className="mt-2 space-y-1">
              <li className="text-red-500 font-medium">My Profile</li>
              <li className="text-gray-500">Address Book</li>
              <li className="text-gray-500">My Payment Options</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-black">My Orders</h2>
            <ul className="mt-2 space-y-1">
              <li className="text-gray-500">My Returns</li>
              <li className="text-gray-500">My Cancellations</li>
            </ul>
          </div>
          <div>
            <a href="/wishlist"><h2 className="font-semibold text-black hover:text-red-500">My WishList</h2></a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-red-500 mb-6">Edit Your Profile</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="w-full rounded-sm p-2 bg-gray-100"
              placeholder="Enter First Name"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="w-full rounded-sm p-2 bg-gray-100"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full rounded-sm p-2 bg-gray-100"
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full rounded-sm p-2 bg-gray-100"
              placeholder="Enter Address"
            />
          </div>
        </div>

        {/* Password Section */}
        <h3 className="text-sm font-semibold mb-4">Password Changes</h3>
        <div className="space-y-4 mb-6">
          <input
            type="password"
            name="current"
            value={passwords.current}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            className="w-full rounded-sm p-2 bg-gray-100"
          />
          <input
            type="password"
            name="new"
            value={passwords.new}
            onChange={handlePasswordChange}
            placeholder="New Password"
            className="w-full rounded-sm p-2 bg-gray-100"
          />
          <input
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handlePasswordChange}
            placeholder="Confirm New Password"
            className="w-full rounded-sm p-2 bg-gray-100"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="text-sm text-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
