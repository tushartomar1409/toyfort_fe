import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

import { getContinentByCountry } from "../../utils/continentMap";
import { Country, State } from "country-state-city";
import Select from "react-select";
const shippingMethodOptions = [
  { value: "local_pickup", label: "Local Pickup" },
  { value: "flat_rate", label: "Flat Rate" },
  { value: "free_shipping", label: "Free Shipping" },
];

export default function Shippingsettings() {
  const [continentOptions] = useState([
    { value: "Asia", label: "Asia" },
    { value: "Africa", label: "Africa" },
    { value: "Europe", label: "Europe" },
    { value: "North America", label: "North America" },
    { value: "South America", label: "South America" },
    { value: "Australia", label: "Australia" },
    { value: "Antarctica", label: "Antarctica" },
  ]);

  const [selectedContinent, setSelectedContinent] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [stateOptions, setStateOptions] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const [zones, setZones] = useState([
    // { id: 1, name: 'Domestic', regions: ['Asia/India', 'Asia/India'], methods: [] }
  ]);
  const [classes, setClasses] = useState([
    // { id: 1, option: 'checking', status: 'Active' }
  ]);
  const [times, setTimes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [zoneName, setZoneName] = useState("");
  const [regions, setRegions] = useState([]);
  const [methods, setMethods] = useState([]);
  const [regionInput, setRegionInput] = useState("");
  const [methodInput, setMethodInput] = useState("");
  const [showClassModal, setShowClassModal] = useState(false);
  const [classOption, setClassOption] = useState("");
  const [classStatus, setClassStatus] = useState("Active");

  const [showTimeModal, setShowTimeModal] = useState(false);
  const [timeOption, setTimeOption] = useState("");
  const [editingClassId, setEditingClassId] = useState(null);

  const [editingTimeId, setEditingTimeId] = useState(null);

  const [calculationType, setCalculationType] = useState("");
  const [cost, setCost] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  const handleAddZone = () => {
    setZones([
      ...zones,
      { id: zones.length + 1, name: zoneName, regions, methods },
    ]);
    setShowModal(false);
    setZoneName("");
    setRegions([]);
    setMethods([]);
  };

  const handleDeleteZone = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this shipping zone?"
    );
    if (confirmDelete) {
      setZones(zones.filter((z) => z.id !== id));
    }
  };
  const handleEditZone = (zone) => {
    setZoneName(zone.name);
    setRegions(zone.regions);
    setMethods(zone.methods);
    setShowModal(true);
  };
  const handleDeleteClass = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this shipping class?"
    );
    if (confirmDelete) {
      setClasses(classes.filter((c) => c.id !== id));
    }
  };
  const handleEditClass = (cls) => {
    setClassOption(cls.option);
    setClassStatus(cls.status);
    setEditingClassId(cls.id);
    setShowClassModal(true);
  };
  const handleSaveTime = () => {
    if (editingTimeId !== null) {
      // Edit mode
      setTimes(
        times.map((t) =>
          t.id === editingTimeId ? { ...t, option: timeOption } : t
        )
      );
    } else {
      // Add mode
      setTimes([...times, { id: times.length + 1, option: timeOption }]);
    }

    // Reset
    setTimeOption("");
    setEditingTimeId(null);
    setShowTimeModal(false);
  };
  const handleEditTime = (time) => {
    setTimeOption(time.option);
    setEditingTimeId(time.id);
    setShowTimeModal(true);
  };

  const handleDeleteTime = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this delivery time?"
    );
    if (confirmDelete) {
      setTimes(times.filter((t) => t.id !== id));
    }
  };

  useEffect(() => {
    if (selectedContinent) {
      const allCountries = Country.getAllCountries();
      const filtered = allCountries
        .filter(
          (c) => getContinentByCountry(c.isoCode) === selectedContinent.value
        )
        .map((c) => ({ value: c.isoCode, label: c.name }));
      setCountryOptions(filtered);
      setSelectedCountry(null);
      setStateOptions([]);
      setSelectedState(null);
    }
  }, [selectedContinent]);

  // ✅ Step 3: Dynamic states based on selected country
  useEffect(() => {
    if (selectedCountry) {
      const states = State.getStatesOfCountry(selectedCountry.value).map(
        (s) => ({ value: s.isoCode, label: s.name })
      );
      setStateOptions(states);
      setSelectedState(null);
    }
  }, [selectedCountry]);

  const [showMethodModal, setShowMethodModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="scroll-smooth p-6 bg-gray-100 min-h-screen space-y-6">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Shipping Zone</h2>
              <button
                className="text-red-500"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Zone Name */}
              <div>
                <label className="font-semibold block mb-1">Zone Name</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Zone Name"
                  value={zoneName}
                  onChange={(e) => setZoneName(e.target.value)}
                />
              </div>

              {/* Regions List */}
              <div>
                <label className="font-semibold block mb-1">Regions</label>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center bg-gray-100 border border-gray-300 text-sm rounded px-3 py-1"
                    >
                      <span className="mr-2">{r}</span>
                      <button
                        onClick={() => {
                          const updatedRegions = [...regions];
                          updatedRegions.splice(i, 1);
                          setRegions(updatedRegions);
                        }}
                        className="text-gray-500 hover:text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Region Selector */}
              <div>
                <Select
                  options={continentOptions}
                  placeholder="Select Continent"
                  value={selectedContinent}
                  onChange={setSelectedContinent}
                />
                <Select
                  options={countryOptions}
                  placeholder="All Countries"
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  isDisabled={!selectedContinent}
                  className="mt-2"
                />
                <Select
                  options={stateOptions}
                  placeholder="All States"
                  value={selectedState}
                  onChange={setSelectedState}
                  isDisabled={!selectedCountry}
                  className="mt-2"
                />

                <button
                  className="mt-4 px-4 py-2 bg-teal-600 text-white font-medium rounded hover:bg-teal-700"
                  onClick={() => {
                    if (!selectedContinent) return;

                    let regionStr = selectedContinent.label;
                    if (selectedCountry) {
                      regionStr += `/${selectedCountry.label}`;
                      if (selectedState) {
                        regionStr += `/${selectedState.label}`;
                      }
                    }

                    if (!regions.includes(regionStr)) {
                      setRegions([...regions, regionStr]);
                    }

                    setSelectedContinent(null);
                    setSelectedCountry(null);
                    setSelectedState(null);
                    setCountryOptions([]);
                    setStateOptions([]);
                  }}
                >
                  ✔ Select Region
                </button>
              </div>
{showMethodModal && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
      <h3 className="text-lg font-semibold mb-4">Add Shipping Method</h3>

      {/* Shipping method select */}
      <Select
        options={shippingMethodOptions}
        value={selectedMethod}
        onChange={setSelectedMethod}
        placeholder="Select Shipping Method"
      />

      {/* Fields for Flat Rate */}
      {selectedMethod?.value === "flat_rate" && (
        <div className="space-y-4 mt-4">
          <input
            className="w-full p-2 border rounded"
            placeholder="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <select
            className="w-full p-2 border rounded"
            value={calculationType}
            onChange={(e) => setCalculationType(e.target.value)}
          >
            <option value="">Select Calculation Type</option>
            <option value="fixed_total">Fixed Cost for Cart Total</option>
            <option value="per_item">Fixed Cost Per Item</option>
          </select>
        </div>
      )}

      {/* Fields for Free Shipping */}
      {selectedMethod?.value === "free_shipping" && (
        <div className="space-y-4 mt-4">
          <input
            className="w-full p-2 border rounded"
            placeholder="Minimum Order Amount"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      )}

      {/* Status (shown for all methods) */}
      {selectedMethod && (
        <div className="mt-4">
          <label className="font-semibold">Status</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={isEnabled}
                onChange={() => setIsEnabled(true)}
              />
              <span>Enable</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={!isEnabled}
                onChange={() => setIsEnabled(false)}
              />
              <span>Disable</span>
            </label>
          </div>
        </div>
      )}

      {/* Add button */}
      <div className="text-right mt-6">
        <button
          onClick={() => {
            if (selectedMethod && !methods.some((m) => m.label === selectedMethod.label)) {
              const newMethod = {
                ...selectedMethod,
                cost,
                calculationType,
                isEnabled,
              };
              setMethods([...methods, newMethod]);
              setSelectedMethod(null);
              setCost("");
              setCalculationType("");
              setIsEnabled(true);
              setShowMethodModal(false);
            }
          }}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
        >
          Add Shipping Method
        </button>
      </div>

      {/* Close modal */}
      <button
        className="absolute top-2 right-3 text-gray-600 text-xl hover:text-red-600"
        onClick={() => setShowMethodModal(false)}
      >
        ×
      </button>
    </div>
  </div>
)}

              <div>
                <label className="font-semibold block mb-1">
                  Shipping Methods
                </label>
                <div className="mt-2">
                  <button
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
                    onClick={() => setShowMethodModal(true)}
                  >
                    + Add Shipping Method
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {methods.map((m, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 border border-gray-300 text-sm rounded px-3 py-1 inline-flex items-center"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right mt-6">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium"
                  onClick={handleAddZone}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shipping Class Modal */}
      {showClassModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Shipping Class</h2>
              <button
                className="text-red-500"
                onClick={() => setShowClassModal(false)}
              >
                Close
              </button>
            </div>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                placeholder="Class Option"
                value={classOption}
                onChange={(e) => setClassOption(e.target.value)}
              />
              <select
                className="w-full p-2 border rounded"
                value={classStatus}
                onChange={(e) => setClassStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="text-right">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    if (editingClassId !== null) {
                      // Edit mode
                      setClasses(
                        classes.map((c) =>
                          c.id === editingClassId
                            ? { ...c, option: classOption, status: classStatus }
                            : c
                        )
                      );
                    } else {
                      // Add mode
                      setClasses([
                        ...classes,
                        {
                          id: classes.length + 1,
                          option: classOption,
                          status: classStatus,
                        },
                      ]);
                    }

                    // Reset form
                    setClassOption("");
                    setClassStatus("Active");
                    setEditingClassId(null);
                    setShowClassModal(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Delivery Time Modal */}
      {showTimeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Delivery Time</h2>
              <button
                className="text-red-500"
                onClick={() => {
                  setShowTimeModal(false);
                  setTimeOption("");
                  setEditingTimeId(null);
                }}
              >
                Close
              </button>
            </div>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                placeholder="Delivery Time Option"
                value={timeOption}
                onChange={(e) => setTimeOption(e.target.value)}
              />
              <div className="text-right">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    if (editingTimeId !== null) {
                      setTimes(
                        times.map((t) =>
                          t.id === editingTimeId
                            ? { ...t, option: timeOption }
                            : t
                        )
                      );
                    } else {
                      setTimes([
                        ...times,
                        { id: times.length + 1, option: timeOption },
                      ]);
                    }
                    setTimeOption("");
                    setEditingTimeId(null);
                    setShowTimeModal(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Shipping Zones</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded inline-flex items-center hover:bg-green-600"
          >
            <FaPlus className="mr-2" /> Add Shipping Zone
          </button>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div>
            Show{" "}
            <select className="border border-gray-300 rounded px-2 py-1">
              {[15, 25, 50, 100].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="mr-2">Search:</label>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-left">Zone Name</th>
              <th className="border p-2 text-left">Regions</th>
              <th className="border p-2 text-left">Shipping Methods</th>
              <th className="border p-2 text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            {zones.length > 0 ? (
              zones.map((z) => (
                <tr key={z.id} className="even:bg-gray-100">
                  <td className="border p-2">{z.name}</td>
                  <td className="border p-2">
                    {z.regions.map((r, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 rounded px-2 py-1 mr-2 text-sm"
                      >
                        {r}
                      </span>
                    ))}
                  </td>
                  <td className="border p-2">{z.methods.join(", ")}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      className="text-blue-500"
                      onClick={() => handleEditZone(z)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteZone(z.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border p-2 text-center" colSpan={4}>
                  No records found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-2">Number of Entries: {zones.length}</div>
        <div className="flex justify-end items-center mt-4 space-x-2">
          <button className="border px-2 py-1 rounded">&lt;</button>
          <span className="bg-green-500 text-white px-3 py-1 rounded">1</span>
          <button className="border px-2 py-1 rounded">&gt;</button>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-6">
        {/* Shipping Classes */}
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Shipping Classes</h2>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded inline-flex items-center hover:bg-green-600"
              onClick={() => setShowClassModal(true)}
            >
              <FaPlus className="mr-2" /> Add Shipping Class
            </button>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left">Option</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {classes.length > 0 ? (
                classes.map((c) => (
                  <tr key={c.id} className="even:bg-gray-100">
                    <td className="border p-2">{c.option}</td>
                    <td className="border p-2 text-green-500">{c.status}</td>
                    <td className="border p-2 space-x-2">
                      <button
                        className="text-blue-500"
                        onClick={() => handleEditClass(c)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteClass(c.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border p-2 text-center" colSpan={3}>
                    No records found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div>Number of Entries: {classes.length}</div>
          <div className="flex justify-end items-center space-x-2">
            <button className="border px-2 py-1 rounded">&lt;</button>
            <span className="bg-green-500 text-white px-3 py-1 rounded">1</span>
            <button className="border px-2 py-1 rounded">&gt;</button>
          </div>
        </section>

        {/* Shipping Delivery Times */}
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Shipping Delivery Times</h2>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded inline-flex items-center hover:bg-green-600"
              onClick={() => setShowTimeModal(true)}
            >
              <FaPlus className="mr-2" /> Add Delivery Time
            </button>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left">Option</th>
                <th className="border p-2 text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {times.length > 0 ? (
                times.map((t) => (
                  <tr key={t.id} className="even:bg-gray-100">
                    <td className="border p-2">{t.option}</td>
                    <td className="border p-2 space-x-2">
                      <button
                        className="text-blue-500"
                        onClick={() => handleEditTime(t)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteTime(t.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border p-2 text-center" colSpan={2}>
                    No records found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div>Number of Entries: {times.length}</div>
          <div className="flex justify-end items-center space-x-2">
            <button className="border px-2 py-1 rounded">&lt;</button>
            <span className="bg-green-500 text-white px-3 py-1 rounded">1</span>
            <button className="border px-2 py-1 rounded">&gt;</button>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-teal-100 p-4 rounded">
          Shipping classes allow you to define different shipping costs for your
          products. If you have products with high shipping costs (large in
          weight and size), you can add a class from here and set a different
          price for each shipping method for this class.
        </div>
        <div className="bg-teal-100 p-4 rounded">
          You can add shipping delivery times from here (E.g: Ready to ship in 1
          Business Day).
        </div>
      </div>
    </div>
  );
}
