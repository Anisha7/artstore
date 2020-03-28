import React, { useState } from "react";

import { artStoreData } from "../../../../data";

const InterestForm = ({ items }) => {
    let [firstname, setFirstName] = useState("");
    let [middlename, setMiddleName] = useState("");
    let [lastname, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [address1, setAddress1] = useState("");
    let [address2, setAddress2] = useState("");
    let [city, setCity] = useState("");
    let [country, setCountry] = useState("");
    let [zip, setZip] = useState("");
    let [message, setMessage] = useState("");
  
    // from items (ids), get items (objects) using artStoreData
    const order = []
    items.forEach((index) => {
      // find that id in artStoreData
      const item = artStoreData.filter(({id}) => index === id)
      if (item.length > 0) {
        // append object to order
        order.push(item[0])
      }
    })
    const total = order.reduce((acc, curr) => {
      const price = parseFloat(curr.price.slice(1, curr.price.length))
      return acc + price
    } , 0);
    console.log(total)
    // also get total cost of purchase
    // email this to me
    const sendFeedback = (templateId, variables) => {
      window.emailjs
        .send("gmail", templateId, variables)
        .then(res => {
          console.log("Email successfully sent!");
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err =>
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          )
        );
    };
  
    const handleSubmit = event => {
      console.log("heree");
      // update with order template
      const templateId = "template_dBShjcin";
      sendFeedback(templateId, {
        first_name: firstname,
        middle_name: middlename,
        last_name: lastname,
        email: email,
        phone: phone,
        address_1: address1,
        address_2: address2,
        city: city,
        country: country,
        zip: zip,
        message_html: message,
        order: order,
        total: total
      });
    }
  
    return (
      <form className="interest-form">
        <div className="inline">
          <input
            className="input"
            type="text"
            value={firstname}
            placeholder="First name"
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <input
            className="input"
            type="text"
            value={middlename}
            placeholder="Mi."
            onChange={e => setMiddleName(e.target.value)}
            required
          />
          <input
            className="input"
            type="text"
            value={lastname}
            placeholder="Last name"
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="inline">
          <input
            className="input"
            type="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="tel"
            value={phone}
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="inline">
          <input
            className="input"
            type="text"
            value={address1}
            placeholder="Address line 1"
            onChange={e => setAddress1(e.target.value)}
            required
          />
          <input
            className="input"
            type="text"
            value={address2}
            placeholder="Address line 2"
            onChange={e => setAddress2(e.target.value)}
          />
        </div>
        <div className="inline">
          <input
            className="input"
            type="text"
            value={city}
            placeholder="City"
            onChange={e => setCity(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={country}
            placeholder="Country"
            onChange={e => setCountry(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={zip}
            placeholder="Zip"
            pattern="[0-9]*"
            onChange={e => setZip(e.target.value)}
          />
        </div>
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={e => setMessage(e.target.value)}
          placeholder="Write message here"
          value={message}
        />
        <input
          type="button"
          value="SUBMIT"
          className="btn"
          onClick={e => handleSubmit(e)}
        />
      </form>
    );
  };

  export default InterestForm;