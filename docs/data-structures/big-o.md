# Big O Notation

:::danger only important nuances
This page only covers important nuances, mental models or hidden concepts
that helps to understand the Big O notation better.
:::

:::important Mental model for Big O notation
View it as graph as always where x-axis is input size
and y-axis is time taken or space used.

Big O is the function that takes input and gives the time or space as output.
For example O(N) means, the f(N) = N where N is the input size takes time proportional to N.
:::

## Meaning of 'O' in Big O Notation

Big O comes from the German word **Ordnung** which means **order**.
In Big O notation, it represents the **order of growth** of a function
meaning in which order does the function scales as the input size increases.
It's about classifying or grouping the function based on its growth rate.

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

## Asymptotic

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
2. How much does '1' insert take on **average** - This is the amortized time.

:::tip Mental model for Amortized Time
Amortized Time = Total time for n operations / n

So in case of ArrayList appending an element scenario which is always discussed,
O(N)/N = O(1) amortized time.
:::

:::warning ArrayList Example
The ArrayList example considers only the **insert** function.
This function just inserts at the end of the ArrayList.
:::

## Bounds

The term bound here means, we say that the running time of a function won't cross this limit.
In case of upper bound, we say it won't be above this limit - meaning lesser than or equal to this limit.
In case of lower bound, we say it won't be below this limit - meaning greater than or equal to this limit.

:::danger Bounds are for the growth class and not exact values
Here the **tight bound** isn't for the exact mathematical calculation but for the growth class classification.

Meaning, if we say an algorithm is O(N), it means its growth class is linear
and it can't be better or worse than that.
:::

:::important Mental model for Bounds
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
Big O is about the limiting behavior as n → ∞, not about which algorithm is faster for your actual use case.

Consider it as just a **guideline** to get a rough idea of performance.
:::

## Limiting Behavior

The term **limiting behavior** is used to refer to Big O notation.
This must be understood what this exactly means since the terms doesn't mean what it usually means in day to day life.
Here we must see it as behaviour of the function at limit and
in this case, the limit is when the input approaches infinity.
