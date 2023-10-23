# belly-button-challenge

## BACKGROUND
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## INSTRUCTIONS

I successfully completed the following steps to create a horizontal bar chart with a dropdown menu displaying the top 10 OTUs found in an individual using the D3 library. Here's what I did:
1. I used the D3 library to read in the data from the URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. This JSON file contains the necessary data for our chart.
2. I extracted the relevant data from the JSON file, including sample values, OTU IDs, and OTU labels. These data points are crucial for creating the horizontal bar chart.
3. Next, I designed the user interface, including a dropdown menu. This dropdown allows users to select different individuals for whom they want to display the top 10 OTUs.
4. I used the sample_values as the values for the horizontal bar chart. This means the height of each bar in the chart corresponds to the sample values of the respective OTUs.
5. I used otu_ids as the labels for the horizontal bar chart. These labels provide a unique identifier for each OTU, making it easy for users to identify the specific OTUs displayed in the chart.
6. Lastly, I used otu_labels as hovertext for the chart. This feature allows users to hover over each bar and see additional information about the corresponding OTU, enhancing the interactivity and information provided by the chart.
With these steps completed, the interactive horizontal bar chart with a dropdown menu is now ready to help users explore the top 10 OTUs in the selected individual, providing valuable insights into the microbial composition.
![image](https://github.com/ciincing/belly-button-challenge/assets/130705911/d95b1b8c-800b-4b39-99b8-e35225332590)

I have successfully created a bubble chart that displays each sample, utilizing the following specifications:
1. For the x-values, I used the otu_ids. This allows for a unique representation of each OTU on the x-axis, providing a distinct identifier for each point on the chart.
2. The y-values were derived from the sample_values. These values determine the position of each sample point along the y-axis, offering insight into the abundance of each OTU in the sample.
3. To visually represent the quantity of each sample, I used the sample_values for marker size. Larger marker sizes indicate a higher sample value, making it easy to discern differences in abundance.
4. Marker colors were determined using the otu_ids. Each OTU has its own unique color, adding an extra layer of information to the chart and aiding in quick identification of OTUs.
5. Lastly, I used the otu_labels for text values. These labels provide additional context for each sample point and can be displayed when hovering over the markers, making it easier for users to understand the data.
With these specifications in place, the bubble chart effectively visualizes each sample, allowing for a comprehensive exploration of the data.
![image](https://github.com/ciincing/belly-button-challenge/assets/130705911/17308967-570d-4b12-af7d-bb9a00308d89)

I have successfully displayed the sample metadata, which includes an individual's demographic information, on the page. Each key-value pair from the metadata JSON object is now visible somewhere on the page for users to access and explore. This provides valuable insights into the individual's demographic attributes and enhances their understanding of the data.
![image](https://github.com/ciincing/belly-button-challenge/assets/130705911/b25de7b3-1de1-4297-80be-bef9094c0e0b)

Finally, I updated all the plots when a new sample is selected. Guage chart is optional. 
![image](https://github.com/ciincing/belly-button-challenge/assets/130705911/4ff1b942-9fc2-4a93-b867-743d7c53467f)
