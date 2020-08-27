**Приложение для ведения заявок для логистов в автогрузоперевозках**

Фронтенд сделан на React. Бэк на express и mongodb.

Запуск и установка:

- Скачайте архив или склонируйте репозиторий
- Установите зависимости npm i
- Для разработки запустите проект npm run dev(запустится приложение react и сервер на express)

**Rest api на express и mongodb для системы ведения заявок для логистов в автогрузоперевозках**

**Создание заявки**
----Возвращает созданную заявку

- **URL**
  /order
- **Method:**
  `POST`

  - **Параметры**
    **Обязательные:**
    `number=[number]`
    `companyName=[string]`
    **Опциональные:**
    `date=[string]`
    `fullName=[string]`
    `phone=[string]`
    `comments=[string]`
    `ati=[string]`

  **Получение всех заявок**

- **URL**
  /order
- **Method:**
  `GET`

  **Получение заявки по id**

- **URL**
  /order/:id
- **Method:**
  `GET`

  **Редактирование заявки**
  ----Возвращает сообщение об успешном редактирование

- **URL**
  /order/:id
- **Method:**
  `PUT`

  - **Параметры**
    **Опциональные:**
    `number=[number]`
    `companyName=[string]`
    `date=[string]`
    `fullName=[string]`
    `phone=[string]`
    `comments=[string]`
    `ati=[string]`

  **Удаление заявки по id**

- **URL**
  /order/:id
- **Method:**
  `DELETE`
