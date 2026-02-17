# Sub Array Sum

This algorithm aims at finding sub arrays (continuous elements) in an array have sum of its element as **k**.
It uses mathematical properties of numbers to generate the answer quicker.

:::important Finds the answer using one pass
Brut force does it in $$O(N²)$$ but this algorithm does the same in $$O(N)$$.

It uses an **Hash Map** to store the previous calculated prefix sums.
:::

![sub-array-sum-algorithm](../../static/img/algorithm-sub-array-sum.excalidraw.png)

## Kadane Algorithm

This looks pretty similar to the **sub array sum** problem but this is actually different.
Here, it's about finding the maximum possible sub array sum.

- Used to find a continuous segment where there is maximum value.
- Used for any problem where **continuous** elements is a requirement.

:::tip Restarts the sum calculation based on condition
If the adding the new element to the previous sum makes the sum lower than the element itself,
then we star a new array from that element.
:::

![kadane-algorithm](../../static/img/algorithm-kadane.excalidraw.png)
