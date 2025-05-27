document.addEventListener("DOMContentLoaded", () => {
    const additionalRows = `
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>Chenpeng Shen</td>
                            <td>Chine</td>
                            <td>Luca Szucs</td>
                            <td>Hongrie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Matyas Szabo</td>
                            <td>Allemagne</td>
                            <td>Anna Marton</td>
                            <td>Hongrie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Chenpeng Shen</td>
                            <td>Chine</td>
                            <td>Luca Szucs</td>
                            <td>Hongrie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Fares Arfa</td>
                            <td>Canada</td>
                            <td>Theodora Gkountoura</td>
                            <td>Grèce</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Mohamed Amer</td>
                            <td>Égypte</td>
                            <td>Hayoung Jeon</td>
                            <td>Corée du sud</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Sebastien Patrice</td>
                            <td>France</td>
                            <td>Jisu Yoon</td>
                            <td>Corée du sud</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Mitchell Saron</td>
                            <td>USA</td>
                            <td>Nisanur Erbil</td>
                            <td>Türkiye</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Sangwon Park</td>
                            <td>Corée du Sud</td>
                            <td>Misaki Emura</td>
                            <td>Japon</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Csanad Gemesi</td>
                            <td>Hongrie</td>
                            <td>Yoana Ilieva</td>
                            <td>Bulgarie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Ali Pakdaman</td>
                            <td>Iran</td>
                            <td>Liza Pusztai</td>
                            <td>Hongrie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Bolade Apithy</td>
                            <td>France</td>
                            <td>Cecilia Berder</td>
                            <td>France</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Luca Curatoli</td>
                            <td>Italie</td>
                            <td>Anna Bashta</td>
                            <td>Azerbaïjan</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Sandro Bazadze</td>
                            <td>Géorgie</td>
                            <td>Nada Hafez</td>
                            <td>Égypte</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Pascual Maria Di Tella</td>
                            <td>Argentine</td>
                            <td>Magda Skarbonkiewicz</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Gibran Zea</td>
                            <td>Mexique</td>
                            <td>Martina Criscio</td>
                            <td>Italie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Colin Heathcock</td>
                            <td>USA</td>
                            <td>Risa Takashima</td>
                            <td>Japon</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Evann Jean Abba Girault</td>
                            <td>Niger</td>
                            <td>Shihomi Fukushima</td>
                            <td>Japon</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Shaul Gordon</td>
                            <td>Canada</td>
                            <td>Hungyu Yang</td>
                            <td>Chine</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Maxime Pianfetti</td>
                            <td>France</td>
                            <td>Michela Battiston</td>
                            <td>Italie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Michele Gallo</td>
                            <td>Italie</td>
                            <td>Zaynab Dayibeova</td>
                            <td>Ouzbékistan</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Kento Yoshida</td>
                            <td>Japon</td>
                            <td>Pamela Brind'Amour</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Enver Yildirim</td>
                            <td>Türkiye</td>
                            <td>Chiara Mormile</td>
                            <td>Italie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Yousef Alshamlan</td>
                            <td>Koweït</td>
                            <td>Elizabeth Tartakovsky</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Bongil Gu</td>
                            <td>Corée du sud</td>
                            <td>Alina Komashchuk</td>
                            <td>Ukraine</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Andras Szatmari</td>
                            <td>Hongrie</td>
                            <td>Tatiana Nazlymov</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Adham Moataz</td>
                            <td>Égypte</td>
                            <td>Olena Kravatska</td>
                            <td>Ukraine</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Mohammad Rahbari</td>
                            <td>Iran</td>
                            <td>Aigerim Sarybay</td>
                            <td>Kazakhstan</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Eli Dershwitz</td>
                            <td>USA</td>
                            <td>Lucia Martin-Portugues</td>
                            <td>Espagne</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Aron Szilagyi</td>
                            <td>Hongrie</td>
                            <td>Yasmine Daghfous</td>
                            <td>Tunisie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Francois Cauchon</td>
                            <td>Canada</td>
                            <td>Zohra Nora Kehli</td>
                            <td>Algérie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Mohammad Foutouhi</td>
                            <td>Iran</td>
                            <td>Katherine Paredes Torress</td>
                            <td>Venezuela</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td></td>
                            <td></td>
                            <td>Chaima Benadouda</td>
                            <td>Algérie</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td></td>
                            <td></td>
                            <td>Saoussen Boudiaf</td>
                            <td>France</td>
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

    console.log("Rows prepared for addition epreuve.html:", rows);

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