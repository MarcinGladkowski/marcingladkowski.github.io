---
slug: data-workshop-gym
title: "DW Gym"
date: "2022-01-18"
type: post
---

```python
import pandas as pd
```

```python
df = pd.read_csv('./work/Video_Games_Sales_as_at_22_Dec_2016.csv')
df
```

![dw_gym_1](./dw_gym_1.png)


```python
df.head()
```
![dw_gym_2](./dw_gym_2.png)

```python
df.shape
    (16719, 17)
```

```python
df.Platform.unique()
```
![dw_gym_3](./dw_gym_3.png)


```python
df.Platform.value_counts()
```
![dw_gym_4](./dw_gym_4.png)


```python
df.apply(lambda row: row, axis=1)
```
![dw_gym_5](./dw_gym_5.png)


```python
df.apply(lambda row: row.keys(), axis=1)
```
![dw_gym_6](./dw_gym_6.png)


```python
df.apply(lambda row: row['Platform'], axis=1)
```
![dw_gym_7](./dw_gym_7.png)


```python
df.apply(lambda row: row['Global_Sales'] > 30, axis=1)
```
![dw_gym_8](./dw_gym_8.png)


```python
df['Best_Global_30'] = df.apply(lambda row: row['Global_Sales'] > 30, axis=1)
df['Best_Global_30'].value_counts()
```
![dw_gym_9](./dw_gym_9.png)


```python
genre_values = df['Genre'].value_counts()
print(type(genre_values))
genre_values

top_ten_genre_values = genre_values[genre_values > 1000]
top_ten_genre_values
```
![dw_gym_10](./dw_gym_10.png)

```python
genre_norm = df["Genre"].map(lambda x: x if x in top_ten_genre_values else "other")
genre_norm.value_counts()
```
![dw_gym_11](./dw_gym_11.png)


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

