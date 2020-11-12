# plotly_hw

#### In this activity we took a json file and had to read the data through JavaScript. It is necessary to run the server as a live server for the html file to populate. 

#### In this activity there was a dataset of the microbes that are found in the human navel. I used the D3 library to read the json file. Once I was able to obtain the data I stored it in a variable for easier access. My first task was to get the IDs of the samples into the dropdown menu which was accomplished using the forEach function and appending the text to the variable "name"

#### Next I created a default bar and bubble graph with the first sample (#940) using the init function to intialize the server. I filitered the data to get 940 as the first sample. I then got all the values needed under the sample list for this specific sample. Since we only needed the first 10 bacteria I sliced the data. Along the way I would console.log the variables to make sure it worked. For the demographics I had to get the key and values for each id in the metadata and appended that to the html file under the div section. I then created the graphs using the trace which I indicated the values needed and then adjusting the layouts according to the graph I was generating.

#### I then created the function to update the graphs. I made sure to tell the system to get the value from the drop down menu and get the data related to that sample that is selected.I had to create new variables similar to the default and then slice it to get the condensed information I was looking for.

#### To update the graphs I had to restyle the graphs and add the different inputs with the updated variables to pull from the data. For the demographics I had to make sure to clear out the previous data before being able to generate the new information for the next sample collected

#### The bonus activity is located within the code. I had to obtain the wash frequency from the demographics variable originally created. For the colors, I had to try to find colors that looked well as a scale. 