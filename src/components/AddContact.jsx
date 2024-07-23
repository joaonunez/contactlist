import React from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
    return (
      <div className="container mt-5">
        <h2 className="text-center">Add a new contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Save</button>
          <p className="text-center mt-3">
            <Link to={"/"}>or get back to contacts</Link>
          </p>
        </form>
      </div>
    );
  };
  
  