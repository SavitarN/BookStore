import React from "react";

const ConfirmLogout = ({ confirm, cancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-4">
        <h2 className="text-lg font-bold">Are you sure you want to logout?</h2>

        <div className="flex gap-4">
          <button
            onClick={confirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Yes, Logout
          </button>

          <button
            onClick={cancel}
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
