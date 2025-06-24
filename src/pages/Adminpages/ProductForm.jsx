import React, { useState, useRef, useEffect } from "react";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";
import Select from "react-select";
const Panel = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
`;
const thStyle = {
  padding: "12px",
  borderBottom: "1px solid #e2e8f0",
  fontWeight: "600",
  color: "#2d3748",
};

const tdStyle = {
  padding: "12px",
  color: "#4a5568",
};

const PanelHeader = styled.div`
  background: #f7fafc;
  padding: 12px 16px;
  font-weight: 600;
  color: #2d3748;
`;

const PanelBody = styled.div`
  padding: 16px;
`;

const AddImageButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: #2b6cb0;
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  svg {
    margin-right: 6px;
  }
`;
const PanelBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  /* ← space between each child */
`;
const ProductForm = () => {
  const [selectedPaths, setSelectedPaths] = useState([]);
  const [mainCategory, setMainCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [subSubCategory, setSubSubCategory] = useState(null);

  const [variations, setVariations] = useState([]);
  const [step, setStep] = useState(1);
  const [showVariationModal, setShowVariationModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [showExistingVariationModal, setShowExistingVariationModal] =
    useState(false);
  const openVariationModal = () => setShowVariationModal(true);
  const closeVariationModal = () => setShowVariationModal(false);
  const [variationTypeCounters, setVariationTypeCounters] = useState({});
  const [editingVariation, setEditingVariation] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [typeIdMap, setTypeIdMap] = useState({});
  let nextTypeId = useRef(1);
  const [formData, setFormData] = useState({
    productType: "",
    cod: "",
    images: [],
    category: "",
    coupon: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    ageAttribute: "",
    genderAttributes: [],
    discountAttribute: "",
    brandAttribute: "",
    characterAttribute: "",
    title: "",
    tag: "",
    stock: "",
    sku: "",
    barcode: "",
    demoUrl: "",
    videoFile: null,
    audioFile: null,
  });
  const handleDeleteVariation = (uniqueKey) => {
    setVariations((prev) => prev.filter((v) => v.uniqueKey !== uniqueKey));
  };
  const handleEditVariation = (variation, index) => {
    setVariationForm(variation);
    setEditingIndex(index);
    setShowEditModal(true);
  };

  const handleSaveEditedVariation = () => {
    const updated = [...variations];
    updated[editingIndex] = variationForm;
    setVariations(updated);
  };
  // const handleAddVariation = () => {
  //   const newVariation = {
  //     id: variations.length + 1,
  //     label: 'checking',
  //     type: 'Checkbox (Multiple Selection)',
  //     visible: true
  //   };

  //   setVariations(prev => [...prev, newVariation]);
  //   setShowExistingVariationModal(true); // Show modal every time
  // };
  // const handleSelectExistingVariation = () => {
  //   // Logic to select existing variation
  // };
  //   const handleAddVariation = () => {
  //   const newVariation = {
  //     id: variations.length + 1,
  //     label: variationForm.label,
  //     type: variationForm.type,
  //     displayType: variationForm.displayType,
  //     showImageOnSlider: variationForm.showImageOnSlider,
  //     visible: variationForm.visible === 'Yes',
  //   };

  //   setVariations(prev => [...prev, newVariation]);

  //   // Reset the form after adding
  //   setVariationForm({
  //     label: '',
  //     type: 'Radio Button (Single Selection)',
  //     displayType: '',
  //     showImageOnSlider: '',
  //     visible: '',
  //   });
  // };
  // const handleAddVariation = () => {
  //   const type = variationForm.type;

  //   const currentCount = variationTypeCounters[type] || 0;

  //   const newId = currentCount + 1;

  //   const newVariation = {
  //     id: newId,
  //     label: variationForm.label,
  //     type: type,
  //     displayType: variationForm.displayType,
  //     showImageOnSlider: variationForm.showImageOnSlider,
  //     visible: variationForm.visible === 'Yes',
  //   };

  //   setVariations(prev => [...prev, newVariation]);

  //   setVariationTypeCounters(prev => ({
  //     ...prev,
  //     [type]: newId,
  //   }));

  //   setVariationForm({
  //     label: '',
  //     type: 'Radio Button (Single Selection)',
  //     displayType: '',
  //     showImageOnSlider: '',
  //     visible: '',
  //   });

  //   setShowVariationModal(false);
  // };

  const handleAddVariation = () => {
    let type = variationForm.type;

    // Assign ID if this type is new
    if (!(type in typeIdMap)) {
      setTypeIdMap((prev) => ({ ...prev, [type]: nextTypeId.current }));
      typeIdMap[type] = nextTypeId.current;
      nextTypeId.current += 1;
    }

    const newVariation = {
      id: typeIdMap[type], // same ID for same type
      label: variationForm.label,
      type: type,
      displayType: variationForm.displayType,
      showImageOnSlider: variationForm.showImageOnSlider,
      visible: variationForm.visible === "Yes",
      uniqueKey: Date.now() + Math.random(), // used for delete
    };

    setVariations((prev) => [...prev, newVariation]);

    setShowVariationModal(false);
    setVariationForm({
      label: "",
      type: "",
      displayType: "",
      showImageOnSlider: "",
      visible: "",
    });
  };

  const handleBack = () => {
    // Logic to go back to previous step
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSaveDraft = () => {
    // Logic to save draft
    localStorage.setItem("productDraft", JSON.stringify(formData));
    alert("Draft saved locally!");
  };
  const editorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const generateSKU = () => {
    // Example SKU format: 'SKU-XXXXXX'
    const random = Math.floor(100000 + Math.random() * 900000);
    return `SKU-${random}`;
  };
  const handleGenerateSKU = () => {
    const newSKU = generateSKU();
    setFormData((prev) => ({ ...prev, sku: newSKU }));
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, videoFile: file }));
  };

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, audioFile: file }));
  };

  const handleVideoDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prev) => ({ ...prev, videoFile: file }));
  };

  const handleAudioDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prev) => ({ ...prev, audioFile: file }));
  };
  const removeImage = (idx) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx),
    }));
  };

  const handleAddImageInEditor = () => {
    if (!editorRef.current) return;
    const url = window.prompt("Enter image URL");
    if (url)
      editorRef.current.insertContent(`<img src="${url}" alt="Image" />`);
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log("Step 1 Data:", formData);
    setStep(2);
  };
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    alert("Form submitted!");
    // You can send data to your backend here
  };

  const [variationForm, setVariationForm] = useState({
    label: "",
    type: "", // default
    displayType: "",
    showImageOnSlider: "",
    visible: "",
  });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };
  const mainCategories = [
    { label: "Toys", value: "toys" },
    { label: "Electronics", value: "electronics" },
    { label: "Clothing", value: "clothing" },
  ];

  const subCategoriesMap = {
    toys: [
      { label: "Action Figures", value: "action_figures" },
      { label: "Puzzles", value: "puzzles" },
    ],
    electronics: [
      { label: "Mobiles", value: "mobiles" },
      { label: "Laptops", value: "laptops" },
    ],
    clothing: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
    ],
  };

  const subSubCategoriesMap = {
    action_figures: [
      { label: "Superheroes", value: "superheroes" },
      { label: "Anime", value: "anime" },
    ],
    puzzles: [
      { label: "3D Puzzles", value: "3d_puzzles" },
      { label: "Wooden Puzzles", value: "wooden_puzzles" },
    ],
    men: [
      { label: "Shirts", value: "shirts" },
      { label: "Trousers", value: "trousers" },
    ],
    women: [
      { label: "Dresses", value: "dresses" },
      { label: "Skirts", value: "skirts" },
    ],
  };

  const renderTagBox = () => (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {selectedPaths.map((path) => (
        <div
          key={path.value}
          className="flex items-center bg-white border text-sm rounded shadow-sm px-3 py-1 text-gray-800"
        >
          {path.label}
          <button
            onClick={() =>
              setSelectedPaths(
                selectedPaths.filter((p) => p.value !== path.value)
              )
            }
            className="ml-2 text-gray-500 hover:text-red-600"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );

  const handleAddPath = () => {
    if (!mainCategory) return;

    const pathLabel = [mainCategory?.label, subCategory?.label, subSubCategory?.label]
      .filter(Boolean).join('/');
    const pathValue = [mainCategory?.value, subCategory?.value, subSubCategory?.value]
      .filter(Boolean).join('/');

    if (!selectedPaths.find(p => p.value === pathValue)) {
      setSelectedPaths([...selectedPaths, { label: pathLabel, value: pathValue }]);
    }

    setMainCategory(null);
    setSubCategory(null);
    setSubSubCategory(null);
  };


  const getSubCategories = () =>
    mainCategory ? subCategoriesMap[mainCategory.value] || [] : [];
  const getSubSubCategories = () =>
    subCategory ? subSubCategoriesMap[subCategory.value] || [] : [];

  return (
    <>
      <form
        onSubmit={step === 1 ? handleNext : handleFinalSubmit}
        style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}
      >
        {step === 1 && (
          <>
            {/* <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}> */}
            <label>
              <strong>Images</strong>
            </label>
            <br />
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{
                border: "2px dashed #ccc",
                borderRadius: "10px",
                padding: "30px",
                textAlign: "center",
                marginBottom: "20px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FaCloudUploadAlt size={40} color="#999" />
              </div>
              <p>
                Drag and drop images here or{" "}
                <label style={{ color: "#007bff", cursor: "pointer" }}>
                  Browse Files
                  <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>
              </p>
            </div>

            {/* Image Preview */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {formData.images.map((img, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                Products with good and clear images are sold faster!
              </p>
            </div>

            {/* Product Type */}
            <label>
              <strong>Product Type</strong>
            </label>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "269px",
                marginTop: "6px",
              }}
            >
              <label>
                <input
                  type="radio"
                  name="productType"
                  value="Physical"
                  checked={formData.productType === "Physical"}
                  onChange={handleInputChange}
                />{" "}
                Physical
                <p style={{ fontSize: "0.9rem", color: "gray" }}>
                  A tangible product that you will ship to buyers
                </p>
              </label>
              <label>
                <input
                  type="radio"
                  name="productType"
                  value="Digital"
                  checked={formData.productType === "Digital"}
                  onChange={handleInputChange}
                />{" "}
                Digital
                <p style={{ fontSize: "0.9rem", color: "gray" }}>
                  A digital file that buyers will download
                </p>
              </label>
            </div>

            {/* COD */}
            <br />
            <label>
              <strong>Cash On Delivery:</strong>
            </label>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "285px",
                marginTop: "6px",
              }}
            >
              <label>
                <input
                  type="radio"
                  name="cod"
                  value="Enable"
                  checked={formData.cod === "Enable"}
                  onChange={handleInputChange}
                />{" "}
                Enable
                <p style={{ fontSize: "0.9rem", color: "gray" }}>
                  Make product available for Cash on delivery
                </p>
              </label>
              <label>
                <input
                  type="radio"
                  name="cod"
                  value="Disable"
                  checked={formData.cod === "Disable"}
                  onChange={handleInputChange}
                />{" "}
                Disable
                <p style={{ fontSize: "0.9rem", color: "gray" }}>
                  Make product unavailable for Cash on delivery
                </p>
              </label>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column", // stack fields vertically
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              {formData.productType === "Physical" && (
                <div style={{ marginTop: "24px" }}>
                  <h4 style={{ fontWeight: 600, marginBottom: "12px" }}>
                    Listing Type
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    {[
                      {
                        value: "forSale",
                        label: "Add a Product for Sale",
                        subtext: "Add a product to sell on the site",
                      },
                      {
                        value: "ordinaryListing",
                        label:
                          "Add a Product or Service as an Ordinary Listing",
                        subtext: "Add a product or service without buy option",
                      },
                      {
                        value: "quoteRequests",
                        label:
                          "Add a Product to Receive Quote (Price) Requests",
                        subtext:
                          "Add a product without adding a price to get price requests from customers",
                      },
                      {
                        value: "licenseKeys",
                        label: "Add a Product to Sell License Keys",
                        subtext: "Add a product to sell only license keys",
                      },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          cursor: "pointer",
                        }}
                      >
                        <div>
                          <input
                            type="radio"
                            name="listingType"
                            value={opt.value}
                            checked={formData.listingType === opt.value}
                            onChange={handleInputChange}
                            style={{ marginRight: "9px" }}
                          />
                          {opt.label}
                        </div>
                        <small style={{ color: "#777", marginLeft: "24px" }}>
                          {opt.subtext}
                        </small>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* if you want a different set when digital: */}
              {formData.productType === "Digital" && (
                <div style={{ marginTop: "24px" }}>
                  <h4 style={{ fontWeight: 600, marginBottom: "12px" }}>
                    Listing Type
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    {[
                      {
                        value: "digitalSale",
                        label: "Add a Digital Product for Sale",
                        subtext: "Buyers will download a file",
                      },
                      {
                        value: "licenseKeysOnly",
                        label: "Sell License Keys Only",
                        subtext: "Digital license keys only",
                      },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          cursor: "pointer",
                        }}
                      >
                        <div>
                          <input
                            type="radio"
                            name="listingType"
                            value={opt.value}
                            checked={formData.listingType === opt.value}
                            onChange={handleInputChange}
                            style={{ marginRight: "8px" }}
                          />
                          {opt.label}
                        </div>
                        <small style={{ color: "#777", marginLeft: "24px" }}>
                          {opt.subtext}
                        </small>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="font-bold text-gray-800 mb-2 block">
                  Categories
                </label>
                {renderTagBox()}

                {/* <label className="font-bold text-gray-800 mb-1 block">
                  Main Category
                </label> */}
                <Select
                  options={mainCategories}
                  placeholder="Select Main Category"
                  value={mainCategory}
                  onChange={(val) => {
                    setMainCategory(val);
                    setSubCategory(null);
                    setSubSubCategory(null);
                  }}
                />

                {/* <label className="font-bold text-gray-800 mt-4 mb-1 block">
                  Sub Category
                </label> */}
                <Select
                  options={getSubCategories()}
                  placeholder="Select Sub Category"
                  value={subCategory}
                  isDisabled={!mainCategory}
                  onChange={(val) => {
                    setSubCategory(val);
                    setSubSubCategory(null);
                  }}
                />

                {/* <label className="font-bold text-gray-800 mt-4 mb-1 block">
                  Sub Sub Category
                </label> */}
                <Select
                  options={getSubSubCategories()}
                  placeholder="Select Sub Sub Category"
                  value={subSubCategory}
                  isDisabled={!subCategory}
                  onChange={setSubSubCategory}
                />

                <button
                  className="mt-6 px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 font-semibold"
                  onClick={handleAddPath}
                  disabled={!mainCategory}
                >
                  ✔ Select Category
                </button>
              </div>
              {/* Category */}
              {/* <div>
                <label><strong>Category</strong></label><br />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',             // full width of container
                    maxWidth: '2000px',         // limit if you want
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="toys">Toys</option>
                </select>
              </div> */}

              {/* Coupon */}
              <div>
                <label>
                  <strong>Coupon</strong>
                </label>
                <br />
                <select
                  name="coupon"
                  value={formData.coupon}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    maxWidth: "2000px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                >
                  <option value="">Select Coupon</option>
                  <option value="summer20">SUMMER20</option>
                  <option value="welcome10">WELCOME10</option>
                </select>
              </div>
            </div>

            {/* —————————— Details: English Panel —————————— */}
            <Panel>
              <PanelHeader>Details: English</PanelHeader>

              <PanelBody>
                <PanelBodyContent>
                  <div
                    style={{
                      marginTop: 24,
                      display: "flex",
                      gap: "24px",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 8 }}>
                        Title
                      </h4>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="title"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #cbd5e0",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 8 }}>Tags</h4>
                      <input
                        type="text"
                        name="tag"
                        value={formData.tag}
                        onChange={handleInputChange}
                        placeholder="tags"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #cbd5e0",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <label>
                    <strong>Description</strong>
                  </label>
                  <br />
                  {/* Add Image into editor */}
                  <AddImageButton
                    type="button"
                    onClick={handleAddImageInEditor}
                  >
                    <FaImage /> Add Image
                  </AddImageButton>
                  <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue=""
                    init={{
                      height: 300,
                      menubar: true,
                      plugins: [
                        "advlist autolink lists link image charmap preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | bold italic underline strikethrough | " +
                        "alignleft aligncenter alignright alignjustify | " +
                        "bullist numlist outdent indent | removeformat | help",
                      branding: false,
                    }}
                  />
                  <br />
                  <label>
                    <strong>FAQs</strong>
                  </label>
                  <br />
                  {/* Add Image into editor */}
                  <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue=""
                    init={{
                      height: 300,
                      menubar: true,
                      plugins: [
                        "advlist autolink lists link image charmap preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | bold italic underline strikethrough | " +
                        "alignleft aligncenter alignright alignjustify | " +
                        "bullist numlist outdent indent | removeformat | help",
                      branding: false,
                    }}
                  />
                  {/* SEO Section */}
                  <div style={{ marginTop: 24 }}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>SEO</h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <input
                        type="text"
                        name="seoTitle"
                        value={formData.seoTitle}
                        onChange={handleInputChange}
                        placeholder="Title"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #cbd5e0",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                      <textarea
                        name="seoDescription"
                        value={formData.seoDescription}
                        onChange={handleInputChange}
                        placeholder="Description"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #cbd5e0",
                          borderRadius: "4px",
                          fontSize: "14px",
                          resize: "vertical",
                          minHeight: "80px",
                        }}
                      />
                      <input
                        type="text"
                        name="seoKeywords"
                        value={formData.seoKeywords}
                        onChange={handleInputChange}
                        placeholder="Keywords"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #cbd5e0",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Age Attribute Section */}
                  <div style={{ marginTop: 24 }}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>
                      Add Age Attribute
                    </h4>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "12px",
                      }}
                    >
                      {[
                        "0-18 Months",
                        "18-36 Months",
                        "3-5 Years",
                        "5-8 Years",
                        "8-12 Years",
                        "12+ Years",
                      ].map((age) => (
                        <label
                          key={age}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <input
                            type="radio"
                            name="ageAttribute"
                            value={age}
                            checked={formData.ageAttribute === age}
                            onChange={handleInputChange}
                          />
                          <span style={{ fontSize: 14 }}>For {age}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Gender Attribute Section */}
                  <div style={{ marginTop: 24 }}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>
                      Add Gender Attributes
                    </h4>
                    <div style={{ display: "flex", gap: "24px" }}>
                      {["boys", "girls", "unisex"].map((g) => (
                        <label
                          key={g}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <input
                            type="checkbox"
                            name="genderAttributes"
                            value={g}
                            checked={formData.genderAttributes.includes(g)}
                            onChange={handleInputChange}
                          />
                          <span style={{ fontSize: 14 }}>
                            For {g.charAt(0).toUpperCase() + g.slice(1)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Discount Attribute Section */}
                  <div style={{ marginTop: 24 }}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>
                      Add Discount Attribute
                    </h4>
                    <div style={{ display: "flex", gap: "24px" }}>
                      {["0-20%", "20-30%", "30-40%", "40-50%", "50-100%"].map(
                        (discount) => (
                          <label
                            key={discount}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <input
                              type="radio"
                              name="discountAttribute"
                              value={discount}
                              checked={formData.discountAttribute === discount}
                              onChange={handleInputChange}
                            />
                            <span style={{ fontSize: 14 }}>{discount}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Brand & Character Attributes */}
                  <div
                    style={{
                      marginTop: 24,
                      display: "flex",
                      gap: "24px",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 8 }}>
                        Add Brand Attribute
                      </h4>
                      <input
                        type="text"
                        name="brandAttribute"
                        value={formData.brandAttribute}
                        onChange={handleInputChange}
                        placeholder="Ex. Cosco, Smmigle, Toy Fort, Intex"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #cbd5e0",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h4 style={{ fontWeight: 600, marginBottom: 8 }}>
                        Add Character Attribute
                      </h4>
                      <input
                        type="text"
                        name="characterAttribute"
                        value={formData.characterAttribute}
                        onChange={handleInputChange}
                        placeholder="Ex. Spiderman, Barbie, Transformer"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #cbd5e0",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </div>
                </PanelBodyContent>
              </PanelBody>
            </Panel>

            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit Product
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <Panel>
              <PanelHeader>Product Details</PanelHeader>
              <PanelBody>
                <PanelBodyContent>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <label>
                        <strong>Stock</strong>
                      </label>
                      <br />
                      <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        style={{
                          width: "100%",
                          padding: "10px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label>
                        <strong>
                          SKU{" "}
                          <span style={{ fontWeight: "normal" }}>
                            (Product Code)
                          </span>
                        </strong>
                      </label>
                      <br />
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginTop: "5px",
                        }}
                      >
                        <input
                          type="text"
                          name="sku"
                          value={formData.sku}
                          onChange={handleInputChange}
                          style={{ flex: 1, padding: "10px" }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newSKU = generateSKU();
                            setFormData((prev) => ({ ...prev, sku: newSKU }));
                          }}
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label>
                      <strong>Barcode</strong>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="barcode"
                      value={formData.barcode}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "5px",
                        maxWidth: "540px",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label>
                      <strong>Demo URL</strong>
                    </label>
                    <br />
                    <small>Add a preview URL (i.e. https://demo.com)</small>
                    <br />
                    <input
                      type="url"
                      name="demoUrl"
                      value={formData.demoUrl}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "5px",
                      }}
                    />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>
                      Preview
                    </h3>
                    <div
                      style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
                    >
                      {/* Video Preview */}
                      <div style={{ flex: 1 }}>
                        <label>
                          <strong>Video Preview</strong>{" "}
                          <small>(MP4 or WEBM preview video)</small>
                        </label>
                        <div
                          onDrop={handleVideoDrop}
                          onDragOver={(e) => e.preventDefault()}
                          style={{
                            border: "2px dashed #ddd",
                            borderRadius: "10px",
                            padding: "30px",
                            textAlign: "center",
                            backgroundColor: "#f9f9f9",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <FaCloudUploadAlt size={40} color="#999" />
                          </div>
                          <p>
                            Drag and drop file here or{" "}
                            <label
                              style={{ color: "#007bff", cursor: "pointer" }}
                            >
                              Browse Files
                              <input
                                type="file"
                                accept="video/mp4,video/webm"
                                onChange={handleVideoUpload}
                                style={{ display: "none" }}
                              />
                            </label>
                          </p>
                        </div>
                      </div>

                      {/* Audio Preview */}
                      <div style={{ flex: 1 }}>
                        <label>
                          <strong>Audio Preview</strong>{" "}
                          <small>(MP3 or WAV preview audio)</small>
                        </label>
                        <div
                          onDrop={handleAudioDrop}
                          onDragOver={(e) => e.preventDefault()}
                          style={{
                            border: "2px dashed #ddd",
                            borderRadius: "10px",
                            padding: "30px",
                            textAlign: "center",
                            backgroundColor: "#f9f9f9",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <FaCloudUploadAlt size={40} color="#999" />
                          </div>
                          <p>
                            Drag and drop file here or{" "}
                            <label
                              style={{ color: "#007bff", cursor: "pointer" }}
                            >
                              Browse Files
                              <input
                                type="file"
                                accept="audio/mp3,audio/wav"
                                onChange={handleAudioUpload}
                                style={{ display: "none" }}
                              />
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Variations Section */}
                  <div style={{ marginTop: "30px" }}>
                    <h3 style={{ fontWeight: "600" }}>Variations</h3>
                    <p style={{ color: "#666" }}>
                      Add available options, like color or size that buyers can
                      choose during checkout
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          padding: "12px 24px",
                          backgroundColor: "#007b8f",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={openVariationModal}
                      >
                        Add Variation
                      </button>

                      {showVariationModal && (
                        <div
                          style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#fff",
                              padding: "30px",
                              borderRadius: "8px",
                              width: "1000px",
                              maxWidth: "95%",
                              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <h2 style={{ marginBottom: "20px" }}>
                              Add Variation
                            </h2>

                            <label>
                              <strong>Label</strong>
                            </label>

                            <input
                              type="text"
                              value={variationForm.label}
                              onChange={(e) =>
                                setVariationForm({
                                  ...variationForm,
                                  label: e.target.value,
                                })
                              }
                              placeholder="English"
                              style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "20px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                              }}
                            />
                            <label>
                              <strong>Variation Type</strong>
                            </label>

                            <select
                              value={variationForm.type}
                              onChange={(e) =>
                                setVariationForm({
                                  ...variationForm,
                                  type: e.target.value,
                                })
                              }
                              style={{ padding: "10px", width: "100%" }}
                            >
                              <option value="Radio Button (Single Selection)">
                                Radio Button (Single Selection)
                              </option>
                              <option value="Dropdown">
                                Dropdown(Single Selection)
                              </option>
                              <option value="Checkbox">
                                Checkbox(Single Selection)
                              </option>
                              <option value="Text">Text</option>
                              <option value="Number">Number</option>
                            </select>
                            {variationForm.type ===
                              "Radio Button (Single Selection)" && (
                              <>
                                <div style={{ marginTop: "10px" }}>
                                  <label>
                                    <strong>Option Display Type</strong>
                                  </label>
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "100px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="displayType"
                                        checked={
                                          variationForm.displayType === "Text"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            displayType: "Text",
                                          })
                                        }
                                      />{" "}
                                      Text
                                    </label>
                                    <label>
                                      <input
                                        type="radio"
                                        name="displayType"
                                        checked={
                                          variationForm.displayType === "Image"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            displayType: "Image",
                                          })
                                        }
                                      />{" "}
                                      Image
                                    </label>
                                    <label>
                                      <input
                                        type="radio"
                                        name="displayType"
                                        checked={
                                          variationForm.displayType === "Color"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            displayType: "Color",
                                          })
                                        }
                                      />{" "}
                                      Color
                                    </label>
                                  </div>
                                </div>

                                <div style={{ marginTop: "10px" }}>
                                  <label>
                                    <strong>
                                      Show Option Images on Slider When an
                                      Option is Selected
                                    </strong>
                                  </label>
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "100px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="showImage"
                                        checked={
                                          variationForm.showImageOnSlider ===
                                          "Yes"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            showImageOnSlider: "Yes",
                                          })
                                        }
                                      />{" "}
                                      Yes
                                    </label>
                                    <label>
                                      <input
                                        type="radio"
                                        name="showImage"
                                        checked={
                                          variationForm.showImageOnSlider ===
                                          "No"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            showImageOnSlider: "No",
                                          })
                                        }
                                      />{" "}
                                      No
                                    </label>
                                  </div>
                                </div>
                              </>
                            )}

                            {variationForm.type === "Dropdown" && (
                              <>
                                <div style={{ marginTop: "10px" }}>
                                  <label>
                                    <strong>Parent Variation</strong>
                                  </label>
                                  <br />
                                  <select
                                    style={{ padding: "10px", width: "100%" }}
                                  >
                                    <option value="none">None</option>
                                  </select>
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                  <label>
                                    <strong>
                                      Show Option Images on Slider When an
                                      Option is Selected
                                    </strong>
                                  </label>
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "100px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="showImage"
                                        checked={
                                          variationForm.showImageOnSlider ===
                                          "Yes"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            showImageOnSlider: "Yes",
                                          })
                                        }
                                      />{" "}
                                      Yes
                                    </label>
                                    <label>
                                      <input
                                        type="radio"
                                        name="showImage"
                                        checked={
                                          variationForm.showImageOnSlider ===
                                          "No"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            showImageOnSlider: "No",
                                          })
                                        }
                                      />{" "}
                                      No
                                    </label>
                                  </div>
                                </div>
                              </>
                            )}

                            {variationForm.type === "Checkbox" && (
                              <div style={{ marginTop: "10px" }}>
                                <div style={{ marginTop: "10px" }}>
                                  <label>
                                    <strong>Option Display Type</strong>
                                  </label>
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "100px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="displayType"
                                        checked={
                                          variationForm.displayType === "Text"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            displayType: "Text",
                                          })
                                        }
                                      />{" "}
                                      Text
                                    </label>
                                    <label>
                                      <input
                                        type="radio"
                                        name="displayType"
                                        checked={
                                          variationForm.displayType === "Image"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            displayType: "Image",
                                          })
                                        }
                                      />{" "}
                                      Image
                                    </label>
                                    <label>
                                      <input
                                        type="radio"
                                        name="displayType"
                                        checked={
                                          variationForm.displayType === "Color"
                                        }
                                        onChange={() =>
                                          setVariationForm({
                                            ...variationForm,
                                            displayType: "Color",
                                          })
                                        }
                                      />{" "}
                                      Color
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )}
                            {variationForm.type === "Text" && (
                              <div style={{ marginTop: "10px" }}></div>
                            )}
                            {variationForm.type === "Number" && (
                              <div style={{ marginTop: "10px" }}></div>
                            )}
                            <div style={{ marginTop: "10px" }}>
                              <label>
                                <strong>Visible</strong>
                              </label>
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  gap: "100px",
                                  marginBottom: "20px",
                                }}
                              >
                                <label>
                                  <input
                                    type="radio"
                                    name="visible"
                                    checked={variationForm.visible === "Yes"}
                                    onChange={() =>
                                      setVariationForm({
                                        ...variationForm,
                                        visible: "Yes",
                                      })
                                    }
                                  />{" "}
                                  Yes
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="visible"
                                    checked={variationForm.visible === "No"}
                                    onChange={() =>
                                      setVariationForm({
                                        ...variationForm,
                                        visible: "No",
                                      })
                                    }
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "10px",
                              }}
                            >
                              <button
                                onClick={closeVariationModal}
                                style={{
                                  padding: "10px 20px",
                                  backgroundColor: "#eee",
                                  border: "none",
                                  borderRadius: "4px",
                                  cursor: "pointer",
                                }}
                              >
                                Cancel
                              </button>

                              <button
                                onClick={() => {
                                  // Save logic here if needed
                                  handleAddVariation();
                                  closeVariationModal();
                                }}
                                style={{
                                  padding: "10px 20px",
                                  backgroundColor: "#00b896",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: "4px",
                                  cursor: "pointer",
                                }}
                              >
                                Add Variation
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      <button
                        type="button"
                        style={{
                          padding: "12px 24px",
                          backgroundColor: "#555",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowExistingVariationModal(true)}
                      >
                        Select an Existing Variation
                      </button>
                    </div>
                  </div>
                  {/* {(showVariationModal || showEditModal) && (
                    <div
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: '#fff',
                          padding: '30px',
                          borderRadius: '8px',
                          width: '1000px',
                          maxWidth: '95%',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <h2 style={{ marginBottom: '20px' }}>
                          {showEditModal ? 'Edit Variation' : 'Add Variation'}
                        </h2>

                       
                        <label><strong>Label</strong></label>
                        <input
                          type="text"
                          value={variationForm.label}
                          onChange={(e) =>
                            setVariationForm({ ...variationForm, label: e.target.value })
                          }
                          placeholder="English"
                          style={{
                            width: '100%',
                            padding: '10px',
                            marginBottom: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                          }}
                        />

                        

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                          <button
                            onClick={() => {
                              showEditModal ? setShowEditModal(false) : setShowVariationModal(false);
                            }}
                            style={{
                              padding: '10px 20px',
                              backgroundColor: '#eee',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                          >
                            Cancel
                          </button>

                          <button
                            onClick={() => {
                              if (showEditModal) {
                                handleSaveEditedVariation(); // <- define this function
                                setShowEditModal(false);
                              } else {
                                handleAddVariation(); // already defined by you
                                setShowVariationModal(false);
                              }
                            }}
                            style={{
                              padding: '10px 20px',
                              backgroundColor: '#00b896',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                          >
                            {showEditModal ? 'Save Changes' : 'Add Variation'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )} */}

                  {showExistingVariationModal && (
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 999,
                      }}
                    >
                      <div
                        style={{
                          background: "white",
                          padding: "20px 40px",
                          borderRadius: "8px",
                          width: "1000px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                          }}
                        >
                          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Created Variations
                          </h2>
                          <button
                            onClick={() => setShowExistingVariationModal(false)}
                            style={{
                              background: "none",
                              border: "none",
                              fontSize: "18px",
                              cursor: "pointer",
                            }}
                          >
                            &times;
                          </button>
                        </div>
                        <p>You have no created variations.</p>
                      </div>
                    </div>
                  )}
                  {/* {variations.length > 0 && (
                    <div style={{ marginTop: '30px' }}>
                      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Variation Preview</h2>
                      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#f7fafc', textAlign: 'left' }}>
                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>Label</th>
                            <th style={thStyle}>Type</th>
                            <th style={thStyle}>Visible</th>
                            <th style={thStyle}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {variations.map((variation) => (
                            <tr key={`${variation.type}-${variation.id}`} style={{ borderBottom: '1px solid #e2e8f0' }}>
                              <td style={tdStyle}>{variation.label}</td>
                              <td style={tdStyle}>{variation.type}</td>
                              <td style={tdStyle}>{variation.displayType || '-'}</td>
                              <td style={tdStyle}>{variation.visible ? 'Yes' : 'No'}</td>
                              <td style={tdStyle}>
                                <button
                                  onClick={() => handleDeleteVariation(variation.id, variation.type)}
                                  style={{
                                    background: '#e53e3e',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '6px 12px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )} */}
                  {variations.length > 0 && (
                    <div style={{ marginTop: "30px" }}>
                      <h2
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          marginBottom: "16px",
                        }}
                      >
                        Variation Preview
                      </h2>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <thead>
                          <tr
                            style={{
                              backgroundColor: "#f7fafc",
                              textAlign: "left",
                            }}
                          >
                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>Label</th>
                            <th style={thStyle}>Type</th>
                            <th style={thStyle}>Visible</th>
                            <th style={thStyle}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {variations.map((variation) => (
                            <tr
                              key={variation.uniqueKey}
                              style={{ borderBottom: "1px solid #e2e8f0" }}
                            >
                              <td style={tdStyle}>{variation.id}</td>
                              <td style={tdStyle}>{variation.label}</td>
                              <td style={tdStyle}>{variation.type}</td>
                              <td style={tdStyle}>
                                {variation.visible ? "Yes" : "No"}
                              </td>
                              <td style={tdStyle}>
                                <button
                                  onClick={() =>
                                    handleEditVariation(item, index)
                                  }
                                  style={{
                                    background: "#3182ce",
                                    color: "#fff",
                                    border: "none",
                                    padding: "6px 12px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    marginRight: "10px",
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleDeleteVariation(variation.uniqueKey)
                                  }
                                  style={{
                                    background: "#e53e3e",
                                    color: "#fff",
                                    border: "none",
                                    padding: "6px 12px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Terms and Buttons */}
                  <div
                    style={{
                      marginTop: "40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            agreeTerms: e.target.checked,
                          }))
                        }
                      />
                      <span>
                        I have read and agree to the{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          style={{ fontWeight: "bold", color: "#2563eb" }}
                        >
                          Terms & Conditions
                        </a>
                      </span>
                    </label>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          backgroundColor: "#2d3748",
                          color: "#fff",
                          padding: "12px 30px",
                          borderRadius: "5px",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={handleBack}
                      >
                        Back
                      </button>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          type="button"
                          style={{
                            backgroundColor: "#4a5568",
                            color: "#fff",
                            padding: "12px 30px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={handleSaveDraft}
                        >
                          Save as Draft
                        </button>
                        <button
                          type="submit"
                          style={{
                            backgroundColor: "#06b6d4",
                            color: "#fff",
                            padding: "12px 30px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </PanelBodyContent>
              </PanelBody>
            </Panel>
          </>
        )}
      </form>
    </>
  );
};

export default ProductForm;
