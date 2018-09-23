import React from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

const TextField = ({
  name, value, onChange, field, icon, textCls, isTextArea,
}) => {
  let classList = 'mdc-text-field';
  if (isTextArea) {
    classList += 'mdc-text-field--textarea';
  }

  if (icon) {
    classList += ' mdc-text-field--with-leading-icon';
  }

  const id = 'xyz';

  return (
    <div className="el-margin">
      {name ? <label htmlFor={id} className="my-text-label">{name}</label> : null}
      <div className={classList}>
        {icon ? <i className="material-icons mdc-text-field__icon">{icon}</i> : null}
        {isTextArea
          ? <textarea rows="2" cols="40" id={id} value={value} onChange={onChange} className={`mdc-text-field__input ${textCls}`} data-field={field} />
          : <input type="text" id={id} value={value} onChange={onChange} className={`mdc-text-field__input ${textCls}`} data-field={field} />
        }
      </div>
    </div>
  );
};
export default TextField;

TextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  icon: PropTypes.string,
  textCls: PropTypes.string,
  isTextArea: PropTypes.bool,
};

TextField.defaultProps = {
  name: '',
  icon: null,
  textCls: 'form-text-field',
  isTextArea: false,
};
