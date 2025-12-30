# Combinatorics

This is the branch of mathematics that deals with permutations and combinations.
In this page, I only try to build mental models such that the concepts are easier to remember.

## Permutations

Permutation is an arrangement of objects where the order **does** matter.
Every order is a different permutation.

:::important Mental model using the name
The word **mutation** is **permutation** is enough to build a strong mental model.
Here, this means the order of things matter.
Any change of order will mutate the arrangement.
:::

The formula of permutation also reflects the same.
If there are N available choices and we need to build permutations of size K.
In this case, for first position, we've N options, for second position we've N-1 and then N-2, until 1.

So the number of permutations possible is, $N \times N-1 \times N-2 ...$ until K positions are filled.
The formula exactly does this.
Takes the full factorial of the available choices and removes all unused positions by dividing it.

<!-- vale Vale.Spelling = NO -->

$$
_n P_k = \frac{n!}{(n-k)!}
$$

<!-- vale Vale.Spelling = YES -->

:::danger Permutations with repetition
Even though permutation always speaks about order of items and
also formula doesn't allow repeating items, this isn't always true.

Permutations with repetitions is an important use case.
For example, when we've a 3 digit number lock, the numbers can be repeated.
This means, the above formula isn't valid for finding the number of permutations possible.
So every position has all options to chose from.
This means, if you have 10 choices to fill in 3 positions then we've $10 \times 10 \times 10$ permutations.

<!-- vale Vale.Spelling = NO -->

$$
_n P_r = n^r
$$

<!-- vale Vale.Spelling = YES -->

:::

## Combinations

Combination is a selection of objects where the order **doesn't** matter.
Every order is the same combination.

:::important Mental model using the name
The word combination is used so much in day-to-day life that it's easy to remember based on examples.

- Color combination - we just say the same colors in any order make the same combination.
- Food combination - again, the same food items in any order make the same combination.
- Clothing combination - same clothes in any order make the same combination.
  :::

Combination formula is same as permutation one
but additionally it removes the possible duplicates since order doesn't matter here.

<!-- vale Vale.Spelling = NO -->

$$
\begin{aligned}
_n C_k = \frac{n!}{k!(n-k)!}
\text{ - this is same as permutation with extra division to group all permutations of same combination into one.}\\
_n C_k = \frac{permutations}{\text {Number Of Permutations Per Combination}}  \text{ - The above formula is just same this.}\\
\end{aligned}
$$

<!-- vale Vale.Spelling = YES -->

:::warning Combination is permutations with grouping
We group all permutations into groups, where each group corresponds to one unique combination of the items.

Division is nothing but grouping.
This is exactly what happens here.
:::
