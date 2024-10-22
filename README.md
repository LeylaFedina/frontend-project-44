### Hexlet tests and linter status:
[![Actions Status](https://github.com/LeylaFedina/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/LeylaFedina/frontend-project-44/actions)

<a href="https://codeclimate.com/github/LeylaFedina/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/6e287a00f1a28edfa42e/maintainability" /></a>

## Описание

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

Калькулятор. Арифметические выражения, которые необходимо вычислить.
Прогрессия. Поиск пропущенных чисел в последовательности чисел.
Определение четного числа.
Определение наибольшего общего делителя.
Определение простого числа.

## Установка и подготовка зависимостей
***
```
$ sudo npm link 
make install
```

## Игра: "Проверка на четность"
***
Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное

### Запуск игры
```
$ brain-even
```
### Пример игры
[![asciicast](https://asciinema.org/a/lupKBHie9XGqqos4PsmFPUiy5.svg)](https://asciinema.org/a/lupKBHie9XGqqos4PsmFPUiy5)


## Игра: "Калькулятор"
***
Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

### Запуск игры
```
$ brain-calc
```
### Пример игры
[![asciicast](https://asciinema.org/a/1RLIMvDvKFKpQZlqazMjMGQ3Z.svg)](https://asciinema.org/a/1RLIMvDvKFKpQZlqazMjMGQ3Z)


## Игра: "НОД"
***
Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

### Запуск игры
```
$ brain-gcd
```
### Пример игры
[![asciicast](https://asciinema.org/a/Ziik2owRTjvFWfRPRyWpA36ho.svg)](https://asciinema.org/a/Ziik2owRTjvFWfRPRyWpA36ho)


## Игра: "Арифметическая прогрессия"
***
Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

### Запуск игры
```
$ brain-progression
```
### Пример игры
[![asciicast](https://asciinema.org/a/Uz1NfqffdqaJnWmtcdSSyU9wy.svg)](https://asciinema.org/a/Ziik2owRTjvFWfRPRyWpA36ho)


## Игра: "Простое ли число/?"
***
Показываем игроку число, Игрок должен определить это число простое или нет.

### Запуск игры
```
$ brain-prime
```
### Пример игры
[![asciicast](https://asciinema.org/a/HIUzOigNn2gn1SWtCoINCU.svg)](https://asciinema.org/a/HIUzOigNn2gn1SWtCoINCU)




