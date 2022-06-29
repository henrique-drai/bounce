import React from 'react'

function PersonalDetails({ form, setForm }) {
  const handleChange = (e) => {
    const { value, name } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="PersonalDetails">
      <div className="title">Personal Details:</div>
      <div className="textInput">
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          name="name"
          autoFocus
          onChange={handleChange}
        />
      </div>
      <div className="textInput">
        <label>Email</label>
        <input
          type="text"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default PersonalDetails