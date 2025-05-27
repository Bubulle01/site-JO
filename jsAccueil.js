document.addEventListener("DOMContentLoaded", () => {
    const additionalRows = `
                    <tbody>
                            <td>Australie</td>
                            <td>18</td>
                            <td>19</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>16</td>
                            <td>27</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Pays-Bas</td>
                            <td>15</td>
                            <td>7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Grande-Bretagne</td>
                            <td>14</td>
                            <td>22</td>
                            <td>29</td>
                        </tr>

                    </tbody>
    `;

    

    const tableBody = document.querySelector("table tbody");
    if (!tableBody) {
        console.error("table tbody not found");
        return;
    }

    const toggleButton = document.querySelector("#toggle-rows-button");
    if (!toggleButton) {
        console.error("Toggle-rows-button not found");
        return;
    }
    

    // Parse rows
    const tempContainer = document.createElement("table");
    tempContainer.innerHTML = additionalRows;
    const rows = Array.from(tempContainer.querySelectorAll("tr"));
    

    if (rows.length === 0) {
        console.error("no rows found in additionalRows");
        return;
    }

    console.log("Rows prepared for addition:", rows);

    let rowsAdded = false;

    toggleButton.addEventListener("click", () => {
        if (!rowsAdded) {
            rows.forEach(row => tableBody.appendChild(row));
            rowsAdded = true;
            toggleButton.src = "i/up.webp";
            toggleButton.alt = "up arrow";
            console.log("Rows added.");
        } else {
            rows.forEach(row => row.remove());
            rowsAdded = false;
            toggleButton.src = "i/down.webp";
            toggleButton.alt = "down arrow";
            console.log("Rows removed.");
        }
    });

    
});