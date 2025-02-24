# Input
Through the "Add City" form, users may add new cities including information on the city name, country, and population.
Users of the program click links to move between the "Cities List," "Add City," and "City Details" sections.
The program uses the unique ID of a city that a user clicks on in the list to retrieve and show its specifics.

# Process 
React Router controls navigation between several pages to guarantee the right component is rendered depending on the URL.
The component State Management in the App keeps the city list. The state is updated with the addCity function when a new city is added.
The useParams hook pulls the city ID from the URL, and the CityDetails element dynamically shows the relevant city's data.

# Output
Highlights a list of cities including clickable links to their specifics.
In City Details Shows comprehensive information on a certain city, including its name, nation, and population.
Users may enter and submit fresh city data, which is subsequently included to the list and shown on the "Cities List" page.


