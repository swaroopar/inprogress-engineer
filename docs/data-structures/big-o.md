# Big O Notation

:::danger only important nuances
This page only covers important nuances, mental models or hidden concepts
that helps to understand the Big O notation better.
:::

:::important Mental model for Big O notation
View it as graph always where x-axis is input size
and y-axis is time taken or space used.

Big O is the function that takes input and gives the time or space as output.
For example O(N) means, the f(N) = N where N is the input size takes time proportional to N.
:::

Big O notation represents the **order of growth** of a function
meaning in which order does the function scales as the input size increases.
It's about classifying or grouping functions based on its growth rate.

## Meaning of 'O' in Big O Notation

- The **O** in Big O comes from the German word **Ordnung** which means **order**.
- The **big** in Big O refers to the uppercase **O**.

:::tip Big O wasn't for computer science initially
Big O notation was initially used in number theory and analysis of algorithms came later.

When it was created, f = O(N) meant the following:

- "f belongs to the order/class defined by N"
- "f is in the category of functions that grow like N"
- "f and N are of the same order of magnitude"
  :::

## Theoretical vs Practical Usage

Theoretically - Big O notation only describes upper bound.

In Computer science - Big O notation says that its rate of growth.
Even though it means the tight upper and lower bound,
its been used in practice to represent rate of growth.

:::warning bounds vs rate of growth
Both bounds and rate of growth are related concepts.
It's two different things generated out of the same idea of measuring function growth.
:::

## Asymptotic Runtime

Asymptotic in general means something that doesn't join or meet
and this is exactly what the big O notation is about.

In Big O notation, it means the behavior of the function as the input size approaches infinity.

:::tip Mental model for Asymptotic
Think of the graph of y = 1/x.
Here as x approaches infinity, y approaches 0 but never actually reaches 0.
This is an example of asymptotic behavior.
:::

## Growth Class - Classification of functions and Pattern Recognition

Growth class is a way to categorize functions based on their growth rates.
Big O notation exactly helps us to classify functions into growth classes.
This is exactly why we drop constants and non-dominant terms in Big O notation.

:::important Faster vs slower growth classes
Faster growth classes are ones with bad time complexity.
Slower growth classes are ones with good time complexity.
:::

## Amortized Time

In Big O notation, amortized time is used to describe the average time taken per operation.
It's used only in functions where occasionally the operation takes longer time than usual.

For such a function, there are always two Big O notations associated with it:

1. How much does 'N' inserts take.
2. How much does '1' insert on an **average** take - This is the amortized time.

:::tip Mental model for Amortized Time

$$
\begin{aligned}
\text{Amortized Time} = \frac{\text{Total time for N operations}}{N}
\end{aligned}
$$

So in case of ArrayList appending an element scenario which is always mentioned in all books will be then,

$$
\begin{aligned}
\frac{O(N)}{N} = {O(1)}
\end{aligned}
$$

:::

:::warning ArrayList Example
The ArrayList example considers only the **insert** function.
This function just inserts at the end of the ArrayList.
:::

## Bounds

The term bound here means, we say that the running time of a function won't cross this limit.

- In case of upper bound, we say it won't be above this limit - meaning lesser than or equal to this limit.
- In case of lower bound, we say it won't be below this limit - meaning greater than or equal to this limit.

:::danger Bounds are for the growth class and not exact values
Here the **tight bound** isn't for the exact mathematical calculation but for the growth class classification.

Meaning, if we say an algorithm is O(N), it means its growth class is linear
and it can't be better or worse than that.
:::

:::important Mental model for tight Bounds
Consider it as a way to describe limits for any measurement.

If you say the door has to be at most 7 feet tall given that most people are 6 feet tall,
you are giving a tight upper bound.
But you can also say that the door can be maximum 10 feet tall
but this isn't accurate information also this isn't wrong.
:::

## Drop Constants and Non-Dominant Terms

Keep in mind that Big O notation only focuses on **rate of growth**.
This means, it only cares about the **shape of the graph** as input size increases.
It means which terms dominate when the input reaches really large values.
More over as mentioned in [bounds](#bounds) section,
we only want to show the tight bound to the growth class of the function and not mathematical tight bound.

:::danger think in terms of asymptotic behavior
When the input reaches very large values,
see which of the values really dominate the growth of the function's runtime or space used.
:::

:::warning shape of graphs with constants
So when we say O(2N) is same as O(N), since the shape of the graph is same.
The constant 2 doesn't change the shape of the graph, it just scales it.

Similarly, when we say O(N + log N) is same as O(N), we're saying that as input size increases,
the N term dominates the log N term, so the shape of the graph is determined by the N term.

**This means, the constants don't change the rate of growth.
The difference in the rate of growth still remains the same even if the constants are present.**
:::

:::tip mental model for constants in loops

Whenever there is loop, the work done inside the loop is considered constant.
This is because, this adds a constant amount of work per iteration.

So how to look at this is, if the entire runtime is log N
and this means the loop runs log N times.
In this case, if there are two statements inside the loop,
it will be O(2) per iteration and
then the overall running time is O(2 log N) which is O(log N) after dropping the constant.
:::

## Big O doesn't mean best case

- Big O notation just gives us a way to classify functions based on their growth rates.
- It doesn't say if anything is the best or worst case.
- Since we ignore the constants and non-dominant terms,
  it can happen that in some cases even O(N) can be slower than O(N log N) if the constants are large enough.

**It's very important to keep in mind that different algorithms behave better at different input sizes.
Hence it's important to understand the input size while designing algorithms.**

:::important Big O doesn't say which algorithm is better
Big O is about the limiting behavior as $n \rightarrow \infty$, not about which algorithm is faster for your actual use case.

Consider it as just a **guideline** to get a rough idea of performance.
:::

## Limiting Behavior

The term **limiting behavior** is used to refer to Big O notation.
It must be understood what this exactly means since the terms doesn't mean what it usually means in day to day life.
Here we must see it as behaviour of the function at limit and
in this case, the limit is when the input approaches infinity.

## Tricks in Big O problems

:::warning every line must be considered

Every line in the code must be considered.
Be it a simple logging or a string creation.
Everything matters during Big O calculation.
:::

## Frequently used Big O classes

<!-- markdownlint-disable MD013-->

| Big-O      | Name         | What it means                                               | Common use cases                                                        |
| ---------- | ------------ | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| O(1)       | Constant     | Time doesn't grow with input size                           | Array index access, hash map lookup, stack push/pop, checking a flag    |
| O(log N)   | Logarithmic  | Input size is reduced by a factor each step                 | Binary search, searching in sorted arrays, balanced BST operations      |
| O(N)       | Linear       | Work grows proportionally with input                        | Scanning an array, finding max/min, counting elements, two-pointer scan |
| O(N log N) | Linearithmic | Logarithmic steps with linear work per step                 | Efficient sorting, divide-and-conquer algorithms, merge-based solutions |
| O(N²)      | Quadratic    | Every element is compared with every other element          | Nested loops, pair comparisons, naive sorting algorithms                |
| O(2ⁿ)      | Exponential  | Each additional element doubles the number of possibilities | Generating all subsets, brute-force decision problems, naive recursion  |
| O(N!)      | Factorial    | All possible orderings must be explored                     | Generating all permutations, brute-force ordering (example TSP)         |

<!-- markdownlint-restore-->

:::tip meaning of words

- **Quadratic** - the word has **quad** in it but it refers only to **square** of a number.
  This is because quad means geometrically square. Hence the word.
  This will to remember the names of terms.
- **Linearithmic** - Linear plus logarithmic.
  This isn't a real mathematical word. Used only in Big O.
  :::
