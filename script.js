const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  const priceElements = document.querySelectorAll('.price');

    // Step 2: Initialize total variable
    let total = 0;

    // Step 3: Loop through the price elements and sum the prices
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent); // Convert to number and add to total
    });

    // Step 4: Create a new row for the total
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.textContent = `Total Price: Rs ${total}`; // Display the total price

    // Step 5: Append the total cell to the new row and then append the new row to the table
    newRow.appendChild(totalCell);
    document.querySelector('table').appendChild(newRow); // Append to the table


	
  
};

getSumBtn.addEventListener("click", getSum);

