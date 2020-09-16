import React, {Component} from 'react';


class Input extends Component {
    render() {
        const {error, label, name, value="", onChange} = this.props;
        let inputValidationClassName = "form-control";
        if(value){
            if(error[name]){
                inputValidationClassName = inputValidationClassName + " is-invalid";
            }
            else{
                inputValidationClassName = inputValidationClassName + " is-valid";
            }
        }
        return (
            <div className={"form-group"}>
                <label className="form-label">{label}</label>
                <input type="text" name={name} value={value} className={inputValidationClassName} onChange={onChange}/>
                {error[name] && <div className="invalid-feedback">
                    {error[name]}
                </div>}
            </div>
        );
    }
}



export default Input;