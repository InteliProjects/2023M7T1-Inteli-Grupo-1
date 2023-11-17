function From (props) {
    let fields = props.fields;
    const buttonsStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "10px"
    }

    const handleInputChange = (e, attributeName) => {
        const updatedUser = { ...props.formDataProps.formData, [attributeName]: e.target.value };
        props.formDataProps.setFormData(updatedUser);
    };

    return (
        <>
            <div>
                {fields.map((field) => (
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">{field}</label>
                        <input className="form-control" onChange={(e) => {handleInputChange(e, field)}} id={field}></input>
                    </div>
                ))}
                
                <div style={buttonsStyle}>
                    <button onClick={props.actionFunction} className="btn btn-success">{props.actionName}</button>
                    <button onClick={props.hideModal} className="btn btn-danger">Close</button>
                </div>
            </div>
        </>
    );
}

export default From;