# Imposter-Game

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Imposter Game</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        input, button { padding: 10px; font-size: 18px; margin: 10px; }
        #wordDisplay { margin-top: 30px; font-size: 24px; font-weight: bold; }
    </style>
</head>
<body>

    <h1>Imposter Game</h1>
    <p>Enter your player number (1-4):</p>
    <input type="number" id="playerNumber" min="1" max="4">
    <button onclick="getWord()">Get My Word</button>

    <div id="wordDisplay"></div>

    <!-- Link to external JavaScript file -->
    <script src="script.js"></script>

</body>
</html>
