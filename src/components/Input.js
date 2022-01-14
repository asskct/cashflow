define([
  'react',
  'jsx!src/components/styled/Form.styled',
], (React, { FildSetPorra }) => function ({ type, name, label, placeholder, size, icon, textAlign, value, onClick, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <span className="icon">
        <input type={type} name={name} size={size} placeholder={placeholder} style={{textAlign:textAlign}} value={value} onChange={onChange} />
				<span className="icon" onClick={onClick}><i className={icon}></i></span>
      </span>
    </div>
  )
})