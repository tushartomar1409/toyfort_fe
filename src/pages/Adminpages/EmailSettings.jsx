import React, { useState } from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const EmailSettingsCard = ({ form, onChange }) => (
  <div className="bg-white rounded shadow p-6 w-full">
    <h2 className="text-xl font-semibold mb-4">Email Settings</h2>
    <form className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Mail Service</label>
        <select className="w-full border rounded px-3 py-2" name="mailService" value={form.mailService} onChange={onChange}>
          <option>PHP Mailer</option>
          <option>SMTP</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Mail Protocol</label>
        <select className="w-full border rounded px-3 py-2" name="mailProtocol" value={form.mailProtocol} onChange={onChange}>
          <option>SMTP</option>
          <option>Mail</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Encryption</label>
        <select className="w-full border rounded px-3 py-2" name="encryption" value={form.encryption} onChange={onChange}>
          <option>TLS</option>
          <option>SSL</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Mail Host</label>
        <input className="w-full border rounded px-3 py-2" name="mailHost" value={form.mailHost} onChange={onChange} />
      </div>
      <div>
        <label className="block font-medium mb-1">Mail Port</label>
        <input className="w-full border rounded px-3 py-2" name="mailPort" value={form.mailPort} onChange={onChange} />
      </div>
      <div>
        <label className="block font-medium mb-1">Mail Username</label>
        <input className="w-full border rounded px-3 py-2" name="mailUsername" value={form.mailUsername} onChange={onChange} />
      </div>
      <div>
        <label className="block font-medium mb-1">Mail Password</label>
        <input type="password" className="w-full border rounded px-3 py-2" name="mailPassword" value={form.mailPassword} onChange={onChange} />
      </div>
      <div>
        <label className="block font-medium mb-1">Mail Title</label>
        <input className="w-full border rounded px-3 py-2" name="mailTitle" value={form.mailTitle} onChange={onChange} />
      </div>
      <div>
        <label className="block font-medium mb-1">Reply to</label>
        <input className="w-full border rounded px-3 py-2" name="replyTo" value={form.replyTo} onChange={onChange} />
      </div>
      <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Save Changes</button>
    </form>
  </div>
);

const EmailOptionsCard = ({ options, onChange }) => (
  <div className="bg-white rounded shadow p-6 w-full">
    <h2 className="text-xl font-semibold mb-4">Email Options</h2>
    <form className="space-y-4">
      {[
        { label: "Email Verification", name: "emailVerification" },
        { label: "Send email when a new product is added", name: "newProductEmail" },
        { label: "Send email to buyer after purchase (Send order summary)", name: "orderSummaryEmail" },
        { label: "Send email to buyer when order shipped", name: "orderShippedEmail" },
        { label: "Send contact messages to email address", name: "contactMsgEmail" },
        { label: "Send email when there is a new shop opening request", name: "newShopEmail" },
        { label: "Bidding system emails", name: "biddingEmails" },
      ].map((item) => (
        <div key={item.name} className="flex items-center justify-between">
          <span>{item.label}</span>
          <div>
            <label className="inline-flex items-center mr-4">
              <input type="radio" name={item.name} checked={options[item.name]} onChange={() => onChange({ target: { name: item.name, type: "checkbox", checked: true } })} className="form-radio" />
              <span className="ml-2">{item.name === "biddingEmails" || item.name === "emailVerification" ? "Enable" : "Yes"}</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name={item.name} checked={!options[item.name]} onChange={() => onChange({ target: { name: item.name, type: "checkbox", checked: false } })} className="form-radio" />
              <span className="ml-2">{item.name === "biddingEmails" || item.name === "emailVerification" ? "Disable" : "No"}</span>
            </label>
          </div>
        </div>
      ))}
      <div>
        <label className="block font-medium mb-1">
          Email Address (Admin emails will be sent to this address)
        </label>
        <input className="w-full border rounded px-3 py-2" name="adminEmail" value={options.adminEmail} onChange={onChange} />
      </div>
      <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Save Changes</button>
    </form>
  </div>
);

const SendTestEmailCard = ({ testEmail, setTestEmail }) => (
  <div className="bg-white rounded shadow p-6 w-full mt-8">
    <h2 className="text-lg font-semibold mb-2">Send Test Email</h2>
    <p className="text-sm text-gray-500 mb-2">You can send a test mail to check if your mail server is working.</p>
    <div className="flex items-center gap-4">
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Email Address"
        value={testEmail}
        onChange={e => setTestEmail(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Email</button>
    </div>
  </div>
);

const EmailSettingsPage = () => {
  const [form, setForm] = useState({
    mailService: "PHP Mailer",
    mailProtocol: "SMTP",
    encryption: "TLS",
    mailHost: "smtp.office365.com",
    mailPort: "587",
    mailUsername: "support@toyfort.in",
    mailPassword: "",
    mailTitle: "Toyfort",
    replyTo: "support@toyfort.in",
  });

  const [options, setOptions] = useState({
    emailVerification: false,
    newProductEmail: false,
    orderSummaryEmail: true,
    orderShippedEmail: false,
    contactMsgEmail: false,
    newShopEmail: false,
    biddingEmails: false,
    adminEmail: "",
  });

  const [testEmail, setTestEmail] = useState("");

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  };

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <EmailSettingsCard form={form} onChange={handleFormChange} />
        <EmailOptionsCard options={options} onChange={handleOptionChange} />
      </div>
      <div className="max-w-6xl mx-auto">
        <SendTestEmailCard testEmail={testEmail} setTestEmail={setTestEmail} />
      </div>
    
    </div>
     <Adminfooter />
        </div>
  );
};

export default EmailSettingsPage;
