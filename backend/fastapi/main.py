from fastapi import FastAPI, Path, Query, Body
from schemas import Book, Author, BookOut

app = FastAPI()

@app.post('/book', response_model=BookOut)
def create_book(item: Book):
    book = item.dict()
    book["id"] = 3
    return book

