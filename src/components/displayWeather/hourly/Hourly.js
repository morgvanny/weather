import React, { Component } from 'react'

export default class Hourly extends Component { 
  render = () => { 
    if (this.props.hourly && this.props.hourly.message) {
      console.log(this.props.hourly.message);
    } else if (this.props.hourly && !this.props.hourly.message) {
      // console.log(this.props.hourly);
    } else { 
      // console.log("Getting data...");
    }

    return (
      <div>
        {this.showHourlyForecast()}
      </div>
    )
  }

  showHourlyForecast = () => {
    if (this.props.hourly && !this.props.hourly.message) {
      return (
        <div key="hourlydiv" className="hourly">
          <h2 className="hourly-h2" key="hourlyh2">Hourly Forecast</h2>
          <ul key="hourlyul" className="hourlyList">
            {this.props.hourly.map((hour, i) => {
              return (
                <div key={`lihourdiv${i}`}>
                  <h3 key={`h2${i}`}>{`${this.props.getTime(hour.observation_time.value)} 
                        ${this.props.getDate(new Date(hour.observation_time.value))}`}</h3>
                  <li key={`cond${i}`}>{`Conditions: ${hour.weather_code.value.toLowerCase().replace("_", " ")}`}</li>
                  <li key={`temp${i}`}>{`Temperature: ${hour.temp.value}\u00B0${hour.temp.units}`}</li>
                  <li key={`prec${i}`}>{`Precipitation: ${hour.precipitation_type.value.toLowerCase().replace("_", " ")} 
                        (${hour.precipitation.value} ${hour.precipitation.units})`}</li>
                </div>
              )
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <h2 key="get">Getting Hourly Forcast Data...</h2>
      )
    }
  }
}