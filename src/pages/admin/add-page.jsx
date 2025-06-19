import React from 'react';

// --- Reusable Input Components ---

const InputField = ({ label, placeholder, id, hint }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        {hint && <p className="text-xs text-gray-500 mb-1">{hint}</p>}
        <input
            type="text"
            id={id}
            placeholder={placeholder}
            className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
    </div>
);

const RadioGroup = ({ label, name, options }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-2 flex items-center space-x-6">
            {options.map((option, index) => (
                <label key={option} className="flex items-center">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        defaultChecked={index === 0}
                        className="form-radio h-4 w-4 text-purple-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
            ))}
        </div>
    </div>
);

// --- Main AddPage Component ---

export default function AddPage() {
    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Add Page
                    </h1>
                    <button className="px-5 py-2.5 bg-teal-500 text-white font-semibold rounded-md shadow-sm hover:bg-teal-600 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span>Pages</span>
                    </button>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-lg shadow p-8 space-y-6">
                    <InputField id="title" label="Title" placeholder="Title" />
                    
                    <InputField 
                        id="slug" 
                        label="Slug" 
                        placeholder="Slug" 
                        hint="(If you leave it empty, it will be generated automatically.)" 
                    />

                    <InputField id="meta-description" label="Description (Meta Tag)" placeholder="Description (Meta Tag)" />
                    <InputField id="meta-keywords" label="Keywords (Meta Tag)" placeholder="Keywords (Meta Tag)" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                                Language
                            </label>
                            <select id="language" className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
                                Order
                            </label>
                            <input
                                type="number"
                                id="order"
                                defaultValue="1"
                                className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    
                    <RadioGroup label="Location" name="location" options={['Top Menu', 'Quick Links', 'Information']} />
                    <RadioGroup label="Visibility" name="visibility" options={['Show', 'Hide']} />
                    <RadioGroup label="Show Title" name="showTitle" options={['Yes', 'No']} />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        {/* Placeholder for a rich text editor like TinyMCE or CKEditor */}
                        <div className="border border-gray-300 rounded-md min-h-[250px] p-4 bg-gray-50 text-center text-gray-500">
                           <p className="mb-4 font-semibold">Rich Text Editor Goes Here</p>
                           <p className="text-sm">To implement this, you would integrate a library like TinyMCE and initialize it in place of this div.</p>
                           <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
                                Add Image
                           </button>
                        </div>
                    </div>

                    <div className="text-right pt-4">
                        <button
                            type="submit"
                            className="px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Add Page
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
