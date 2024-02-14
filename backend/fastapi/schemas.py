from pydantic import BaseModel, Field, validator
from typing import List
from datetime import date

class Genre(BaseModel):
    name: str

class Author(BaseModel):
    first_name: str = Field(..., max_length=20)
    last_name: str
    age: int = Field(
        ..., gt=15, lt=90, description="Автор не может быть ниже 15 лет и больше 90 лет"
    )



    # @validator('age')
    # def check_age(cls, v):
    #     if v < 15:
    #         raise ValueError('Возраст автора не может быть ниже 15')
    #     return v
class Book(BaseModel):
    title: str
    writer: str
    duration: str
    data: date
    summary: str
    genres: List[Genre] = []
    pages: int = 10

class BookOut(Book):
    id: int