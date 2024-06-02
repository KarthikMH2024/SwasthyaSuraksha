// Sample data for demonstration
const overviewData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    values: [1000, 1200, 1100, 1300, 1400, 1500]
};

const outbreaksData = ["Dengue in Delhi", "Cholera in Mumbai", "COVID-19 in Kerala"];

const resourcesData = ["Vaccines", "Medicines", "Health Workers"];

// Function to render overview chart
function renderOverviewChart() {
    // Placeholder function for chart rendering using a library like Chart.js
    console.log("Rendering overview chart...");
}

// Function to render list of recent outbreaks
function renderOutbreakList() {
    const outbreakList = document.getElementById("outbreakList");
    outbreaksData.forEach(outbreak => {
        const listItem = document.createElement("li");
        listItem.textContent = outbreak;
        outbreakList.appendChild(listItem);
    });
}

// Function to render list of health resources
function renderResourceList() {
    const resourceList = document.getElementById("resourceList");
    resourcesData.forEach(resource => {
        const listItem = document.createElement("li");
        listItem.textContent = resource;
        resourceList.appendChild(listItem);
    });
}

// Call functions to render data
renderOverviewChart();
renderOutbreakList();
renderResourceList();
