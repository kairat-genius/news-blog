Back-end
В папке backend 
Активация виртуального окружения: venv\Scripts\activate

Перейдите в каталог news_blog: cd news_blog
Запустить Джанго: python manage.py runserver

Если базы данных удалены или просто не коректны 
Запустить миграцию: python manage.py migrate
Создания супер суперпользователя: python manage.py createsuperuses

Запустить Джанго: python manage.py runserver


Главная страница:
http://localhost:8000
get запрос 
[
    {
        "id": 1,
        "title": "про спорт",
        "img": "",
        "text": "тут такое дело ладно ничего пока",
        "create_at": "2024-02-05T05:48:23.677477Z",
        "urls": "news",
        "category": 1,
        "additional_news": 1
    },
]

Страница детали:
http://localhost:8000/details/urls     --место urls должно быть urls новости 
get запрос
{
    "id": 1,
    "category": {
        "id": 1,
        "name": "спорт",
        "urls": "category"
    },
    "additional_news": {
        "id": 1,
        "text": "про спорт там что то фотка",
        "urls": "additional_news",
        "img": ""
    },
    "title": "про спорт",
    "img": "",
    "text": "тут такое дело ладно ничего пока",
    "create_at": "2024-02-05T05:48:23.677477Z",
    "urls": "news"
}

Страница категорий: 
http://localhost:8000/category/
get запрос
[
    {
        "id": 1,
        "name": "спорт",
        "urls": "category"
    },
    {
        "id": 2,
        "name": "Актрисы",
        "urls": "category-2"
    },
    {
        "id": 3,
        "name": "фцвфцв",
        "urls": "category-3"
    },
    {
        "id": 4,
        "name": "ыфвфцв",
        "urls": "category-4"
    },
    {
        "id": 5,
        "name": "ssawdhawdkgawjd",
        "urls": "ssawdhawdkgawjd"
    },
    {
        "id": 6,
        "name": "awdawd",
        "urls": "awdawd"
    },
    {
        "id": 7,
        "name": "dawda",
        "urls": "dawdawd"
    }
]

Страница добавление категорий:
http://localhost:8000/admin_panel/category
post запрос
{
    "name": ""
}

Страница изменения, удаления категорий:
http://localhost:8000/admin_panel/category/urls ----место urls должно быть urls категорий
delete, put, patch запросы 
{
    "id": 8,
    "name": "ыыы",
    "urls": "category-5"
}

Страница добавление новостей:
http://localhost:8000/admin_panel/news
post запрос
{
    "title": "",
    "img": "",
    "text": "",
    "category": null,
    "additional_news": null  --- место этих null надо вводить id 
}

Страница изменения, удаление новостей:
http://localhost:8000/admin_panel/news/urls ----место urls должно быть urls Новостей
delete, put, patch запросы
{
    "id": 1,
    "title": "про спорт",
    "img": "",
    "text": "тут такое дело ладно ничего пока",
    "create_at": "2024-02-05T05:48:23.677477Z",
    "urls": "news",
    "category": 1,
    "additional_news": 1
}






