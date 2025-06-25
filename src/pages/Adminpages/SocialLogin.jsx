import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const SocialLoginCard = ({ title, fields, values, onChange, onSave }) => (
  <div className="bg-white rounded shadow p-6 flex flex-col justify-between min-h-[220px]">
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-semibold mb-1">{field.label}</label>
          <input
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name]}
            onChange={onChange}
            className="w-full border rounded px-3 py-2"
            autoComplete="off"
          />
        </div>
      ))}
    </div>
    <button
      className="self-end bg-blue-600 text-white px-4 py-2 rounded"
      type="button"
      onClick={onSave}
    >
      Save Changes
    </button>
  </div>
);

const SocialLogin = () => {
  const [facebook, setFacebook] = useState({ appId: "", appSecret: "" });
  const [google, setGoogle] = useState({ clientId: "", clientSecret: "" });
  const [vk, setVK] = useState({ appId: "", secureKey: "" });

  const handleFacebookChange = (e) => setFacebook({ ...facebook, [e.target.name]: e.target.value });
  const handleGoogleChange = (e) => setGoogle({ ...google, [e.target.name]: e.target.value });
  const handleVKChange = (e) => setVK({ ...vk, [e.target.name]: e.target.value });

  // Placeholder save handlers
  const handleSave = (provider) => {
    // Implement actual save logic here
    alert(`Saved ${provider} settings!`);
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">Social Login</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SocialLoginCard
            title="Facebook Login"
            fields={[
              { name: "appId", label: "App ID", placeholder: "App ID" },
              { name: "appSecret", label: "App Secret", placeholder: "App Secret" },
            ]}
            values={facebook}
            onChange={handleFacebookChange}
            onSave={() => handleSave("Facebook")}
          />
          <SocialLoginCard
            title="Google Login"
            fields={[
              { name: "clientId", label: "Client ID", placeholder: "Client ID" },
              { name: "clientSecret", label: "Client Secret", placeholder: "Client Secret" },
            ]}
            values={google}
            onChange={handleGoogleChange}
            onSave={() => handleSave("Google")}
          />
          <SocialLoginCard
            title="VKontakte Login"
            fields={[
              { name: "appId", label: "App ID", placeholder: "App ID" },
              { name: "secureKey", label: "Secure Key", placeholder: "Secure Key" },
            ]}
            values={vk}
            onChange={handleVKChange}
            onSave={() => handleSave("VKontakte")}
          />
        </div>
      </div>
    </div>
    <Adminfooter />
        </div>
  );
};

export default SocialLogin;
