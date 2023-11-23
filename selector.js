function selector() {
    let e = document.getElementById("package-selector");
    let val = e.options[e.selectedIndex].value;

    switch (val) {
        case "basic":
            document.getElementById('default').style.display = 'none';
            document.getElementById('basic').style.display = 'block';
            document.getElementById('deluxe').style.display = 'none';
            document.getElementById('wedding').style.display = 'none';
            document.getElementById('corporate').style.display = 'none';
            break;
        case "deluxe":
            document.getElementById('default').style.display = 'none';
            document.getElementById('basic').style.display = 'none';
            document.getElementById('deluxe').style.display = 'block';
            document.getElementById('wedding').style.display = 'none';
            document.getElementById('corporate').style.display = 'none';
            break;
        case "wedding":
            document.getElementById('default').style.display = 'none';
            document.getElementById('basic').style.display = 'none';
            document.getElementById('deluxe').style.display = 'none';
            document.getElementById('wedding').style.display = 'block';
            document.getElementById('corporate').style.display = 'none';
            break;
        case "corporate":
            document.getElementById('default').style.display = 'none';
            document.getElementById('basic').style.display = 'none';
            document.getElementById('deluxe').style.display = 'none';
            document.getElementById('wedding').style.display = 'none';
            document.getElementById('corporate').style.display = 'block';
            break;
    }

    e.preventDefault();
}

