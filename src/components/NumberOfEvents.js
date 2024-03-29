const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
  
        // Alerts
        let errorText;
        if (isNaN(value) || value <= 0) {
            errorText = "Only positive numbers are valid";
            setErrorAlert(errorText);
          } else {
            errorText = "";
            setErrorAlert(errorText);
            setCurrentNOE(value);
          }
    };
  
    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input 
            type="number"
            id="number-of-events-input"
            className="number-of-events-input"
            defaultValue={32}
            onChange={handleInputChanged}
            />
        </div>
    );
  }
  
  export default NumberOfEvents;
