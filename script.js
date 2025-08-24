function volume_sphere() {
    //Write your code here
	 const radiusInput = document.getElementById("radius").value;
     const volumeOutput = document.getElementById("volume");

     const r = parseFloat(radiusInput);

  if (isNaN(r) || r < 0) {
    volumeOutput.value = NaN;
  } else {
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    volumeOutput.value = volume.toFixed(4);
  }

  return false; // prevent form submission (no page reload)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
