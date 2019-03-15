# Weather Application using Angular 7 Framework



## 1) The page should have two text fields that takes state code for example: MO and city name: Kansas City.
a) **Displaying Page Header:** Created weather forecast child component to display header with a logo and header text("WEATHER API") with main app component as parent .
![](https://github.com/pradeepika1997/Weather-Application/raw/master/Screenshots/Page%20headder.png)

b) **Displaying the Form in the page:** Created location search child component and added one drop down list and text field along with a submit button pointing from parent component weather forecast (header)
![](https://github.com/pradeepika1997/Weather-Application/raw/master/Screenshots/Location%20search.png)

c) **Adding Validations:** If any one of the text field is empty, It displays a warning text below the text field.
![](https://github.com/pradeepika1997/Weather-Application/raw/master/Screenshots/Location%20Search%20Validation-1.png)

d) **Parsing JSON data:** Getting JSON data using HTTP client. Checking for errors and displaying appropriate warnings. 
![](https://github.com/pradeepika1997/Weather-Application/raw/master/Screenshots/Location%20Search%20Validation-2.png)

## 2) Pass those values and display weather details of the city like temperature, wind, pressure, humidity etc.
a) **Displaying Current Weather Details:** Created display weather component to view the current details.
Used property binding to pass data from parent component to the child component.
Setting the default values to Kansas City, MO.
Displaying parameters like Temperature, wind, pressure, humidity, icon using bootstrap framework.
![](https://github.com/pradeepika1997/Weather-Application/raw/master/Screenshots/Current%20Weather%20Forecast.png)

## 3) Also display the hourly forecast (any 2-3 details from the API) for 5 hours in the city entered.
a) **Displaying Hourly Weather Details:** Created hourly display component to view hourly weather forecast details for next 5 hours binding it with the parent component location search.
Used property binding to pass data from parent component to child.
Displayed the contents using bootstrap framework.
Displayed parameters like Date-Time, icon, Temperature and weather description.
![](https://github.com/pradeepika1997/Weather-Application/raw/master/Screenshots/Hourly%20Weather%20Forecast.png)

## Components flow diagram for the source code.
![](https://github.com/sindhusha-t/Weather-Application/raw/master/Screenshots/Document%201.png)

## Final Weather application page:
![](https://github.com/pradeepika1997/Weather-Application/raw/master/Screenshots/Hourly%20Weather%20Forecast.png)