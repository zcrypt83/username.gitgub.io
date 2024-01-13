document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const gridSize = 20;
    const snake = [{ x: 0, y: 0 }];
    const food = { x: 0, y: 0 };
    let direction = 'right';

    function drawSnake() {
        ctx.fillStyle = '#00f';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        });
    }

    function drawFood() {
        ctx.fillStyle = '#f00';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    function update() {
        const head = { ...snake[0] };

        switch (direction) {
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
        }

        snake.unshift(head);

        // Check collision with food
        if (head.x === food.x && head.y === food.y) {
            generateFood();
        } else {
            snake.pop();
        }

        // Check collision with walls or itself
        if (
            head.x < 0 || head.x >= canvas.width / gridSize ||
            head.y < 0 || head.y >= canvas.height / gridSize ||
            checkCollision()
        ) {
            alert('Game Over!');
            resetGame();
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSnake();
        drawFood();
    }

    function generateFood() {
        food.x = Math.floor(Math.random() * (canvas.width / gridSize));
        food.y = Math.floor(Math.random() * (canvas.height / gridSize));
    }

    function checkCollision() {
        return snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y);
    }

    function resetGame() {
        snake.length = 1;
        snake[0] = { x: 0, y: 0 };
        direction = 'right';
        generateFood();
    }

    function handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }

    generateFood();
    setInterval(update, 200);

    // Event listener para manejar las teclas de flecha
    document.addEventListener('keydown', handleKeyDown);
});
