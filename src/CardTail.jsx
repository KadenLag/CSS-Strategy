import React from 'react';

export default function CardTail() {
  return (
    <div className="max-w-md bg-white dark:bg-black shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end">
        <img className="rounded-t-lg object-cover" src="https://fanatical-prelive.imgix.net/product/original/e998f096-d6f7-4f0b-aa13-0b25c9d3094e.jpeg?auto=compress,format&w=960&fit=crop&h=540" alt="img" />
      </div>
      <div className="py-4 px-8">
        <h2 className="text-gray-800 dark:text-white text-3xl font-semibold">Core Keeper</h2>
        <p className="mt-2 text-gray-600 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus</p>
      </div>
      <hr />
      <div className="flex justify-between justify-center items-center dark:justify-end mt-4 pb-4 px-8">
        <img className="w-20 dark:hidden" src="https://cdn.fanatical.com/production/icons/drm/dark/steam.svg" alt="img" />
        <button className="bg-indigo-500 dark:bg-yellow-600 text-white rounded p-2">30%</button>
        {/* <p>£19.83</p> */}
      </div>
    </div>
  );
}
