'use strict';

let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8, или 9), куда вы хотите переместиться, "Отмена" для выхода'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из 1, 2, 3, 4, 6, 7, 8, или 9.');
                continue;
            }
            if (player.y == 0 && (direction == 7 || direction == 8 || direction == 9)) {
                alert('Вы не можете ввести 7, 8, 9, так как координата y = 0 и вы выходите за поле');
                continue;
            }
            if (player.y == 9 && (direction == 1 || direction == 2 || direction == 3)) {
                alert('Вы не можете ввести 1, 2, 3, так как координата y = 9 и вы выходите за поле');
                continue;
            }
            if (player.x == 0 && (direction == 1 || direction == 4 || direction == 7)) {
                alert('Вы не можете ввести 1, 4, 7, так как координата х = 0 и вы выходите за поле');
                continue;
            }
            if (player.x == 9 && (direction == 3 || direction == 6 || direction == 9)) {
                alert('Вы не можете ввести 3, 6, 9, так как координата х = 9 и вы выходите за поле');
                continue;
            }
            return direction;
        }
    },
    /**
     * Отдает следующую точку в которой будет находиться полльзователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        return nextPosition;
    }
};