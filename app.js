document.getElementById('soilForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Gather input values
  const ph = parseFloat(document.getElementById('ph').value);
  const moisture = parseFloat(document.getElementById('moisture').value);
  const temperature = parseFloat(document.getElementById('temperature').value);
  const organicContent = parseFloat(document.getElementById('organicContent').value);

  // Simple logic for prediction (this can be replaced with a more advanced algorithm or API)
  let soilQuality = "Poor";

  if (ph >= 6.0 && ph <= 7.5 && moisture >= 30 && moisture <= 60 && temperature >= 10 && temperature <= 30 && organicContent >= 2) {
      soilQuality = "Good";
  } else if (ph >= 5.5 && ph <= 8.0 && moisture >= 20 && moisture <= 70 && temperature >= 5 && temperature <= 35 && organicContent >= 1) {
      soilQuality = "Average";
  }

  // Display result
  const predictionResult = document.getElementById('predictionResult');
  const soilQualityElement = document.getElementById('soilQuality');
  
  soilQualityElement.textContent = `The predicted soil quality is: ${soilQuality}`;
  predictionResult.classList.remove('hidden');
});
