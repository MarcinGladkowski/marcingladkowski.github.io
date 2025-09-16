---
slug: data-workshop-gym
title: "DW Gym - 3 day python challenge"
date: 2022-01-18
update: 2022-01-18
tags:
  - python
  - machine learning
---

![certyficate](./certyficate.png)

Today I reveived certyficate of finish 3 day python challenge organized by Data Workshop. The challenge was in december of previous year but I think this is
a good idea to repeat what we trained. The main topic on challenge was Pandas library. I think it's the most popular library in Python to work with data.

In this post I will show all commands used in challenge exercises. Also, I will write how to start with Pandas and how to run your code with some data 
and try to execute these commands. 

Firstly, we need some data and environment A lot of datasets we can find on **kaggle.com**. I choosed set with [video games](https://www.kaggle.com/rush4ratio/video-game-sales-with-ratings). 
To eaisly work with data we can choose Jupyter. The fastest way is using it with docker. 

How to run it ? Just execute a command:
```bash
docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes -v ${PWD}:/home/jovyan/work jupyter/datascience-notebook
```
_Remember: ${PWD} evaluated to current directory. I execute command in directory when I save dataset file._ 

### Working with Pandas
With short explanations.

_Import library to using it. `pd` is only alias, but using very often and treat as good practice._
```python
import pandas as pd
```

---

_Load csv dataset. Of course datasets can be in other formats like xlsx. Typing only `pd` and executed shows result like `print()` function_
```python
df = pd.read_csv('./work/Video_Games_Sales_as_at_22_Dec_2016.csv')
df
```
![dw_gym_1](./dw_gym_1.png)

---

_To show some rows without printing everything_
```python
df.head()
```
![dw_gym_2](./dw_gym_2.png)

---

_The numbers of (rows, columns)_
```python
df.shape
    (16719, 17)
```

---

_For each column we can display unique values. In this example for `Platform` column_
```python
df.Platform.unique()
```
![dw_gym_3](./dw_gym_3.png)

---

_Fuction to count how many rows have a unique value for column. In this example for `Platform`_
```python
df.Platform.value_counts()
```
![dw_gym_4](./dw_gym_4.png)

---

_Function apply on data frame alows to work with each row. In this example we not doing anything. Just returned `row`_
```python
df.apply(lambda row: row, axis=1)
```
![dw_gym_5](./dw_gym_5.png)

---

_The same like above but we returning `keys` and it's mean - column names_
```python
df.apply(lambda row: row.keys(), axis=1)
```
![dw_gym_6](./dw_gym_6.png)

---

_Choosing only one column from row_
```python
df.apply(lambda row: row['Platform'], axis=1)
```
![dw_gym_7](./dw_gym_7.png)

---

_Add statement to check data. It's evaluate to `True` and thats why we see only booleans on output_
```python
df.apply(lambda row: row['Global_Sales'] > 30, axis=1)
```
![dw_gym_8](./dw_gym_8.png)

---

_Mix using `apply()` and `value_counts()`_
```python
df['Best_Global_30'] = df.apply(lambda row: row['Global_Sales'] > 30, axis=1)
df['Best_Global_30'].value_counts()
```
![dw_gym_9](./dw_gym_9.png)

---

_Get `value_counts()` of column and choose only by statement. Pandas work on this data as a `Series` of data. Details in documentation._
```python
genre_values = df['Genre'].value_counts()

top_ten_genre_values = genre_values[genre_values > 1000]
top_ten_genre_values
```
![dw_gym_10](./dw_gym_10.png)

---

_Using filtered only top values we can work again with main data_
```python
genre_norm = df["Genre"].map(lambda x: x if x in top_ten_genre_values else "other")
genre_norm.value_counts()
```
![dw_gym_11](./dw_gym_11.png)

---

_Grouping and aggregate functions. Pandas contains data structures like `pivot_table`, and allows us to count values like minumum, maximum etc_
```python
pd.pivot_table(df, values=["Global_Sales"], index=["Name"]).sort_values(by=("Global_Sales"), ascending=False)
```
![dw_gym_12](./dw_gym_12.png)


```python
(df[["Global_Sales", "Genre"]]
    .groupby("Genre")
    .agg(["mean", "median", "min", "max", "std", "size"])
)
```
![dw_gym_13](./dw_gym_13.png)


Thanks for reading this. It was a small recap of workshop exercises.

Marcin
