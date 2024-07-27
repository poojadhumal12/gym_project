import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Retrieve the form data from local storage
    const storedData = localStorage.getItem("contactFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFirstName(parsedData.firstName || "");
      setLastName(parsedData.lastName || "");
      setEmail(parsedData.email || "");
      setPhoneNumber(parsedData.phoneNumber || "");
      setAddress(parsedData.address || "");
      setGender(parsedData.gender || "");
      setCurrentWeight(parsedData.currentWeight || "");
      setHeight(parsedData.height || "");
      setBmi(parsedData.bmi || "");
      setGoalWeight(parsedData.goalWeight || "");
      setMembershipType(parsedData.membershipType || "");
      setPreferredDate(parsedData.preferredDate || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Create an object with the form data
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      gender,
      currentWeight,
      height,
      bmi,
      goalWeight,
      membershipType,
      preferredDate
    };
  
    // Save the form data to local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  
    
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted and data stored successfully!");
  
      // Clear the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setGender("");
      setCurrentWeight("");
      setHeight("");
      setBmi("");
      setGoalWeight("");
      setMembershipType("");
      setPreferredDate("");
    }, 2000);
  };
  

  return (
    <section className="contact">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>CONTACT US</h1>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Current Weight (kg)</label>
              <input
                type="number"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>BMI</label>
              <input
                type="number"
                value={bmi}
                onChange={(e) => setBmi(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Goal Weight (kg)</label>
              <input
                type="number"
                value={goalWeight}
                onChange={(e) => setGoalWeight(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Choose Membership Type</label>
            <select
              value={membershipType}
              onChange={(e) => setMembershipType(e.target.value)}
              required
            >
              <option value="">Select Membership Type</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Date</label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
          >
            {loading && <ClipLoader size={20} color="white" />}
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
